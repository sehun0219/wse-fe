import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const MainContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1020px;
`;

export const MainWrap = styled.div`
  margin-top: 10px;
  border: 2px solid #f6f7f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 920px;
  padding: 10px 100px 10px 100px;
  @media (max-width: 700px) {
    width: 460px;
  }
`;
export const MainImg = styled.img`
  width: 640px;
  height: 45%;
  @media (max-width: 700px) {
    width: 320px;
  }
`;
export const AvatarImg = styled.img`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 118px;
  height: 118px;
  display: flex;
  position: relative;
  bottom: 60px;
  z-index: 9999;
  margin-bottom: -50px;
  @media (max-width: 700px) {
    width: 80px;
    height: 80px;
    position: relative;
    bottom: 50px;
  }
`;
export const UserId = styled.p`
  width: 160px;
  margin-bottom: 20px;
  color: #f1f1f1;
  font-weight: bold;
  font-size: large;
  display: flex;
  justify-content: center;
  @media (max-width: 700px) {
    width: 80px;
    margin-top: 10px;
  }
`;
export const Title = styled.div`
  width: 900px;
  margin: 10px;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  color: #fff8e7;
  @media (max-width: 700px) {
    width: 420px;
    font-size: 20px;
  }
`;
export const Description = styled.p`
  width: 100%;
  margin: 10px;
  display: flex;
  justify-content: center;
  color: #bebfc5;
  font-size: 16px;
  font-weight: 600;
  padding: 12px;
  @media (max-width: 700px) {
    width: 420px;
    font-size: 20px;
  }
`;
export const CookingInfo = styled.div`
  width: 730px;
  height: 120px;
  margin: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
  @media (max-width: 700px) {
    width: 415px;
    height: 60px;
    font-size: 8px;
  }
`;
export const InfoItem = styled.p`
  border: 3px solid #8a2be2;
  width: 12%;
  height: 74%;
  margin: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff8e7;
  font-weight: 700;
  padding-top: 6px;
`;

export const IngredientsWrap = styled.div`
  border: 2px solid #f6f7f9;
  width: 920px;
  padding: 60px 100px 40px 100px;
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
    width: 460px;
  }
`;
export const FormTitle = styled.div`
  justify-content: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #f6f7f9;
  margin-bottom: 20px;
  font-size: x-large;
  font-weight: bold;
  color: #f6f7f9;
  padding: 12px;
`;
export const IngredientsDetailWrap = styled.div`
  justify-content: center;
  width: 100%;

  border: 1px solid #f6f7f9;
  padding-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
`;
export const CoreItem = styled.p`
  width: 92%;
  color: #f6f7f9;
  font-weight: 400;
  font-size: 20px;
  display: flex;
  justify-content: first baseline;
  border-bottom: 2px solid red;
  margin: 16px;
  padding-bottom: 8px;
`;
export const CoreText = styled.p`
  color: #f6f7f9;
  font-weight: 400;
  font-size: 20px;
  width: 110px;
  display: flex;
`;

export const ContentsBox = styled.div`
  width: 97%;

  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  color: #f6f7f9;
  margin-left: 40px;
`;
export const Item = styled.div`
  width: 320px;
  height: 45px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ItemName = styled.p`
  width: 50%;
  height: 30px;

  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
`;
export const ItemQuantity = styled.p`
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  font-weight: 400;
`;

export const CookingStepWrap = styled.div`
  border: 2px solid #f6f7f9;
  width: 920px;
  padding: 60px 100px 60px 100px;
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
    width: 460px;
  }
`;
export const CookingStepTitle = styled.div`
  width: 100%;
  height: 50px;

  margin-bottom: 20px;
`;
export const CookingStepCard = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const EachStepCard = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;
export const StepNum = styled.div`
  width: 8%;
  height: 180px;
  border: 1px solid #5eead4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #f6f7f9;
  @media (max-width: 700px) {
    width: 20px;
    border: none;
  }
`;
export const StepDesc = styled.div`
  width: 52%;
  height: 180px;
  border: 1px solid #5eead4;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
  font-size: 18px;
  color: #f6f7f9;
  font-weight: 400;
  @media (max-width: 700px) {
    width: 235px;
    border: none;
  }
`;
export const StepImg = styled.img`
  width: 40%;
  height: 180px;
  border: 1px solid #5eead4;
  @media (max-width: 700px) {
    width: 255px;
  }
`;

export const SideWrap = styled.div`
  border: 2px solid #0000ff;
  width: 360px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 30px;
  padding-bottom: 30px;
`;
export const MostViewCard = styled.div`
  width: 90%;
  height: 100px;
  border: 2px solid #fdba73;
  margin: 5px;
  display: flex;
`;

export const TextWrap = styled.div`
  width: 70%;
  height: 100%;
  border: 1px solid #f1f1f1;
`;
export const CardAvatar = styled.div`
  width: 30%;
  height: 100%;
  border: 1px solid #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardTitle = styled.div`
  color: #f1f1f1;
  margin: 10px;
  font-size: 14px;
  font-weight: 400;
`;
export const ViewTitle = styled.div`
  color: #f1f1f1;
  margin: 10px;
  font-size: 18px;
  font-weight: 400;
`;
export const ViewDesc = styled.div`
  width: 100%;
  height: 38%;
  border: 1px solid #db2777;
`;
export const ViewAvatar = styled.div`
  border: 3px solid #fdba73;
  width: 80%;
  height: 80%;
  border-radius: 200%;
`;
export const ViewId = styled.div`
  width: 90%;
  height: 20%;
  border: 1px solid #ffffff;
`;

export const GapBox = styled.div`
  width: 90%;
  height: 50px;
  border: 1px solid #21c55e;
  color: #f1f1f1;
  padding-top: 30px;
  padding-right: 16px;
  text-align: end;
  font-weight: 400;
`;

export const SideRecipeCard = styled.div`
  width: 90%;
  height: 360px;
  border: 1px solid #fde047;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SideRecipeImg = styled.div`
  width: 90%;
  height: 75%;
  border: 1px solid #f472b6;
  margin-top: 10px;
`;
export const SideRecipeTitle = styled.div`
  width: 90%;
  height: 20%;
  border: 1px solid #ffffff;
`;

export const FooterBox = styled.div`
  width: 100%;
  border-top: 1px solid tomato;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SliderContainer = styled.div`
  border: 2px solid #f6f7f9;
  width: 920px;
  display: flex;
  overflow: hidden;
  @media (max-width: 700px) {
    width: 460px;
  }
`;
export const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 100%;
  transition: all 0.5s ease-in-out;
  display: flex;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
`;
export const ArrowButton = styled.button`
  position: absolute;
  top: 50%; // vertical center
  transform: translateY(-50%);
  z-index: 1;
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

export const PrevButton = styled(ArrowButton)`
  left: 10px; // from left side
`;

export const NextButton = styled(ArrowButton)`
  right: 10px; // from right side
`;
