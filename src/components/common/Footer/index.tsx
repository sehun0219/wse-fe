import { Container, Text, GitLink } from "./styled";

const Footer = () => {
  return (
    <Container>
      <Text>
        © 2023 All rights reserved. This website is maintained by Cayde Kim.
        <GitLink
          href="https://github.com/sehun0219"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/sehun0219
        </GitLink>
      </Text>
    </Container>
  );
};

export default Footer;
