import styled from "styled-components";

export const Top = styled.div`
  width: 100%;
  height: 100px;
  padding-top: 60px;
  font-size: 18px;
  font-weight: bold;
  padding-left: 120px;
  color: #f6f7f9;
`;
export const CardWrap = styled.div`
  width: 290px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
  overflow: hidden;
`;

export const ThumbNailImg = styled.img`
  width: 100%;
  height: 190px;
  background-color: white;
  border-radius: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
export const ThumbNailDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #23272f;
  color: #f6f7f9;
`;

export const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100px;
`;

export const RecipeTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #f6f7f9;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: Arial, Helvetica, sans-serif;
`;
export const UserId = styled.div`
  font-size: 14px;
  color: #f6f7f9;
  font-weight: 600;
`;
export const ViewCount = styled.div`
  font-size: 12px;
  color: rgb(250 204 21);
  font-weight: 400;
  margin: -12px 0px 0px 0px;
`;
export const UploadTime = styled.div`
  font-size: 12px;
  color: orange;
`;
export const ThumbNailAvatar = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  border-radius: 50%;
  margin-top: 12px;
  margin-left: 2px;
`;
export const WarpImgAvatarAndDetails = styled.div`
  display: flex;
`;
