import {UserAuthContextProps} from "../types/types";
import React from "react";
import { UserAuthContext } from "../UserAuthContext";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Children  {
    children: ReactNode;
}
export const ProtectedRoute = ({ children }:Children) => {
    const { user } = React.useContext(
        UserAuthContext
      )! as UserAuthContextProps;
  
    console.log("Check user in Private: ", user);
    if (!user) {
      return <Link to="/" />;
    }
    return children;
  };