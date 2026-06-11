import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Section = styled.section`
  margin-top: 40px;
  padding-top: 28px;
  border-top: 1px solid ${theme.color.border};
  font-family: ${theme.font};
`;

export const Heading = styled.h2`
  margin: 0 0 18px;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.color.text};
`;

export const Empty = styled.p`
  margin: 0 0 20px;
  font-size: 14px;
  color: ${theme.color.sub};
`;

export const List = styled.ul`
  list-style: none;
  margin: 0 0 24px;
  padding: 0;
`;

export const CommentItem = styled.li`
  padding: 16px 0;
  border-bottom: 1px solid ${theme.color.border};

  &:first-child {
    border-top: 1px solid ${theme.color.border};
  }
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
`;

export const Writer = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: ${theme.color.text};
`;

export const DateText = styled.span`
  font-size: 12px;
  color: ${theme.color.sub};
`;

export const Body = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-word;
  color: ${theme.color.text};
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CommentInput = styled.textarea`
  min-height: 80px;
  padding: 12px 14px;
  font-size: 14px;
  font-family: ${theme.font};
  line-height: 1.6;
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

export const SubmitButton = styled.button`
  align-self: flex-end;
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

export const LoginHint = styled.p`
  margin: 0;
  padding: 18px;
  text-align: center;
  font-size: 13px;
  color: ${theme.color.sub};
  background: ${theme.color.bgSoft};
  border: 1px solid ${theme.color.border};
  border-radius: 8px;
`;
