import Main from "./Main";
import Header from "./Header";
import { ProductContext } from "../ProductContext";
import { ContextType } from "../types/types";
import React from "react";

export default function Landing(): JSX.Element {
  const { loginVisible, registerVisible, adminVisible } = React.useContext(
    ProductContext
  )! as ContextType;

  return (
    <>
      <Header />
      <Main />
    </>
  );
}
