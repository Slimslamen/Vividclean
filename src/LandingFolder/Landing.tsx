import Main from "./Main";
import Header from "./Header";
import { ProductContext } from "../ProductContext";
import { ContextType } from "../types/types";
import React from "react";
import LogIn from "../LoginFolder/LogIn";

export default function Landing():JSX.Element {
  const { loginVisible, registerVisible } = React.useContext(ProductContext)! as ContextType;
  return (
    <>
      <div className={` ${!loginVisible ? "" : "bg-black bg-opacity-80 z-10"}`}>
      <div className={` ${!registerVisible ? "" : "bg-black bg-opacity-80 z-10"}`}>
       <LogIn />
        <Header />
        <Main />
        </div>
        </div>
    </>
  );
}
