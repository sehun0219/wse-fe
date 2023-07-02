import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1240px;
  background-color: #23272f;
  padding: 32px;
`;
export const DummyContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 16px;
`;
export const AddRecipeTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: #f8f8f8;
  font-weight: bold;
  font-size: 20px;
  padding: 24px;
  border-radius: 4px 4px 0 0;
`;

export const FirstSectionInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  gap: 24px;
  margin-left: 40px;
`;

export const FirstSection = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  border-bottom: 1px solid #999999;
  padding-bottom: 32px;
  border-radius: 0px 0px 4px 4px;
`;

export const SecondSection = styled.div`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 32px;
  min-height: 100px;
  border-radius: 4px;
`;

export const Br = styled.div`
  background-color: #23272f;
  width: 100%;
  height: 10px;
`;
export const Ingredient = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 44px;
  margin-left: 38px;
`;

export const Notice = styled.span`
  margin-top: 12px;
  margin-left: 38px;
  font-weight: 300;
  width: 100%;
`;

export const ThirdSection = styled.div`
  background-color: white;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const StepTitle = styled.p`
  width: 94%;

  font-size: 20px;
  font-weight: bold;
  margin-top: 44px;
  margin-left: 38px;
`;
export const StepExplanation = styled.span`
  margin-top: 12px;
  margin-left: 38px;
  font-weight: 300;
  width: 94%;
`;
export const StepForm = styled.div`
  border: 1px solid red;

  display: flex;
  justify-content: center;
  gap: 5px;
  margin-bottom: 20px;
`;
export const StepNumber = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const StepTextArea = styled.textarea`
  width: 40%;
  height: 100px;
  resize: none;
  margin-bottom: 10px;
`;
export const StepImg = styled.img`
  width: 150px;
  height: 100px;
  max-height: 200px;
  object-fit: cover;
`;
export const StepPlusButton = styled.button``;
export const CompleteTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 20px;
`;

export const ForthSection = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 32px;
  min-height: 100px;
  padding: 40px;
  border-radius: 4px;
`;

export const Complete = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CompleteImgWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const CompleteImg = styled.img`
  width: 140px;
  height: 140px;
  margin: 4px;
`;

export const FifthSection = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 32px;
  min-height: 100px;
  padding: 40px; // 상하좌우 안쪽으로 20px만큼 들어감
`;
export const SaveButton = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 32px;
  min-height: 100px;
  padding: 40px;
  border-radius: 4px;
`;

export const CookingTipP = styled.p`
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 20px;
`;
export const CookingTipTXT = styled.textarea`
  font-size: 20px;
`;

export const Save = styled.button`
  width: 200px;
  height: 40px;
  background-color: #23272f;
  color: #f1f1f1;
  border: none;
  border-radius: 1em;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
`;
