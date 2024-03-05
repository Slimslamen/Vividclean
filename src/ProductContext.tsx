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
  // const [user, setUser] = useState<User>({ id: "", username: "", password: "" });
  // const [registerUser, setRegisterUser] = useState<RegisterUser>({ id: "", firstname: "", lastname: "", adress: "", postalcode: "", city: "", phonenumber: "" , email: "", password: "", repeatpassword: "", });
  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);

  const { logOut } = React.useContext(
    UserAuthContext
  )! as UserAuthContextProps;

  // const saveUser = (username: string, password: string) => {
  //   const newUser: User = {
  //     id: getId(),
  //     username,
  //     password,
  //   };
  //   setUser(newUser);
  // };


  const handleMenuItemClick = (label: string) => {
    if (label === "Logga in") {
      setLoginVisible(!loginVisible); // Toggle visibility for login
    } else if (label === "Skapa nytt konto") {
      setRegisterVisible(!registerVisible); // Toggle visibility for register
    } else if (label === "Logga ut")
    logOut();
    console.log(auth?.currentUser?.email)
  };

  const LoginValue: ContextType = {
    // saveUser,
    // user,
    handleMenuItemClick,
    loginVisible,
    // registerUser,
    registerVisible,
  };



  return (
    <ProductContext.Provider value={LoginValue}>
      {/* Render other components or content */}
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductContextProvider };