import { useLoginForm } from "./useLoginForm";
import {
  FormContainer,
  LogoImg,
  LoginButton,
  PageWrapper,
  PassWordChecker,
  SignUpChecker,
  SignUpText,
  InputContainer,
} from "./styled";
import FormInput from "@/components/common/FormInput";
import Footer from "@/components/common/Footer";
import LoginLogo from "@/public/Logo/CardLogo.png";

const LoginForm = () => {
  const { handleSubmit, email, setEmail, password, showPassword, setPassword } =
    useLoginForm();

  return (
    <PageWrapper>
      <FormContainer onSubmit={handleSubmit}>
        <LogoImg src={LoginLogo} />
        <InputContainer>
          <FormInput
            value={email}
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <FormInput
            value={password}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </InputContainer>

        <LoginButton type="submit">Login</LoginButton>
        <PassWordChecker to="/">Did you forget your password?</PassWordChecker>
      </FormContainer>
      <SignUpChecker>
        <SignUpText to="/sign-up">Don't you have an account?</SignUpText>
      </SignUpChecker>
      <Footer></Footer>
    </PageWrapper>
  );
};

export default LoginForm;
