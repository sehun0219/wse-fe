import styled from "styled-components";

export const LogoWrap = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TextBox = styled.p`
  color: ${(props) => props.theme.textColor};
  font-weight: 700;
`;

export const LogoIcon = styled.img`
  width: 50px;
  height: 50px;
`;
