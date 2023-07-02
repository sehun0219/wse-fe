import styled from "styled-components";
import { Link } from "react-router-dom";
export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FormContainer = styled.form`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 350px;
  height: 500px;
  background-color: #ffff;
  padding-bottom: 30px;
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
`;
export const InputContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 18px;
`;

export const LoginButton = styled.button`
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

export const BrWrap = styled.div`
  width: 80%;
  height: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: -20px 0px -20px 0px;
`;
export const Br = styled.div`
  width: 38%;
  height: 1px;
  border: 1px solid #708090;
`;

export const Google = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 38px;
  border: 1px solid green;
  border-radius: 8px;
  margin: 0px 0px -16px 0px;
`;

export const PassWordChecker = styled(Link)`
  width: 80%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    color: #0056b3;
  }
  color: #343a46;
`;

export const SignUpChecker = styled.div`
  width: 350px;
  height: 60px;
  background-color: #ffff;
  margin-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
`;

export const SignUpText = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  color: #343a46;
  cursor: pointer;
  &:hover {
    color: #0056b3;
  }
  padding-top: 8px;
`;
