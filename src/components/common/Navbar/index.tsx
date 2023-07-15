import Logo from "@/components/common/Logo";
import SearchBar from "@/components/common/SearchBar";
import Profile from "@/components/common/Profile";
import { NavbarContainer } from "./styled";
import useNavbar from "./useNavbar";
import NavButton from "../NavButton";

const Navbar = () => {
  const { userContext } = useNavbar();
  if (!userContext) {
    return <div>Loading...</div>;
  }

  return (
    <NavbarContainer>
      {/* <ToggleBox onClick={toggleSidebar}>
        <Line />
        <Line />
        <Line />
      </ToggleBox> */}
      <Logo />
      <SearchBar />
      <Profile />
      <NavButton />
    </NavbarContainer>
  );
};

export default Navbar;
