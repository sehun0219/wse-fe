import styled from "styled-components";

export const Container = styled.div<{ isSidebarVisible: boolean }>`
  width: 250px;
  height: 920px;
  flex-direction: column;
  display: ${({ isSidebarVisible }) => (isSidebarVisible ? "block" : "none")};
`;

export const SideBarMenu = styled.div`
  width: 100%;
  height: 270px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const ShortCut = styled.div`
  width: 100%;
  height: 230px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const ShortCutTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #f1f1f1;
  font-style: italic;
  text-decoration: underline;
`;

export const LinkTo = styled.a`
  width: 80%;
  height: 40px;
  margin: -25px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f1f1f1;
  background-color: transparent;
  cursor: pointer;
  border: 2px solid #353a48;
  transition: background-color 0.2s ease-in-out;
  :hover {
    background-color: #f1f1f1;
    color: #000;
  }
  :active {
    background-color: #000;
    color: #f1f1f1;
  }
`;

export const LinkedSavedBtn = styled.div`
  width: 80%;
  height: 40px;
  margin: -25px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f1f1f1;
  background-color: transparent;
  cursor: pointer;
  border: 2px solid #353a48;
  transition: background-color 0.2s ease-in-out;
  :hover {
    background-color: #f1f1f1;
    color: #000;
  }
  :active {
    background-color: #000;
    color: #f1f1f1;
  }
`;

export const ShortCutMeneComp = styled.button`
  width: 80%;
  height: 40px;
  margin: -6px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f1f1f1;
  background-color: transparent;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  border: 2px solid #353a48;
  :hover {
    background-color: #f1f1f1;
    color: #000;
  }

  :active {
    background-color: #000;
    color: #f1f1f1;
  }
`;

export const FooterBox = styled.div`
  width: 90%;
  height: 300px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: 12px;
  margin-left: 12px;
  padding: 20px;
  background-color: #23272f;
  color: #f1f1f1;
  font-size: 16px;
  text-align: center;
`;

export const Footer = styled.div`
  max-width: 80%;
`;

export const Text = styled.p`
  margin-bottom: 30px; // 변경: 텍스트간 여백
  color: #f1f1f1; // 변경: 글자 색상
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
`;

export const GitLink = styled.a`
  position: relative;
  left: -26px;
  bottom: -10px;
  color: #61dafb;
  text-decoration: none;
  font-weight: 400;
  &:hover {
    color: #f1f1f1;
  }
`;

export const Br = styled.div`
  position: relative;
  left: 27px;
  top: -10px;
  width: 200px;
  height: 1px;
  border: 2px solid #f1f1f1;
`;
