import { Container, Avatar, Text } from "./styled";
import { UserContext } from "@/store/UserContext";
import { useContext } from "react";
const Profile = () => {
  const userContext = useContext(UserContext);
  return (
    <Container>
      <Avatar src={userContext?.user?.avatarImg ?? ""} />
      <Text>Welcome!! {userContext?.user?.email}</Text>
    </Container>
  );
};

export default Profile;
