import { CardData } from "@/interface/recipe";
import {
  CardWrap,
  ThumbNailImg,
  ThumbNailDetails,
  RecipeTitle,
  UserId,
  ViewCount,
  ThumbNailAvatar,
  DetailsContent,
  WarpImgAvatarAndDetails,
} from "./styled";

interface RecipeCardProps {
  data: CardData;
}

const RecipeCard = ({ data }: RecipeCardProps) => {
  return (
    <CardWrap>
      <ThumbNailImg src={"http://localhost:8080/uploads/" + data.mainImg} />
      <WarpImgAvatarAndDetails>
        <ThumbNailDetails>
          <ThumbNailAvatar
            src={"http://localhost:8080/" + JSON.parse(data.userInfo).avatarImg}
          />
        </ThumbNailDetails>
        <DetailsContent>
          <RecipeTitle>{data.title}</RecipeTitle>
          <UserId>{JSON.parse(data.userInfo).name}</UserId>
          <ViewCount>
            View {data.viewCount} · {data.createdAt}
          </ViewCount>
        </DetailsContent>
      </WarpImgAvatarAndDetails>
    </CardWrap>
  );
};

export default RecipeCard;
