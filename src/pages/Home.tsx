import BaseLayout from "@/components/common/BaseLayout";
import Navbar from "@/components/common/Navbar";
import Main from "@/components/common/Main";
import styled from "styled-components";
import Sidebar from "@/components/common/SideBar";
import { SidebarProvider } from "@/store/SidebarContext";
import { SearchProvider } from "@/store/SearchContext";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Home = () => {
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

export default Home;
