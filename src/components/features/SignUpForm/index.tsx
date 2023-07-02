import {
  PageWrapper,
  FormContainer,
  SubmitButton,
  PasswordHint,
  LinkToLogin,
  LogoImg,
  GoogleLogin,
  BrWrap,
  Br,
  PasswordHintWrap,
  AvatarResister,
  Avatar,
  AvatarHiddenBox,
} from "./styled";

import FormInput from "@/components/common/FormInput";
import Footer from "@/components/common/Footer";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postUserSignUp } from "@/apis/user";
import { UserContext } from "@/store/UserContext";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [avatarImg, setAvatarImg] = useState<File>();

  const [avatarPreview, setAvatarPreview] = useState<string | null>(
    "public/Avatar/Avatar.png"
  );

  const passWordHint = `For password,least 8 characters include a numbers, and special characters`;

  const userContext = useContext(UserContext);
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmail(email);
  };
  const isValidPassword = (password: string): boolean => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setPassword(password);
    setIsPasswordValid(isValidPassword(password));
  };
  const handleAvatarUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const avatar = e.target.files?.[0];
    if (avatar) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarImg(avatar);
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(avatar);
    }
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const temp = new FormData();
      temp.append("email", email);
      temp.append("name", name);
      temp.append("password", password);
      temp.append("avatarImg", avatarImg ? avatarImg : "");
      const data = await postUserSignUp(temp);
      if (!data) throw new Error("Login failed");
      userContext?.login(data);
      alert("Login successful");
      navigate("/");
    } catch (err: any) {
      alert(`${err.message}`);
    }
  };

  return (
    <PageWrapper>
      <FormContainer onSubmit={handleSubmit}>
        <LogoImg></LogoImg>
        <GoogleLogin>Login by Google</GoogleLogin>
        <BrWrap>
          <Br></Br>
          Or
          <Br></Br>
        </BrWrap>
        <FormInput
          value={email}
          type="text"
          placeholder="Email"
          onChange={handleEmail}
        />
        <FormInput
          value={name}
          type="text"
          placeholder="Nick name"
          onChange={handleChangeName}
        />
        <FormInput
          value={password}
          type="password"
          placeholder="Password"
          onChange={handleChangePassword}
        />
        <PasswordHintWrap>
          {!isPasswordValid && <PasswordHint>{passWordHint}</PasswordHint>}
        </PasswordHintWrap>
        <AvatarResister>
          <input
            type="file"
            accept="image/*"
            id="avatarUpload"
            style={{ display: "none" }}
            onChange={handleAvatarUpload}
          />
          <label htmlFor="avatarUpload">
            <AvatarHiddenBox>
              <Avatar
                src={avatarPreview || "public/Avatar/Avatar.png"}
                alt="Avatar"
              ></Avatar>
            </AvatarHiddenBox>
          </label>
        </AvatarResister>
        <SubmitButton type="submit">Sign Up</SubmitButton>
        <LinkToLogin to="/login">Do you already have an account?</LinkToLogin>
      </FormContainer>
      <Footer></Footer>
    </PageWrapper>
  );
};

export default SignUpForm;
