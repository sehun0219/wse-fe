import { LogoWrap, LogoIcon, TextBox } from "./styles";
import LogoImg from "@/public/Logo/Logo.png";

const Logo = () => (
  <LogoWrap href="/">
    <LogoIcon src={LogoImg}></LogoIcon>
    <TextBox>What should I eat</TextBox>
  </LogoWrap>
);

export default Logo;
