import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoWrap = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TextBox = styled.p`
  color: ${(props) => props.theme.textColor};
`;

export const LogoIcon = styled.img`
  width: 50px;
  height: 50px;
`;
