import { createContext, useState, useContext, ReactNode } from "react";

interface SidebarContextData {
  isSidebarVisible: boolean;
  toggleSidebar: () => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export const SidebarContext = createContext<SidebarContextData | undefined>(
  undefined
);

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <SidebarContext.Provider
      value={{
        isSidebarVisible,
        toggleSidebar,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = (): SidebarContextData => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error(" Sidebar must be used within a SidebarProvider");
  }
  return context;
};
