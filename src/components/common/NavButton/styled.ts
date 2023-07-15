import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  border: 1px solid #1e1;
  align-items: center;
  justify-content: center;
`;
export const LinkButton = styled(Link)`
  color: ${(props) => props.theme.textColor};
  text-decoration: none;
  padding: 10px 15px;
  border: none;
  margin-right: 10px;
  transition: 0.2s;
  &:hover {
    color: ${(props) => props.theme.accentColor};
    text-decoration: none;
  }
`;
export const LogoutButton = styled.button`
  color: ${(props) => props.theme.bgColor};
  border: none;
  padding: 10px 15px;
  transition: 0.2s;
  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;
