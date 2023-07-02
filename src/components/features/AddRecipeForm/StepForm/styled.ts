import styled from "styled-components";

export const Step = styled.div`
  background-color: #f8f8f8;
  padding-top: 4px;
  padding-bottom: 4px;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StepNum = styled.p`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;
export const StepText = styled.textarea`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  resize: none;
  width: 650px;
  height: 200px;
  margin-right: 10px;
  padding: 24px;
  font-size: 24px;
  border: 1px solid #ccc;
  border-radius: 4px;
  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;
export const StepItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 24px;
  padding-left: 34px;
`;
export const StepAddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  border-radius: 1em;
  background-color: #23272f;
  width: 120px;
  height: 34px;
  margin-top: 20px;
`;
export const XBtn = styled.button`
  width: 24px;
  height: 24px;
  margin-left: 20px;
  border-radius: 50%;
  border: none;
  background-color: #23272f;
  color: #f1f1f1;
  cursor: pointer;
  margin-left: 8px;
`;
