import { useEffect, useState } from "react";
import {
  Page,
  TopBar,
  PageTitle,
  Button,
  List,
  Item,
  ItemTitle,
  ItemMeta,
  Empty,
  Pager,
  PagerButton,
  Loading,
  DetailTitle,
  MetaRow,
  Content,
  FileBox,
  Actions,
  GhostButton,
  DangerButton,
} from "./styles/Board.styles";
import axios from "axios";
import api from "../../api/axios";
import { useNavigate, useParams } from "react-router-dom";
import CommentSection from "../comment/CommentSection";

const BoardDetail = () => {
  const navi = useNavigate();
  const [board, setBoard] = useState(null);
  const [loading, isLoading] = useState(true);
  const { boardNo } = useParams();

  const isImage = (fileUrl) =>
    /\.(png|jpg|gif|webp|bmp|svg)$/i.test(fileUrl || "");

  const onDelete = async () => {
    if (!confirm("정말 삭제하시겠어요?")) return;

    try {
      await api.delete(`/boards/${boardNo}`);
      navi("/boards");
    } catch {
      alert("삭제에 실패했습니다.");
    }
  };

  useEffect(() => {
    isLoading(true);
    api
      .get(`/boards/${boardNo}`)
      .then((result) => {
        console.log(result);
        setBoard(result.data);
      })
      .catch(() => {
        setBoard(null);
      })
      .finally(() => {
        isLoading(false);
      });
  }, [boardNo]);

  if (loading) {
    return (
      <Page>
        <Loading>게시글 불러오는 중 입니다....</Loading>
      </Page>
    );
  }
  if (!board) {
    return (
      <Page>
        <Empty>존재하지 않는 게시글 입니다!</Empty>
      </Page>
    );
  }
  return (
    <Page>
      <DetailTitle>{board.boardTitle}</DetailTitle>
      <MetaRow>
        <span>{board.boardWriter}</span>
        <span>|</span>
        <span>{board.createDate}</span>
      </MetaRow>
      <Content>{board.boardContent}</Content>
      {board.fileUrl && (
        <FileBox>
          {isImage(board.fileUrl) ? (
            <img src={board.fileUrl} alt="첨부이미지" />
          ) : (
            <a href={board.fileUrl} target="_blank">
              첨부파일
            </a>
          )}
        </FileBox>
      )}
      <Actions>
        <GhostButton onClick={() => navi("/boards")}>목록</GhostButton>
        <GhostButton onClick={() => navi(`/boards/${boardNo}/edit`)}>
          수정하기
        </GhostButton>
        <DangerButton onClick={onDelete}>삭제</DangerButton>
      </Actions>

      <CommentSection boardNo={boardNo} />
    </Page>
  );
};
export default BoardDetail;
