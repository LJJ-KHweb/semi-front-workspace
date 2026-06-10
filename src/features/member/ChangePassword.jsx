import { useState } from "react";
import {
  Message,
  Hint,
  Page,
  Card,
  Title,
  Sub,
  Field,
  Label,
  Input,
  Button,
} from "../styles/AuthForm.styles";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

const ChangePassword = () => {
  const [currentPwd, setCurrentPwd] = useState("");
  const [newPwd, setnewPwd] = useState("");
  const [newPwdConfirm, setnewPwdConfirm] = useState("");
  const [status, setStatus] = useState("");
  const [loading, isLoading] = useState("");

  const mismatch = newPwdConfirm.length > 0 && newPwd !== newPwdConfirm;

  const onSubmit = async () => {
    if (!currentPwd || !newPwd) {
      setStatus("모든 항목을 입력해주세요");
      return;
    }
    if (mismatch) {
      setStatus("새 비밀번호가 일치하지 않습니다.");
    }
    console.log("들어옴");

    try {
      await api.patch("/members", {
        memberPwd: currentPwd,
        updatePwd: newPwd,
      });
      setStatus("비밀번호가 변경되었습니다.");
      setCurrentPwd("");
      setnewPwd("");
      setnewPwdConfirm("");
    } catch (err) {
      console.log(err.response.data.message);
      setStatus(err.response.data.message);
    } finally {
      isLoading(false);
    }
  };
  // 비동기 코드를 동기식으로 처리하고 싶을때 사용하는 문법 async await
  // async / await는 .then() .catch()를 위에서 아래로 읽기 편하게 쓴 문법

  return (
    <Page>
      <Card>
        <Title>비밀번호 바꾸기</Title>
        <Sub>안전한 사용을 위해 3개월마다 바꾸시오.</Sub>

        <Field>
          <Label>현재 비밀번호</Label>
          <Input
            onChange={(e) => setCurrentPwd(e.target.value)}
            type="password"
            placeholder="현재 비밀번호"
          />
        </Field>

        <Field>
          <Label>새 비밀번호</Label>
          <Input
            onChange={(e) => setnewPwd(e.target.value)}
            type="password"
            placeholder="새 비밀번호"
          />
        </Field>

        <Field>
          <Label>새 비밀번호 확인</Label>
          <Input
            onChange={(e) => setnewPwdConfirm(e.target.value)}
            type="password"
            placeholder="새 비밀번호 확인"
          />
          {mismatch && <Hint $error>비밀번호가 일치하지 않습니다</Hint>}
        </Field>

        <Button onClick={onSubmit} disabled={loading}>
          {loading ? "바꾸는중" : "변경하기"}
        </Button>
        {status && <Message>{status}</Message>}
      </Card>
    </Page>
  );
};

export default ChangePassword;
