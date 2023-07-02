import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: #23272f;
  font-size: 14px;
  width: 920px;
`;

export const Text = styled.p`
  width: 900px;
  height: 20px;
  text-align: center;
  color: #f6f7f9;
  font-weight: 400;
`;

export const GitLink = styled.a`
  color: #f6f7f9;
  &:hover {
    text-decoration: underline;
    color: #fde8a1;
  }
  margin-left: 10px;
`;
