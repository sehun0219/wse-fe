import styled from "styled-components";
import { Link } from "react-router-dom";
export const PageWrapper = styled.div`
  width: 100%;
  min-height: 96vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const FormContainer = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 350px;
  height: 715px;
  border-radius: 2px;
  background-color: #ffff;
`;

export const LogoImg = styled.div`
  width: 100%;
  height: 128px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url("public/Logo/CardLogo.png");
  background-size: cover;
  background-position: center;
  border-radius: 2px;
`;

export const GoogleLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 38px;
  border: 1px solid green;
  border-radius: 8px;
  margin: 0px 0px -16px 0px;
`;

export const BrWrap = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0px 0px -16px 0px;
`;
export const Br = styled.div`
  width: 38%;
  height: 1px;
  border: 1px solid #708090;
`;

export const SubmitButton = styled.button`
  width: 80%;
  height: 32px;
  padding: 0.5em;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const PasswordHintWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px 10px 42px;
`;
export const PasswordHint = styled.p`
  color: #343a46;
  font-size: 12px;
  font-weight: 350;
`;

export const AvatarResister = styled.div`
  width: 80%;
  height: 200px;
  border: 1px solid #708090;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AvatarHiddenBox = styled.div`
  width: 100%;
  height: 200px;
`;
export const Avatar = styled.img`
  width: 175px;
  height: 175px;
  border: 1px dashed #afdbf5;
  border-radius: 50%;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
  }
`;

export const LinkToLogin = styled(Link)`
  margin-bottom: 1em;
  font-weight: 400;
  font-size: 14px;
  color: #343a46;
  cursor: pointer;
  &:hover {
    color: #0056b3;
  }
`;
