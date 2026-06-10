import { useAuth } from "../../../context/AuthContext";
import { Hint } from "../../../features/styles/AuthForm.styles";
import { Bar, Inner, Brand, Dot, Nav, NavLink, Login } from "./Header.styles";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navi = useNavigate();

  const { isLogin, user, logout } = useAuth();

  return (
    <Bar>
      <Inner>
        <Brand onClick={() => navi("/")}>Pre-Semi</Brand>
        <Nav>
          {isLogin ? (
            <>
              <Hint>{user.memberName}님</Hint>
              <NavLink onClick={() => navi("/password")}>비밀번호 변경</NavLink>
              <NavLink onClick={() => navi("/delete")}>탈퇴</NavLink>
              <Login onClick={logout}>로그아웃</Login>
            </>
          ) : (
            <>
              <NavLink onClick={() => navi("/signup")}>회원가입</NavLink>
              <Login onClick={() => navi("/login")}>로그인</Login>
            </>
          )}
        </Nav>
      </Inner>
    </Bar>
  );
};
export default Header;
