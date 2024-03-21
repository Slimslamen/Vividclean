import React, { createContext, useState, ReactNode } from "react";
import { ContextType, User, RegisterUser } from "./types/types";
import { v4 as getId } from "uuid";
import { UserAuthContextProps } from "./types/types";
import { UserAuthContext } from "./UserAuthContext";
import { auth } from "./config/firebase";

const ProductContext = createContext<ContextType | null>(null);

interface ProductContextProviderProps {
  children: ReactNode;
}

const ProductContextProvider = ({ children }: ProductContextProviderProps) => {

  
  const [user, setUser] = useState<User>({
    id: "",
    username: "",
    password: "",
  });
  const [registerUser, setRegisterUser] = useState<RegisterUser>({
    id: "",
    firstname: "",
    lastname: "",
    adress: "",
    postalcode: "",
    city: "",
    phonenumber: "",
    email: "",
    password: "",
    repeatpassword: "",
  });
  const [loginVisible, setLoginVisible] = useState(false);
  const [adminVisible, setAdminVisible] = useState(false);

  const [registerVisible, setRegisterVisible] = useState(false);

  const { logOut } = React.useContext(UserAuthContext)! as UserAuthContextProps;

  const saveUser = (username: string, password: string) => {
    const newUser: User = {
      id: getId(),
      username,
      password,
    };
    setUser(newUser);
  };

  const handleMenuItemClick = (label: string) => {
  

    if (label === "Logga in") {
      setLoginVisible(!loginVisible);
    }
    if (label === "Skapa nytt konto") {
      setRegisterVisible(!registerVisible);
    }
    if (label === "Medarbetar Portal") {
      setAdminVisible(!adminVisible);
    }
    if (label === "Logga ut") {
      logOut();
    }

  };

  const LoginValue: ContextType = {
    saveUser,
    user,
    handleMenuItemClick,
    loginVisible,
    registerUser,
    registerVisible,
    adminVisible,
  };

  return (
    <ProductContext.Provider value={LoginValue}>
      {/* Render other components or content */}
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductContextProvider };
