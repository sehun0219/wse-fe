import styled from "styled-components";
import BaseLayout from "@/components/common/BaseLayout";
import Navbar from "@/components/common/Navbar";
import RecipeForm from "@/components/features/AddRecipeForm";
import { SearchProvider } from "@/store/SearchContext";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AddRecipe = () => {
  return (
    <BaseLayout>
      <SearchProvider>
        <Navbar />
        <MainContainer>
          <RecipeForm />
        </MainContainer>
      </SearchProvider>
    </BaseLayout>
  );
};
export default AddRecipe;
