import { Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { UserAuthContextProps } from "../types/types";
import { UserAuthContext } from "../UserAuthContext";
import { useState, useContext } from "react";
import React from "react";
import { ProductContext } from "../ProductContext";
import { ContextType } from "../types/types";
import { doc, getDoc, getFirestore } from "firebase/firestore";


export default function LogIn() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  
  const { googleSignIn, logIn, setName, setEmailLogin, emailLogin } = React.useContext(
    UserAuthContext
  )! as UserAuthContextProps;

  const navigate = useNavigate(); //navigate hook to navigate on the site

  const handleGoogleSignIn: React.MouseEventHandler<HTMLButtonElement> = async (e)=> {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/KundSida");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message); // Du kan nu använda Error-metoder
      } else {
        console.error("Ett okänt fel inträffade:", error);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(emailLogin, password);

      const firestore = getFirestore();
      const userQuery = doc(firestore, "users", emailLogin);
      const userDocSnap = await getDoc(userQuery);
      const username = userDocSnap.data()?.username

      setName(username)

      alert(`Välkommen ${emailLogin}!`)
      navigate("/KundSida");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message); // Du kan nu använda Error-metoder
      } else {
        console.error("Ett okänt fel inträffade:", error);
      }
    }
  };
  const { loginVisible, handleMenuItemClick } = React.useContext(
    ProductContext
  )! as ContextType;

  const usernameIcon = (
    <svg
      className="w-4 h-4 text-customDark dark:text-gray-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
    </svg>
  );

  function handleHideLogin() {
    handleMenuItemClick("Logga in");
    // Dölj LogIn genom att anropa saveUser med tomma värden
  }

  function AlreadyAUser() {
    handleMenuItemClick("Skapa nytt konto")
    handleMenuItemClick("Logga in")
  }

  if (!loginVisible) {
    return null;
  }
  return (
    <main className="grid place-items-center w-full h-full">
      <div className="grid top-40 justify-center items-center right-0 left-0 z-50 md:inset-0 fixed">
        <form
          onSubmit={handleSubmit}
          className="relative border grid grid-cols-1 gap-4 rounded-lg bg-customBeige w-full max-w-md p-8 md:p-20"
        >
          <button
            className="absolute top-0 right-0 bg-customBeige text-black hover:bg-customHoverDark hover:text-slate-700 rounded-md p-1 font-semibold mt-2 mr-2"
            type="button"
            onClick={handleHideLogin}
          >
            <img
              className="h-4 w-4"
              src="src/assets/close-round-icon.png"
              alt=""
            />
          </button>
          <div>
            <Label value="Your email" className="text-black" />
            <TextInput
              id="email-address-icon"
              placeholder="Din email"
              addon={usernameIcon}
              onChange={(e) => setEmailLogin(e.target.value)}
              required
            />
          </div>
          <div>
            <Label
              htmlFor="password1"
              value="Your password"
              className="text-black"
            />
            <TextInput
              id="password1"
              placeholder="Lösenord"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
      
          <div className="flex items-center gap-2">
     
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 19"
            >
              <path
                fill-rule="evenodd"
                d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                clip-rule="evenodd"
              />
            </svg>
            Logga in med Google
          </button>
          </div>
      
          <button
            className="bg-customDark text-white hover:bg-customHoverDark rounded-md p-2 font-semibold"
            type="submit"
          >
            Logga in
          </button>

          <p className="font-DM">Har du inget konto? <span onClick={AlreadyAUser} className="text-customDark hover:underline cursor-pointer">Skapa konto här</span></p>
        </form>
      </div>
    </main>
  );
}
