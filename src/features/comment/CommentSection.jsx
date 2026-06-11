import { useState, useEffect } from "react";
import {
  Body,
  CommentInput,
  CommentItem,
  DateText,
  Empty,
  Form,
  Heading,
  List,
  LoginHint,
  Meta,
  Section,
  SubmitButton,
  Writer,
} from "./styles/Comment.styles";
import api from "../../api/axios";
import { useAuth } from "../../context/AuthContext";

const CommentSection = ({ boardNo }) => {
  const { isLogin } = useAuth();
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");
  const [loading, isLoading] = useState(false);

  const load = () => {
    api
      .get("/comments", { params: { boardNo } })
      .then((result) => setComments([...result.data.data]));
  };

  useEffect(() => {
    load();
  }, [boardNo]);

  const onSubmit = async () => {
    isLoading(true);
    try {
      await api.post("/comments", {
        refBoardNo: boardNo,
        commentContent: content,
      });
      setContent("");
      load();
    } catch (err) {
      console.log(err.response);
      alert("댓글 작성에 실패했습니다.");
    } finally {
      isLoading(false);
    }
  };

  return (
    <Section>
      <Heading>댓글</Heading>
      {isLogin ? (
        <Form>
          <CommentInput
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="댓글을 작성해보아요"
          />
          <SubmitButton disabled={loading} onClick={onSubmit}>
            {loading
              ? "등록중 ..."
              : !content.trim()
                ? "내용을 입력하세요"
                : "등록하기"}
          </SubmitButton>
        </Form>
      ) : (
        <LoginHint>댓글작성은 로그인이 필요합니다.</LoginHint>
      )}
      <br />
      댓글 개수 : {comments.length}
      <br />
      <br />
      {comments.length === 0 ? (
        <Empty>첫 댓글을 남겨보세요.</Empty>
      ) : (
        <List>
          {comments.map((c) => (
            <CommentItem key={c.commentNo}>
              <Meta>
                <Writer>{c.commentWriter}</Writer>
                <DateText>{c.createDate}</DateText>
              </Meta>
              <Body>{c.commentContent}</Body>
            </CommentItem>
          ))}
        </List>
      )}
    </Section>
  );
};
export default CommentSection;
