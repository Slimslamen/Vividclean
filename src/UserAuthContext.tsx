import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "@firebase/auth";
import { createContext, useState, ReactNode } from "react";
import { auth, db } from "./config/firebase";
import { doc, setDoc } from 'firebase/firestore';

interface UserAuthContextProps {
    user: any; // Replace 'any' with the actual type of your user object
    logIn: (email: string, password: string) => Promise<void>;
    signUp: (email: string, password: string) => void;
    logOut: () => void;
    googleSignIn: () => Promise<void>;
  }

  export const UserAuthContext = createContext<UserAuthContextProps | undefined>(undefined);

  interface UserAuthContextProviderProps {
    children: ReactNode;
  }

  export function UserAuthContextProvider({ children }: UserAuthContextProviderProps): JSX.Element {
    const [user, setUser] = useState<any>({}); // Replace 'any' with the actual type of your user object
  
    async function logIn(email: string, password: string):Promise<void> {
      await signInWithEmailAndPassword(auth, email, password);
    }
  
    // async function signUp(email: string, password: string):Promise<void> {
    //   await createUserWithEmailAndPassword(auth, email, password);
    // }

    async function signUp(email: string, password: string): Promise<void> {
       // Register user with email and password using Firebase authentication
      return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
           // Retrieves the user's unique ID from the user credential object
          const userId = userCredential.user.uid;
           // Create a reference to the user document in Firestore
          const userDocRef = doc(db, 'users', userId);
          
          // Set the user document data with the role field as 'user' and merge with existing data if any
          return setDoc(userDocRef, { role: 'user' }, { merge: true }); 
        })
        .catch((error) => {
           // Handle registration errors here
          console.error("Sign up error:", error);
          throw error; // Throw the error to continue handling it in the component
        });
    }
  
    function logOut() {
      return signOut(auth);
    }
  
    async function googleSignIn(): Promise<void> {
        const googleAuthProvider = new GoogleAuthProvider();
        await signInWithPopup(auth, googleAuthProvider);
      }

    
  
    const FireBaseValues: UserAuthContextProps = {
        user, logIn, signUp, logOut, googleSignIn,
      };
    return (
      <UserAuthContext.Provider
        value={FireBaseValues}
      >
        {children}
      </UserAuthContext.Provider>
    );
  }

  export default UserAuthContext;