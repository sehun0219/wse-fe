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
  const [pagePos, setPagePos] = useState<number>(1);
  const [pageNation, setPageNation] = useState<number[]>([]);
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

  useEffect(() => {
    let temp;
    recipeData.length % 15 == 0
      ? (temp = [...Array(Math.floor(recipeData.length / 15))])
      : (temp = [...Array(Math.floor(recipeData.length / 15 + 1))]);

    temp = temp.map((_, index) => index + 1);
    temp.push(-1);
    setPageNation(temp);
  }, [recipeData.length]);
  const sidebarContext = useContext(SidebarContext);
  if (sidebarContext === undefined) {
    return null;
  }
  const { selectedCategory } = sidebarContext;

  const pagePosEvent = (i: number) => {
    if (i === -1) {
      if (pagePos + 1 < recipeData.length / 15 + 1.01) {
        setPagePos(pagePos + 1);
      }
    } else {
      setPagePos(i);
    }
  };

  const filteredRecipeData = selectedCategory
    ? recipeData.filter((item) => item.category === selectedCategory)
    : recipeData;

  return (
    <Container>
      <Top>
        An assortment of {filteredRecipeData.length} exquisite recipes awaits
        you
      </Top>
      <MainBody>
        {filteredRecipeData
          .filter((_, i) => 15 * (pagePos - 1) <= i && i < 15 * pagePos)
          .map((item, i) => (
            <Link to="/detail" state={{ data: item }} key={i}>
              <RecipeCard key={i} data={item} />
            </Link>
          ))}
      </MainBody>
      <PageNationWrap>
        <PageNation>
          {pageNation.map((i) => (
            <PageNationButton
              key={i}
              isActive={pagePos === i}
              onClick={() => pagePosEvent(i)}
            >
              {i == -1 ? ">" : i}
            </PageNationButton>
          ))}
        </PageNation>
      </PageNationWrap>
    </Container>
  );
};

export default Main;
