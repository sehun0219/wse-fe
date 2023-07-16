import styled from "styled-components";

export const SearchWrap = styled.div`
  display: flex;
  height: 52px;
  width: 700px;
  @media screen and (max-width: 1463px) {
    width: 480px;
  }
  @media screen and (max-width: 1200px) {
    width: 350px;
  }
  @media screen and (max-width: 1112px) {
    width: 240px;
  }
  @media screen and (max-width: 950px) {
    display: none;
  }
`;
export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
  font-size: 1em;
  color: ${(props) => props.theme.textColor};
  background-color: #353a48;
  border-radius: 1rem;
  height: 2.5rem;
  padding: 0 1rem;
  position: relative;
  bottom: -5px;
`;

export const CancelButton = styled.button`
  background-color: transparent;
  border: none;
  color: #999;
  padding: 10px;
  font-size: 1em;
  cursor: pointer;
  transition: color 0.3s ease;
`;

export const SearchButton = styled.button`
  background-color: #23272f;
  border: none;
  border-radius: 1rem;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  position: relative;
  left: -5px;
`;
