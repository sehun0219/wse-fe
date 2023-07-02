import { createContext, ReactNode, useState, useEffect } from "react";
import { User } from "@/interface/user";

interface UserContextValue {
  user: User | null;
  token: string | null;
  login: ({ user, token }: { user: User; token: string }) => void;
  logout: () => void;
  name: string | null; // 'name' 속성 추가
  email: string | null;
  avatarImg: string | null;
}

export const UserContext = createContext<UserContextValue | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [avatarImg, setAvatarImg] = useState<string | null>(null);

  useEffect(() => {
    const userStorageItem = window.localStorage.getItem("userInfo") ?? null;
    const token = window.localStorage.getItem("tokenInfo") ?? null;

    if (userStorageItem) {
      const user = JSON.parse(userStorageItem);
      if (user?._id && token) {
        setUser(user);
        setToken(token);
        setName(user.name); // Assuming 'name' is a property of 'user'
        setEmail(user.email); // Assuming 'email' is a property of 'user'
        setAvatarImg(user.avatarImg);
      }
    }
  }, []);

  const value = {
    user,
    token,
    email, // Add 'email' to the context value
    name, // Add 'name' to the context value
    avatarImg,
    login: ({ user, token }: { user: User; token: string }) => {
      setUser(user);
      setToken(token);
      setName(user.name); // Assuming 'name' is a property of 'user'
      setEmail(user.email); // Assuming 'email' is a property of 'user'
      setAvatarImg(user.avatarImg);
      window.localStorage.setItem("userInfo", JSON.stringify(user));
      window.localStorage.setItem("tokenInfo", JSON.stringify(token));
    },
    logout: () => {
      setUser(null);
      setToken(null);
      setName(null); // Clear 'name' when logging out
      setEmail(null); // Clear 'email' when logging out
      setAvatarImg(null);
      window.localStorage.removeItem("userInfo");
      window.localStorage.removeItem("tokenInfo");
    },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
