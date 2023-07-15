import { baseApi } from "./base";
export const uploadRecipe = async (recipeFormData: FormData) => {
  try {
    const response = await baseApi.put(`/recipe/add`, recipeFormData);

    console.log("Recipe saved successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to save the recipe:", error);
    throw error;
  }
};

export const getRecipeList = async () => {
  try {
    const response = await baseApi.get(`/recipe/list`);
    return response.data;
  } catch (error) {
    console.error("Failed to get the recipe:", error);
    throw error;
  }
};
export const getRecipeDetail = async (id: string) => {
  try {
    const response = await baseApi.get("/recipe/detail", {
      params: { id },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to get the detail:", error);
    throw error;
  }
};

export const getViewCount = async () => {
  try {
    const res = await baseApi.get("/recipe/:id ");
    return res.data;
  } catch (error) {
    console.log("Failed to get the ViewCount:", error);
    throw error;
  }
};

export const getSearchList = async (keyword: string) => {
  try {
    const response = await baseApi.get("/recipe/search", {
      params: { keyword },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to get the detail:", error);
    throw error;
  }
};
