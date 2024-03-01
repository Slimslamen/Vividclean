import React, { createContext, useState, ReactNode } from "react";
import { ContextType, User } from "./types/types";
import { v4 as getId } from "uuid";


const ProductContext = createContext<ContextType | null>(null);

interface ProductContextProviderProps {
  children: ReactNode;
}

const ProductContextProvider = ({ children }: ProductContextProviderProps) => {
  const [user, setUser] = useState<User>({ id: "", username: "", password: "" });
  const [loginVisible, setLoginVisible] = useState(false);

  const saveUser = (username: string, password: string) => {
    const newUser: User = {
      id: getId(),
      username,
      password,
    };
    setUser(newUser);
  };
  const handleMenuItemClick = (label: string) => {
    if (label === "Min Profil") {
      setLoginVisible(!loginVisible); // Toggle visibility
    } else {
      // Handle other menu items as needed - TILL MÄRTA
    }
  };

  const LoginValue: ContextType = {
    saveUser,
    user,
    handleMenuItemClick,
    loginVisible,
  };

  return (
    <ProductContext.Provider value={LoginValue}>
      {/* Render other components or content */}
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductContextProvider };