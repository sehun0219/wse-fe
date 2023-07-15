import { Container, LinkButton, LogoutButton } from "./styled";
import { UserContext } from "@/store/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const NavButton = () => {
  const userContext = useContext(UserContext);
  const isLogin = !!userContext?.user?.name && !!userContext.token;
  const navigate = useNavigate();

  const handleLogout = () => {
    userContext?.logout();
    navigate("/");
  };

  return (
    <Container>
      {isLogin && (
        <>
          <LinkButton to="/add-recipe">Add Recipe</LinkButton>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </>
      )}
      {!isLogin && (
        <>
          <LinkButton to="/sign-up">Sign up</LinkButton>
          <LinkButton to="/login">Login</LinkButton>
        </>
      )}
    </Container>
  );
};

export default NavButton;
