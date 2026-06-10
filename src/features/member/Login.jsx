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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [memberId, setMemberId] = useState("");
  const [memberPwd, setMemberPwd] = useState("");
  const [status, setStatus] = useState("");
  const [loading, isLoading] = useState(false);
  const navi = useNavigate();

  const onChangeId = (e) => {
    setMemberId(e.target.value);
  };
  const onChangePwd = (e) => {
    setMemberPwd(e.target.value);
  };
  const onSubmit = (e) => {
    if (!memberId || !memberPwd) {
      setStatus("아이디와 비밀번호를 꼭 입력해주세요.");
      return;
    }

    isLoading(true);
    setStatus("");

    axios
      .post("http://localhost/api/auth/login", {
        memberId,
        memberPwd,
      })
      .then((result) => {
        console.log(result);
        setStatus("로그인 성공!");
        //응답데이터를 어딘가에 저장
        // Cookie, Session Storage, Local storage
        // Session Storage 브라우저 종료시 데이터 다날라감
        // Local storage 지우지 않으면 계속 남아있음
        // Session Storage, Local Storage JS로 읽고 쓰기 가능 XSS(악성 스크립주입)에 취약
        // Cookie CSRF공격에 취약

        // 실무에서는 토큰을 저장소에 저장안하고 걍 메모리에 올리는 구조로 많이 씀
        // 실무에서 안전한 방법을 선택해야 한다면 accessToken을 저장소에 저장안하고 걍 메모리
        //                                     refreshToken은 HttpOnly켜서 쿠키에 저장
        //localStorage.setItem("token", result.data.accessToken);
        //console.log(localStorage.getItem("token"));

        // 상태관리 Context
        login(result.data);
        navi("/");
        //alert(localStorage.getItem("token"));
      })
      .catch((error) => {
        if (error.response.data.code === 400) {
          setStatus(error.response.data.message);
        } else {
          setStatus("로그인에 실패했습니다.");
        }
        isLoading(false);
      });
  };

  const onKeyDown = (e) => {
    if (e.key == "Enter") onSubmit();
  };

  return (
    <Page>
      <Card>
        <Title>로그인</Title>
        <Sub>로그인을 하세요.</Sub>

        <Field>
          <Label>아이디</Label>
          <Input
            onKeyDown={onKeyDown}
            onChange={onChangeId}
            placeholder="아이디를 입력하세요."
          />
        </Field>
        <Field>
          <Label>비밀번호</Label>
          <Input
            onKeyDown={onKeyDown}
            onChange={onChangePwd}
            type="password"
            placeholder="비밀번호를 입력하세요."
          />
        </Field>
        <Button onClick={onSubmit} disabled={loading}>
          {loading ? "로그인 하는중 ..." : "로그인"}
        </Button>
        {status.length > 0 && <Message>{status}</Message>}
      </Card>
    </Page>
  );
};
export default Login;
