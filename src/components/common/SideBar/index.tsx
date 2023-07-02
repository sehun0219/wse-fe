import { useContext } from "react";
import {
  Container,
  SideBarMenu,
  ShortCut,
  FooterBox,
  LinkTo,
  ShortCutMeneComp,
  ShortCutTitle,
  Br,
  Footer,
  Text,
  GitLink,
} from "./styled";
import { UserContext } from "@/store/UserContext";
import { useSidebar } from "@/store/SidebarContext";

const Sidebar = () => {
  const { isSidebarVisible, setSelectedCategory } = useSidebar();
  const userContext = useContext(UserContext);
  if (!userContext) {
    return <div>Loading...</div>;
  }
  const { user, token } = userContext;
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <Container isSidebarVisible={isSidebarVisible}>
      <SideBarMenu>
        <LinkTo href="/">Home</LinkTo>
        {!user?.name && !token && (
          <>
            <LinkTo href="/login">Login</LinkTo>
          </>
        )}
        {user?.name && token && (
          <>
            <LinkTo href="/my-recipe">내가올린레시피</LinkTo>
          </>
        )}
        <LinkTo href="/recent">Recent</LinkTo>
      </SideBarMenu>
      <Br />
      <ShortCut>
        <ShortCutTitle>Quick Search</ShortCutTitle>
        <ShortCutMeneComp onClick={() => handleCategoryClick("Main dish")}>
          MainDish
        </ShortCutMeneComp>
        <ShortCutMeneComp onClick={() => handleCategoryClick("Drink")}>
          Drink
        </ShortCutMeneComp>
        <ShortCutMeneComp onClick={() => handleCategoryClick("Snack")}>
          Snack
        </ShortCutMeneComp>
      </ShortCut>
      <FooterBox>
        <Footer>
          <Text>
            {`© 2023 All rights reserved. 
            This website is maintained by Cayde Kim.
            Visit the GitHub repository at`}
          </Text>
          <GitLink
            href="https://github.com/sehun0219"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/sehun0219
          </GitLink>
        </Footer>
      </FooterBox>
    </Container>
  );
};

export default Sidebar;
