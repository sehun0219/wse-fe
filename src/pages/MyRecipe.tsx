import BaseLayout from "@/components/common/BaseLayout";
import { SidebarProvider } from "@/store/SidebarContext";
import { SearchProvider } from "@/store/SearchContext";

import Navbar from "@/components/common/Navbar";
import Sidebar from "@/components/common/SideBar";
import Main from "@/components/common/Main";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const MyRecipe = () => {
  return (
    <BaseLayout>
      <Container>
        <SidebarProvider>
          <SearchProvider>
            <Navbar />
            <Sidebar />
            <Main />
          </SearchProvider>
        </SidebarProvider>
      </Container>
    </BaseLayout>
  );
};

export default MyRecipe;
