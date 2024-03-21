import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "@firebase/auth";
import { createContext, useState, ReactNode } from "react";
import { auth, db } from "./config/firebase";
import {
  CollectionReference,
  DocumentData,
  collection,
  doc,
  setDoc,
} from "firebase/firestore";
import { IformData } from "./types/types";

interface UserAuthContextProps {
  user: any; // Replace 'any' with the actual type of your user object
  logIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, name: string, password: string) => void;
  logOut: () => void;
  googleSignIn: () => Promise<void>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  emailLogin: string;
  setEmailLogin: React.Dispatch<React.SetStateAction<string>>;
  martaRef: CollectionReference<DocumentData>;
  EstelleRef: CollectionReference<DocumentData>;
  JimmyRef: CollectionReference<DocumentData>;
  emailAdmin: string;
  setEmailAdmin: React.Dispatch<React.SetStateAction<string>>;
  formData: IformData;
  setFormData: React.Dispatch<React.SetStateAction<IformData>>;
  bookingId:  string | null | undefined;
  setBookingId: React.Dispatch<React.SetStateAction<string | null | undefined>>
}

export const UserAuthContext = createContext<UserAuthContextProps | undefined>(
  undefined
);

interface UserAuthContextProviderProps {
  children: ReactNode;
}

//all the bookings for the cleaners
const martaRef = collection(db, "users", "marta_malm_97@hotmail.se", "booking");
const EstelleRef = collection(
  db,
  "users",
  "estelle.stenemur@gmail.com",
  "booking"
);
const JimmyRef = collection(db, "users", "jimmy@gmail.com", "booking");

export function UserAuthContextProvider({
  children,
}: UserAuthContextProviderProps): JSX.Element {
  const [user, setUser] = useState<any>({}); // Replace 'any' with the actual type of your user object
  const [emailAdmin, setEmailAdmin] = useState("");
  const [name, setName] = useState<string>("");
  //logged in user
  const [emailLogin, setEmailLogin] = useState<string>("");
  //saved data from inputs
  const [formData, setFormData] = useState<IformData>({
    selectedName: name,
    selectedDate: "",
    time: "",
    cleaner: "",
    service: "",
    status: false,
    customerEmail: emailLogin,
  });
  
  const [bookingId, setBookingId] = useState<string | null>();
  async function logIn(email: string, password: string): Promise<void> {
    await signInWithEmailAndPassword(auth, email, password);
  }

  // async function signUp(email: string, password: string):Promise<void> {
  //   await createUserWithEmailAndPassword(auth, email, password);
  // }

  async function signUp(
    email: string,
    name: string,
    password: string
  ): Promise<void> {
    // Register user with email and password using Firebase authentication
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Retrieves the user's unique ID from the user credential object
        const selectedEmail = userCredential.user.email;
        //  Create a reference to the user document in Firestore
        const userDocRef = doc(db, "users", email);

        // Set the user document data with the role field as 'user' and merge with existing data if any
        return setDoc(
          userDocRef,
          { role: "customer", username: name },
          { merge: true }
        );
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
    user,
    logIn,
    signUp,
    logOut,
    googleSignIn,
    name,
    setName,
    emailLogin,
    setEmailLogin,
    martaRef,
    EstelleRef,
    JimmyRef,
    emailAdmin,
    setEmailAdmin,
    formData,
    setFormData,
    bookingId,
    setBookingId,
  };
  return (
    <UserAuthContext.Provider value={FireBaseValues}>
      {children}
    </UserAuthContext.Provider>
  );
}

export default UserAuthContext;
