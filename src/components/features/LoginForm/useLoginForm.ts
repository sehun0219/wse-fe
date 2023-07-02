import { useState, FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { postUserLogin } from "@/apis/user";
import { UserContext } from "@/store/UserContext";

export const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await postUserLogin({
        email,
        password,
      });
      if (!data) throw new Error("Login failed");
      userContext?.login(data);

      alert("Login successful");
      navigate("/");
    } catch (err: any) {
      alert(`${err.message}`);
      console.error(err);
    }
  };

  return {
    handleSubmit,
    email,
    setEmail,
    password,
    showPassword,
    setPassword,
    setShowPassword,
  };
};
