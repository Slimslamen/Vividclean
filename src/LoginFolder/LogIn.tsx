import { Checkbox, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { ContextType } from "../types/types";
import { ProductContext } from "../ProductContext";
import { useState } from "react";
import React from "react";


export default function LogIn() {
    const [usernameValue, setUsernameValue] = useState<string>("");
    const [passwordValue, setPasswordValue] = useState<string>("");
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    


  //get saveUser function from TodoContext
  const { saveUser } = React.useContext(ProductContext) as ContextType;
  const { loginVisible, handleMenuItemClick } = React.useContext(ProductContext)! as ContextType;


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

  //const navigate = useNavigate(); //navigate hook to navigate on the site

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    saveUser(usernameValue, passwordValue);
    setUsernameValue("");
    setPasswordValue("");
    if (rememberMe) {
      // Handle remember me logic
    }
   // navigate("#");
  }
  function handleHideLogin() {
    handleMenuItemClick("Min Profil");
    setRememberMe(false); // Återställa eventuella värden när du döljer LogIn
    // Dölj LogIn genom att anropa saveUser med tomma värden
    saveUser("", "");
  }

  if (!loginVisible) {
    return null;
  }
  return (
    <main className="grid place-items-center w-full h-full">
    <div className="grid top-40 justify-center items-center right-0 left-0 z-50 md:inset-0 fixed">
      <form onSubmit={handleSubmit} className="relative border grid grid-cols-1 gap-4 rounded-lg bg-customDark w-full max-w-md p-8 md:p-20">
        <button
          className="absolute top-0 right-0 bg-customBeige text-black hover:bg-customHover hover:text-slate-700 rounded-md p-1 font-semibold mt-2 mr-2"
          type="button"
          onClick={handleHideLogin}
        >
          <img className="h-4 w-4" src="src/assets/close-round-icon.png" alt="" />
        </button>
        <div>
          <Label htmlFor="username3" value="Username" className="text-white" />
          <TextInput
            id="username3"
            placeholder="Användarnamn"
            addon={usernameIcon}
            value={usernameValue}
            onChange={(e) => setUsernameValue(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="password1" value="Your password" className="text-white" />
          <TextInput
            id="password1"
            placeholder="Lösenord"
            type="password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            className="bg-customBeige"
            id="remember"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <Label className="text-white" htmlFor="remember">
            Kom ihåg mig
          </Label>
        </div>
        <button
          className="bg-customBeige text-dark hover:bg-customHover rounded-md p-2 font-semibold"
          type="submit"
        >
          Logga in
        </button>
      </form>
    </div>
  </main>
  
  );
}
