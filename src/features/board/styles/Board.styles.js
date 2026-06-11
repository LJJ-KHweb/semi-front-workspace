// Board.styles.js
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Page = styled.main`
  max-width: 720px;
  margin: 0 auto;
  padding: 48px 20px 80px;
  min-height: calc(100vh - 120px);
  font-family: ${theme.font};
  color: ${theme.color.text};
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const PageTitle = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

/* ---------- 버튼 ---------- */
export const Button = styled.button`
  height: 40px;
  padding: 0 18px;
  font-size: 14px;
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
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const GhostButton = styled(Button)`
  color: ${theme.color.text};
  background: transparent;
  border: 1px solid ${theme.color.border};

  &:hover:not(:disabled) {
    background: ${theme.color.bgSoft};
  }
`;

export const DangerButton = styled(Button)`
  color: ${theme.color.danger};
  background: transparent;
  border: 1px solid #fecaca;

  &:hover:not(:disabled) {
    background: #fef2f2;
  }
`;

/* ---------- 목록 ---------- */
export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid ${theme.color.border};
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 4px;
  border-bottom: 1px solid ${theme.color.border};
  color: inherit;
  cursor: pointer;
  transition: background 0.12s ease;

  &:hover {
    background: ${theme.color.bgSoft};
  }
`;

export const ItemTitle = styled.span`
  font-size: 15px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ItemMeta = styled.span`
  flex-shrink: 0;
  font-size: 13px;
  color: ${theme.color.sub};
`;

export const Empty = styled.div`
  padding: 64px 0;
  text-align: center;
  font-size: 14px;
  color: ${theme.color.sub};
`;

/* ---------- 페이지네이션 ---------- */
export const Pager = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 28px;
  font-size: 14px;
  color: ${theme.color.sub};
`;

export const PagerButton = styled.button`
  height: 36px;
  padding: 0 14px;
  font-size: 14px;
  font-family: ${theme.font};
  color: ${theme.color.text};
  background: ${theme.color.bg};
  border: 1px solid ${theme.color.border};
  border-radius: 8px;
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    color 0.15s ease;

  &:hover:not(:disabled) {
    border-color: ${theme.color.indigo};
    color: ${theme.color.indigo};
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

/* ---------- 상세 ---------- */
export const DetailTitle = styled.h1`
  margin: 0 0 12px;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.3;
`;

export const MetaRow = styled.div`
  display: flex;
  gap: 12px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${theme.color.border};
  font-size: 13px;
  color: ${theme.color.sub};
`;

export const Content = styled.div`
  padding: 28px 2px;
  font-size: 15px;
  line-height: 1.75;
  white-space: pre-wrap;
  word-break: break-word;
  min-height: 160px;
`;

export const FileBox = styled.div`
  margin: 8px 0 28px;
  padding: 14px 16px;
  background: ${theme.color.bgSoft};
  border: 1px solid ${theme.color.border};
  border-radius: 8px;
  font-size: 13px;

  img {
    display: block;
    max-width: 100%;
    border-radius: 6px;
  }
  a {
    color: ${theme.color.indigo};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

/* ---------- 폼 ---------- */
export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 18px;
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
`;

export const Input = styled.input`
  height: 44px;
  padding: 0 14px;
  font-size: 14px;
  font-family: ${theme.font};
  color: ${theme.color.text};
  border: 1px solid ${theme.color.border};
  border-radius: 8px;
  outline: none;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;

  &:focus {
    border-color: ${theme.color.indigo};
    box-shadow: 0 0 0 3px ${theme.color.indigoSoft};
  }
`;

export const Textarea = styled.textarea`
  min-height: 280px;
  padding: 12px 14px;
  font-size: 14px;
  font-family: ${theme.font};
  line-height: 1.7;
  color: ${theme.color.text};
  border: 1px solid ${theme.color.border};
  border-radius: 8px;
  outline: none;
  resize: vertical;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;

  &:focus {
    border-color: ${theme.color.indigo};
    box-shadow: 0 0 0 3px ${theme.color.indigoSoft};
  }
`;

export const FileLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 14px;
  font-size: 13px;
  font-weight: 500;
  color: ${theme.color.text};
  background: ${theme.color.bg};
  border: 1px dashed ${theme.color.border};
  border-radius: 8px;
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    color 0.15s ease;

  &:hover {
    border-color: ${theme.color.indigo};
    color: ${theme.color.indigo};
  }
  input {
    display: none;
  }
`;

export const FileName = styled.span`
  margin-left: 10px;
  font-size: 13px;
  color: ${theme.color.sub};
`;

export const Message = styled.p`
  margin: 12px 0 0;
  font-size: 13px;
  color: ${({ $type }) =>
    $type === "error" ? theme.color.danger : theme.color.sub};
`;

export const Loading = styled.div`
  padding: 80px 0;
  text-align: center;
  font-size: 14px;
  color: ${theme.color.sub};
`;
