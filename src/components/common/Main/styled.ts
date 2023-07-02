import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 250px);
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;
export const Top = styled.div`
  width: 500px;
  padding-top: 20px;
  font-size: 18px;
  font-weight: 600;
  padding-left: 68px;
  color: #4d5669;
  margin-bottom: 4px;
  position: relative;
  left: -18px;
`;
export const MainBody = styled.div`
  width: 92%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
  margin-left: 50px;
`;

export const PageNationWrap = styled.div`
  width: 95%;
  height: 50px;
  margin-left: 30px;
  margin-right: 30px;
  border-top: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PageNation = styled.div`
  width: 540px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const PageNationButton = styled.button<{ isActive: boolean }>`
  width: 40px;
  height: 40px;
  font-weight: bold;
  color: #f6f7f9;
  border: none;
  box-shadow: none;
  background-color: ${(props) => (props.isActive ? "#5ED4F4" : "#343a46")};
  cursor: pointer;
  &:hover {
    background-color: #5ed4f4;
  }
  transition: background-color 0.2s;
  border-radius: 4px;
`;
