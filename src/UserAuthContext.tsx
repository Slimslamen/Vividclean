import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "@firebase/auth";
import { createContext, useState, ReactNode } from "react";
import { auth } from "./config/firebase";


interface UserAuthContextProps {
    user: any; // Replace 'any' with the actual type of your user object
    logIn: (email: string, password: string) => void;
    signUp: (email: string, password: string) => void;
    logOut: () => void;
    googleSignIn: () => void;
  }

  const UserAuthContext = createContext<UserAuthContextProps | undefined>(undefined);

  interface UserAuthContextProviderProps {
    children: ReactNode;
  }

  export function UserAuthContextProvider({ children }: UserAuthContextProviderProps): JSX.Element {
    const [user, setUser] = useState<any>({}); // Replace 'any' with the actual type of your user object
  
    function logIn(email: string, password: string) {
      return signInWithEmailAndPassword(auth, email, password);
    }
  
    function signUp(email: string, password: string) {
      return createUserWithEmailAndPassword(auth, email, password);
    }
  
    function logOut() {
      return signOut(auth);
    }
  
    function googleSignIn() {
      const googleAuthProvider = new GoogleAuthProvider();
      return signInWithPopup(auth, googleAuthProvider);
    }
  
    return (
      <UserAuthContext.Provider
        value={{ user, logIn, signUp, logOut, googleSignIn }}
      >
        {children}
      </UserAuthContext.Provider>
    );
  }