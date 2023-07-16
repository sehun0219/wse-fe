import { Container, Avatar, Text } from "./styled";
import { UserContext } from "@/store/UserContext";
import { useContext } from "react";
import AvatarLogo from "@/public/Avatar/Avatar.png";
import { useState } from "react";
const Profile = () => {
  const userContext = useContext(UserContext);
  const [avatarPreview] = useState(AvatarLogo);
  return (
    <Container>
      <Avatar src={userContext?.user?.avatarImg ?? avatarPreview} />
      <Text> {userContext?.user?.email}</Text>
    </Container>
  );
};

export default Profile;
