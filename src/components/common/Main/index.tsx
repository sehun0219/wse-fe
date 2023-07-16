import { useEffect, useState, useContext } from "react";
import RecipeCard from "../RecipeCard";
import { Link } from "react-router-dom";
import {
  Container,
  Top,
  MainBody,
  PageNationWrap,
  PageNation,
  PageNationButton,
} from "./styled";
import { getRecipeList } from "@/apis/recipe";
import { useSearch } from "@/store/SearchContext";
import { SidebarContext } from "@/store/SidebarContext";

const Main = () => {
  const { searchTerm } = useSearch();
  const [recipeData, setRecipeData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        try {
          setRecipeData(searchTerm);
        } catch (error) {
          console.error(error);
        }
      } else {
        try {
          const data = await getRecipeList();
          setRecipeData(data);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchData();
  }, [searchTerm]);

  return (
    <Container>
      <Top>
        An assortment of {recipeData.length} exquisite recipes awaits you
      </Top>
      <MainBody>
        {recipeData.map((item, i) => (
          <Link to="/detail" state={{ data: item }} key={i}>
            <RecipeCard key={i} data={item} />
          </Link>
        ))}
      </MainBody>
    </Container>
  );
};

export default Main;
