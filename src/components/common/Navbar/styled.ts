import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 20px;
  height: 80px;
`;
export const ToggleBox = styled.button``;
export const Line = styled.div``;
export const TextBox = styled.p`
  color: ${(props) => props.theme.textColor};
`;

export const ButtonWrap = styled.div``;
export const LogoutWrap = styled.div``;
export const StyledLinkSignUp = styled(Link)``;
export const StyledLogin = styled(Link)``;
export const SignUpWarp = styled.div``;
export const WelcomeBox = styled.div``;
export const WelcomeText = styled.p``;
export const AddRecipeButton = styled(Link)``;
export const Logout = styled.button``;
export const LogoutBox = styled.div``;
export const AvatarBox = styled.div``;
export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
