export interface User {
  avatarImg: string;
  name: string;
  password: string;
  email: string;
}

export interface RecipeData {
  mainImg: string;
  title: string;
  category: string;
  description: string;
  cookingInfo: {
    servingSize: string;
    cookingTime: string;
    difficulty: string;
    type: string;
  };
  coreItems: { itemName: string }[];
  ingredient: {
    ingredient: string;
    quantity: string;
  }[];
  completedImg: string[];
  cookingStep: {
    stepNum: number;
    stepDesc: string;
    stepImg: string;
  }[];
  creator: {
    avatarImg: string;
    name: string;
  };
}

export interface CardData {
  mainImg: string;
  title: string;
  id: string;
  viewCount: number;
  createdAt: string;
  avatarImg: string;
  userInfo: string;
  name: string;
}
