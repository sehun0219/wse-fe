import { useContext } from "react";
import { UserContext } from "@/store/UserContext";
import { useSidebar } from "@/store/SidebarContext";
const useNavbar = () => {
  const { toggleSidebar } = useSidebar();
  const userContext = useContext(UserContext);
  return {
    userContext,
  };
};

export default useNavbar;
