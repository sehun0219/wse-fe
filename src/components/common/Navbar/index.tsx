import {
  useState,
  MouseEvent,
  ChangeEvent,
  useContext,
  useEffect,
} from "react";
import { UserContext } from "@/store/UserContext";
import { useNavigate } from "react-router-dom";
import { useSidebar } from "@/store/SidebarContext";
import { useSearch } from "@/store/SearchContext";

import {
  NavbarContainer,
  ButtonWrap,
  SearchWrap,
  SearchBar,
  LogoWrap,
  LogoIcon,
  SearchButton,
  CancelButton,
  StyledLinkSignUp,
  StyledLogin,
  AddRecipeButton,
  WelcomeBox,
  WelcomeText,
  Logout,
  ToggleBox,
  TextBox,
  Line,
  LogoutWrap,
  SignUpWarp,
  LogoutBox,
  Avatar,
  AvatarBox,
} from "./styled";
import { getSearchList } from "@/apis/recipe";

const Navbar = () => {
  const { toggleSidebar } = useSidebar();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [avatarImg, setAvatarImg] = useState("");
  const { searchTerm, setSearchTerm } = useSearch();
  useEffect(() => {
    const userStorageItem = window.localStorage.getItem("userInfo") ?? null;
    if (userStorageItem) {
      const user = JSON.parse(userStorageItem);
      if (user?._id) {
        setAvatarImg(user.avatarImg);
      }
    }
  }, []);
  const userContext = useContext(UserContext);
  if (!userContext) {
    return <div>Loading...</div>;
  }

  const { user, token, logout } = userContext;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSearchButton = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await getSearchList(search);
      setSearchTerm(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    setSearch("");
    setSearchTerm("");
  };

  return (
    <NavbarContainer>
      <ToggleBox onClick={toggleSidebar}>
        <Line />
        <Line />
        <Line />
      </ToggleBox>
      <LogoWrap href="/">
        <LogoIcon src="public/Logo/Logo.png"></LogoIcon>
        <TextBox>What should I eat</TextBox>
      </LogoWrap>
      <SearchWrap>
        <SearchBar type="text" value={search} onChange={handleSearch} />
        <CancelButton onClick={handleCancel}>X</CancelButton>
        <SearchButton onClick={handleSearchButton}>🔍</SearchButton>
      </SearchWrap>

      <ButtonWrap>
        {!user?.name && !token && (
          <SignUpWarp>
            <StyledLinkSignUp to="/sign-up">Sign up</StyledLinkSignUp>
            <StyledLogin to="/login">Login</StyledLogin>
          </SignUpWarp>
        )}
        {user?.name && token && (
          <LogoutWrap>
            <WelcomeBox>
              <AvatarBox>
                <Avatar src={"http://localhost:8080" + avatarImg} />
              </AvatarBox>
              <WelcomeText>Welcome!! {user.email}</WelcomeText>
            </WelcomeBox>
            <LogoutBox>
              <AddRecipeButton to="/add-recipe">Add Recipe</AddRecipeButton>
              <Logout onClick={handleLogout}>Logout</Logout>
            </LogoutBox>
          </LogoutWrap>
        )}
      </ButtonWrap>
    </NavbarContainer>
  );
};

export default Navbar;
