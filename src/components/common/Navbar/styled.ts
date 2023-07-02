import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #23272f;
  height: 60px;

  min-width: 100%;

  // 미디어 쿼리 추가
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;
export const ToggleBox = styled.button`
  width: 36px;
  height: 36px;
  border: 1px solid #23272f;
  border-radius: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #23272f;
  margin-left: 25px;
  cursor: pointer;
  &:hover {
    background-color: #21a1c1;
    border-radius: 50%;
  }
  transition: background-color 0.1s;
`;
export const Line = styled.div`
  width: 24px;
  height: 1%;
  border: 2px solid #f6f7f9;
`;

export const LogoWrap = styled.a`
  margin-left: 24px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const TextBox = styled.p`
  color: #f6f7f9;
  width: 180px;
  display: flex;
  align-items: center;
  padding-top: 2px;
  padding-left: 2px;
`;
export const LogoIcon = styled.img`
  width: 55px;
`;

export const SearchWrap = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  input[type="text"]:focus {
    caret-color: #f1f1f1;
  }

  margin-left: 130px;
`;

export const SearchBar = styled.input`
  width: 97%;
  height: 40px;
  border-radius: 1em;
  padding-left: 30px;
  margin-right: -70px;
  background-color: #353a48;
  border: none;
  color: #f1f1f1;
  font-size: 18px;
  &:focus {
    outline: 2px solid #21a1c1;
  }
  // 미디어 쿼리 추가
  @media (max-width: 768px) {
    width: 90%;
    margin-right: 0;
  }
`;

export const CancelButton = styled.button`
  border-radius: 40%;
  background-color: #23272f;
  border: none;
  color: #696969;
  cursor: pointer;
  margin-right: 10px;
  font-size: 18px;
  border-radius: 50%;
  font-weight: 100;
`;

export const SearchButton = styled.button`
  border-radius: 1em;
  background-color: #23272f;
  border: none;
  cursor: pointer;
`;

export const ButtonWrap = styled.div`
  margin-left: 220px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 8px;
  height: 100%;
  gap: 16px;
`;
export const LogoutWrap = styled.div`
  display: flex;
  gap: 16px;
  height: 100%;
  position: relative;
  left: -30px;
`;

export const StyledLinkSignUp = styled(Link)`
  width: 100px;
  height: 80%;
  border-radius: 1em;
  background-color: #293644;
  font-size: 16px;
  font-weight: 400;
  color: #f1f1f1;
  &:hover {
    background-color: #21a1c1;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLogin = styled(Link)`
  width: 100px;
  height: 80%;

  border-radius: 1em;
  background-color: #293644;
  font-size: 16px;
  font-weight: 400;
  color: #f1f1f1;
  &:hover {
    background-color: #21a1c1;
  }
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SignUpWarp = styled.div`
  display: flex;
  gap: 16px;
  height: 70%;
  justify-content: center;
  align-items: center;
`;
export const WelcomeBox = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

export const WelcomeText = styled.p`
  width: 120px;
  height: 100%;
  color: #21a1c1;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddRecipeButton = styled(Link)`
  width: 100px;
  height: 70%;
  border-radius: 1em;
  background-color: #293644;
  font-size: 16px;
  font-weight: 400;
  color: #f1f1f1;
  &:hover {
    background-color: #21a1c1;
  }
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4px;
`;
export const Logout = styled.button`
  width: 100px;
  height: 70%;
  border-radius: 1em;
  background-color: #293644;
  font-size: 16px;
  font-weight: 400;
  color: #f1f1f1;
  &:hover {
    background-color: #21a1c1;
  }
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoutBox = styled.div`
  display: flex;
  gap: 16px;

  align-items: center;
`;
export const AvatarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
`;
export const Avatar = styled.img`
  border: none;
  width: 90%;
  height: 90%;
  border-radius: 50%;
`;
