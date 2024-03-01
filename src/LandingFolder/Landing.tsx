
import Main from './Main'
import Header from './Header'
import Navbar from './Navbar'
import LogIn from '../LoginFolder/LogIn'
import { ProductContext } from "../ProductContext";
import { ContextType } from "../types/types";
import React from "react";
import AboutUs from '../InformationPages/AboutUs';

export default function Landing():JSX.Element {
  const { loginVisible } = React.useContext(ProductContext)! as ContextType;
  return (
    <>
          <div className={` ${!loginVisible ? '' : 'bg-black bg-opacity-80 z-10'}`}>
        <Header />
        <Main />
        </div>
        <AboutUs />
    </>
  )
}
