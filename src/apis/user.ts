import axios from "axios";
import { LoginData, User } from "@/interface/user";

export const postUserLogin = async (loginData: LoginData) => {
  try {
    const res = await axios.post<{
      user: User;
      token: string;
    }>("http://localhost:8080/user/login", loginData);
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    alert("Incorrect login information");
  }
};

export const postUserSignUp = async (signUpData: FormData) => {
  try {
    const res = await axios.post<{
      user: User;
      token: string;
    }>("http://localhost:8080/user/sign-up", signUpData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.status === 200) {
      return res.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};
