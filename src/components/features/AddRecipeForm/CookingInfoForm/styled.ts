import styled from "styled-components";

export const CookingInfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #333333;
  margin-right: 83px;
`;

export const Select = styled.select`
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid gray;
  appearance: none;
  background-color: white;
  background-image: url("https://fonts.gstatic.com/s/i/materialiconsoutlined/keyboard_arrow_down/v7/24px.svg?download=true");
  background-repeat: no-repeat;
  background-position: right;
  width: 124px;
`;

export const SelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 620px;
`;
