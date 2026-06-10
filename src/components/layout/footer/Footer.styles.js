import { theme } from "../../../styles/theme";
import styled from "styled-components";

export const Wrap = styled.footer`
  width: 100%;
  border-top: 1px solid ${theme.color.border};
  background: ${theme.color.bgSoft};
`;

export const Inner = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-family: ${theme.font};
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: ${theme.color.text};
`;

export const Dot = styled.span`
  width: 6px;
  height: 6px;
  margin-left: 3px;
  border-radius: 50%;
  background: ${theme.color.indigo};
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;

  a {
    font-size: 13px;
    color: ${theme.color.sub};
    text-decoration: none;
    transition: color 0.15s ease;

    &:hover {
      color: ${theme.color.indigo};
    }
  }
`;

export const Copy = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${theme.color.sub};
`;
