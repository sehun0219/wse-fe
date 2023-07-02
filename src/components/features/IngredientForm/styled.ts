import styled from "styled-components";

export const IngredientWarp = styled.div`
  background-color: #f8f8f8;
  padding-top: 4px;
  padding-bottom: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-top: 24px;
`;

export const IngredientContentBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
`;

export const IngredientInput = styled.input`
  padding-inline-start: 12px;
  text-align: start;
  text-decoration: none;
  font-size: 16px;
  border: 1px solid #23272f;
  border-radius: 4px;
  width: 250px;
  height: 40px;
`;
export const ButtonWrap = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const IngredientXButton = styled.button`
  background-color: #23272f;
  height: 50%;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  color: #f1f1f1;
  margin-left: -12px;
`;

export const CoreCheck = styled.p`
  width: 240px;
  font-weight: 400;
  position: relative;
  left: 50px;
  top: 32px;
`;
