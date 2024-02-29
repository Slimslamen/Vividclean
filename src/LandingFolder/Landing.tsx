import Main from "./Main";
import Header from "./Header";
import { ProductContext } from "../ProductContext";
import { ContextType } from "../types/types";
import React from "react";
import Contact from "./Contact";

export default function Landing(): JSX.Element {
  const { loginVisible } = React.useContext(ProductContext)! as ContextType;
  return (
    <>
      <div className={` ${!loginVisible ? "" : "bg-black bg-opacity-80 z-10"}`}>
       {/* <Contact/> */}
        <Header />
        <Main />
      </div>
    </>
  );
}
