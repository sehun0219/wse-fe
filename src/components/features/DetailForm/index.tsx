import {
  PageWrapper,
  MainContentWrap,
  MainWrap,
  SideWrap,
  MainImg,
  AvatarImg,
  UserId,
  Title,
  Description,
  CookingInfo,
  InfoItem,
  IngredientsWrap,
  MostViewCard,
  ViewTitle,
  ViewDesc,
  ViewAvatar,
  ViewId,
  SideRecipeCard,
  SideRecipeImg,
  SideRecipeTitle,
  FormTitle,
  IngredientsDetailWrap,
  CoreItem,
  ContentsBox,
  CookingStepWrap,
  CookingStepCard,
  StepNum,
  StepDesc,
  StepImg,
  Item,
  ItemName,
  ItemQuantity,
  CardTitle,
  CardAvatar,
  TextWrap,
  GapBox,
  CoreText,
  EachStepCard,
  FooterBox,
  SliderContainer,
  ImageContainer,
  Image,
  PrevButton,
  NextButton,
} from "./styled";
import { Key, useEffect, useState } from "react";
import { RecipeData } from "@/interface/recipe";
import Footer from "@/components/common/Footer";
import { getRecipeDetail } from "@/apis/recipe";
const DetailForm = ({ data }: any) => {
  console.log("data>>", data);
  const [recipeData, setRecipeData] = useState<RecipeData>({
    mainImg: "",
    title: "",
    category: "",
    description: "",
    cookingInfo: {
      servingSize: "",
      cookingTime: "",
      difficulty: "",
      type: "",
    },
    coreItems: [],
    ingredient: [],
    completedImg: [],
    cookingStep: [
      {
        stepNum: 1,
        stepDesc: "",
        stepImg: "",
      },
    ],
    creator: {
      avatarImg: "",
      name: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getRecipeDetail(data._id);

        if (res && res.length > 0) {
          setRecipeData({
            mainImg: res[0].mainImg,
            title: res[0].title,
            category: res[0].category,
            description: res[0].desc,
            cookingInfo: {
              servingSize: res[0].cookingInfo.servingSize,
              cookingTime: res[0].cookingInfo.time,
              difficulty: res[0].cookingInfo.difficulty,
              type: res[0].category,
            },
            coreItems: [],
            ingredient: res[0].ingredient,
            completedImg: res[0].completedImgs,
            cookingStep: res[0].cookingStep.map((i: any) => ({
              stepNum: i.stepNum,
              stepDesc: i.stepDesc,
              stepImg: i.imgSrc,
            })),
            creator: {
              avatarImg: JSON.parse(res[0].userInfo).avatarImg,
              name: JSON.parse(res[0].userInfo).name,
            },
          });
        }
      } catch (error) {
        console.error("Failed to fetch recipe detail:", error);
      }
    };

    fetchData();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrevClick = () => {
    setCurrentIndex((oldCurrentIndex: number) => {
      if (oldCurrentIndex === 0) {
        return recipeData.completedImg.length - 1;
      } else {
        return oldCurrentIndex - 1;
      }
    });
  };

  const handleNextClick = () => {
    setCurrentIndex(
      (oldCurrentIndex: number) =>
        (oldCurrentIndex + 1) % recipeData.completedImg.length
    );
  };

  return (
    <PageWrapper>
      <MainContentWrap>
        <MainWrap>
          <MainImg src={recipeData.mainImg}></MainImg>
          <AvatarImg src={recipeData.creator.avatarImg}></AvatarImg>
          <UserId>{recipeData.creator.name}</UserId>
          <Title>{recipeData.title}</Title>
          <Description>{recipeData.description}</Description>
          <CookingInfo>
            <InfoItem>{recipeData.cookingInfo.type}</InfoItem>
            <InfoItem>{recipeData.cookingInfo.servingSize}</InfoItem>
            <InfoItem>{recipeData.cookingInfo.cookingTime}</InfoItem>
            <InfoItem>{recipeData.cookingInfo.difficulty}</InfoItem>
          </CookingInfo>
        </MainWrap>

        <IngredientsWrap>
          <FormTitle>Ingredient</FormTitle>
          <IngredientsDetailWrap>
            <CoreItem>
              <CoreText>Core Items </CoreText>
              {recipeData.coreItems.map((item, index) => (
                <p key={index}>
                  {item.itemName}
                  {index < recipeData.coreItems.length - 1 ? ",ㅤ" : ""}
                </p>
              ))}
            </CoreItem>
            <ContentsBox>
              {recipeData.ingredient.map((item, index) => (
                <Item key={index}>
                  <ItemName>
                    {item.ingredient.charAt(0).toUpperCase() +
                      item.ingredient.slice(1)}
                  </ItemName>
                  <ItemQuantity>{item.quantity.toUpperCase()}</ItemQuantity>
                </Item>
              ))}
            </ContentsBox>
          </IngredientsDetailWrap>
        </IngredientsWrap>

        <CookingStepWrap>
          <FormTitle>Cooking Steps</FormTitle>
          <CookingStepCard>
            {recipeData.cookingStep.map((item, index) => (
              <EachStepCard key={index}>
                <StepNum>{item.stepNum}</StepNum>
                <StepDesc>{item.stepDesc}</StepDesc>
                <StepImg src={item.stepImg}></StepImg>
              </EachStepCard>
            ))}
          </CookingStepCard>
        </CookingStepWrap>
        {/* <SliderContainer>
          {recipeData.completedImg.map((item, index) => (
            <ImageContainer
              key={index}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                display: currentIndex === index ? "block" : "none",
              }}
            >
              <Image src={item.img} alt="slider image" />
            </ImageContainer>
          ))}
          <PrevButton onClick={handlePrevClick}>{"<"}</PrevButton>
          <NextButton onClick={handleNextClick}>{">"}</NextButton>
        </SliderContainer> */}
      </MainContentWrap>

      {/* <SideWrap>
        <MostViewCard>
          <TextWrap>
            <CardTitle>Top Ranked</CardTitle>
            <ViewTitle>A must-win date recipe!...</ViewTitle>
            <ViewDesc></ViewDesc>
          </TextWrap>
          <CardAvatar>
            <ViewAvatar></ViewAvatar>
            <ViewId></ViewId>
          </CardAvatar>
        </MostViewCard>
        <MostViewCard>
          <TextWrap>
            <CardTitle>2nd Ranked</CardTitle>
            <ViewTitle>A must-win date recipe!...</ViewTitle>
            <ViewDesc></ViewDesc>
          </TextWrap>
          <CardAvatar>
            <ViewAvatar></ViewAvatar>
            <ViewId></ViewId>
          </CardAvatar>
        </MostViewCard>
        <MostViewCard>
          <TextWrap>
            <CardTitle>3rd Ranked</CardTitle>
            <ViewTitle>A must-win date recipe!...</ViewTitle>
            <ViewDesc></ViewDesc>
          </TextWrap>
          <CardAvatar>
            <ViewAvatar></ViewAvatar>
            <ViewId></ViewId>
          </CardAvatar>
        </MostViewCard>
        <GapBox>Recommendable</GapBox>
        <SideRecipeCard>
          <SideRecipeImg></SideRecipeImg>
          <SideRecipeTitle></SideRecipeTitle>
        </SideRecipeCard>
        <SideRecipeCard>
          <SideRecipeImg></SideRecipeImg>
          <SideRecipeTitle></SideRecipeTitle>
        </SideRecipeCard>
        <SideRecipeCard>
          <SideRecipeImg></SideRecipeImg>
          <SideRecipeTitle></SideRecipeTitle>
        </SideRecipeCard>
        <SideRecipeCard>
          <SideRecipeImg></SideRecipeImg>
          <SideRecipeTitle></SideRecipeTitle>
        </SideRecipeCard>
      </SideWrap> */}

      <FooterBox>
        <Footer></Footer>
      </FooterBox>
    </PageWrapper>
  );
};

export default DetailForm;
