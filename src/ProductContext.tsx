import React, { createContext, useState, ReactNode } from "react";
import { ContextType, User, RegisterUser } from "./types/types";
import { v4 as getId } from "uuid";


const ProductContext = createContext<ContextType | null>(null);

interface ProductContextProviderProps {
  children: ReactNode;
}

const ProductContextProvider = ({ children }: ProductContextProviderProps) => {
  const [user, setUser] = useState<User>({ id: "", username: "", password: "" });
  const [registerUser, setRegisterUser] = useState<RegisterUser>({ id: "", firstname: "", lastname: "", adress: "", postalcode: "", city: "", phonenumber: "" , email: "", password: "", repeatpassword: "", });
  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);

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
      setLoginVisible(!loginVisible); // Toggle visibility for login
    } else if (label === "Skapa nytt konto") {
      setRegisterVisible(!registerVisible); // Toggle visibility for register
    }
  };

  const LoginValue: ContextType = {
    saveUser,
    user,
    handleMenuItemClick,
    loginVisible,
  };

  // const RegisterValue: ContextType = {
  //   registerUser,
  //   registerVisible
  // }

  return (
    <ProductContext.Provider value={LoginValue}>
      {/* Render other components or content */}
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductContextProvider };