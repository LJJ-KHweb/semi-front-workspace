import { theme } from "../../../styles/theme";
import styled from "styled-components";

export const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background: ${theme.color.bg};
  border-bottom: 1px solid ${theme.color.border};
  backdrop-filter: saturate(180%) blur(8px);
`;

export const Inner = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  height: 60px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.a`
  display: flex;
  align-items: center;
  font-family: ${theme.font};
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: ${theme.color.text};
  text-decoration: none;
`;

export const Dot = styled.span`
  width: 7px;
  height: 7px;
  margin-left: 3px;
  border-radius: 50%;
  background: ${theme.color.indigo};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${theme.font};
`;

export const NavLink = styled.a`
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  color: ${theme.color.sub};
  text-decoration: none;
  border-radius: 8px;
  transition:
    color 0.15s ease,
    background 0.15s ease;

  &:hover {
    color: ${theme.color.text};
    background: ${theme.color.bgSoft};
  }
`;

export const Login = styled(NavLink)`
  color: ${theme.color.skyblue};
  font-weight: 600;

  &:hover {
    color: ${theme.color.indigoDark};
    background: ${theme.color.indigoSoft};
  }
`;
