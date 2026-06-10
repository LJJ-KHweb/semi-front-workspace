// AuthForm.styles.js
// 회원가입 /  로그인 / 비밀번호 변경 / 탈퇴 폼에 쓸거
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Page = styled.main`
  min-height: calc(100vh - 120px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 20px;
  background: ${theme.color.bgSoft};
  font-family: ${theme.font};
`;

export const Card = styled.div`
  width: 100%;
  max-width: 400px;
  background: ${theme.color.bg};
  border: 1px solid ${theme.color.border};
  border-radius: ${theme.radius};
  padding: 36px 32px;
`;

export const Title = styled.h1`
  margin: 0 0 6px;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${theme.color.text};
`;

export const Sub = styled.p`
  margin: 0 0 28px;
  font-size: 14px;
  line-height: 1.5;
  color: ${theme.color.sub};
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 18px;
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: ${theme.color.text};
`;

export const Input = styled.input`
  height: 44px;
  padding: 0 14px;
  font-size: 14px;
  font-family: ${theme.font};
  color: ${theme.color.text};
  background: ${theme.color.bg};
  border: 1px solid ${theme.color.border};
  border-radius: 8px;
  outline: none;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;

  &::placeholder {
    color: #a1a1aa;
  }

  &:focus {
    border-color: ${theme.color.indigo};
    box-shadow: 0 0 0 3px ${theme.color.indigoSoft};
  }

  &:disabled {
    background: ${theme.color.bgSoft};
    cursor: not-allowed;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 46px;
  margin-top: 8px;
  font-size: 15px;
  font-weight: 600;
  font-family: ${theme.font};
  color: #fff;
  background: ${theme.color.indigo};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background 0.15s ease,
    opacity 0.15s ease;

  &:hover:not(:disabled) {
    background: ${theme.color.indigoDark};
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;

// 탈퇴 등 액션용 버튼
export const DangerButton = styled(Button)`
  background: ${theme.color.danger};

  &:hover:not(:disabled) {
    background: #b91c1c;
  }
`;

export const Message = styled.p`
  margin: 16px 0 0;
  font-size: 13px;
  text-align: center;
  color: ${({ $type }) =>
    $type === "error"
      ? theme.color.danger
      : $type === "success"
        ? theme.color.success
        : theme.color.sub};
`;

export const Hint = styled.span`
  font-size: 12px;
  color: ${({ $error }) => ($error ? theme.color.danger : theme.color.sub)};
`;
