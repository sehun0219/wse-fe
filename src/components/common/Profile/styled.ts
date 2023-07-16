import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
export const Text = styled.p`
  color: ${(props) => props.theme.textColor};
`;
