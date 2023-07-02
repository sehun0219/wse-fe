import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import SignUp from "@/pages/SignUp";
import SignIn from "@/pages/Login";
import AddRecipe from "@/pages/AddRecipe";
import Details from "@/pages/Details";
import MyRecipe from "@/pages/MyRecipe";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/detail" element={<Details />} />
        <Route path="/my-recipe" element={<MyRecipe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
