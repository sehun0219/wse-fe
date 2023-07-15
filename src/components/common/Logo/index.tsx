import { LogoWrap, LogoIcon, TextBox } from "./styles";
import LogoImg from "@/public/Logo/Logo.png";

const Logo = () => (
  <LogoWrap to="/">
    <LogoIcon src={LogoImg}></LogoIcon>
    <TextBox>What should I eat</TextBox>
  </LogoWrap>
);

export default Logo;
