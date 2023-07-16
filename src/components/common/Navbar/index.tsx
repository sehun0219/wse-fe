import Logo from "@/components/common/Logo";
import SearchBar from "@/components/common/SearchBar";
import Profile from "@/components/common/Profile";
import { NavbarContainer } from "./styled";
import NavButton from "../NavButton";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo />
      <SearchBar />
      <Profile />
      <NavButton />
    </NavbarContainer>
  );
};

export default Navbar;
