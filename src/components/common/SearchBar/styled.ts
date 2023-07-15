import styled from "styled-components";

export const SearchWrap = styled.div`
  display: flex;
  height: 52px;
  background-color: #ffffff;
  width: 1080px;
  @media screen and (max-width: 1279px) {
    width: 780px;
  }
  @media screen and (max-width: 787px) {
    width: 100%;
  }
`;
export const SearchInput = styled.input`
  width: 100%;
`;

export const CancelButton = styled.button``;
export const SearchButton = styled.button``;
