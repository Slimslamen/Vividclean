import { Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { ProductContext } from "../ProductContext";
import React from "react";
import { ContextType, RegisterUser } from "../types/types";
import { useNavigate } from "react-router-dom";

export default function Register(): JSX.Element {
  // const { registerVisible,  handleMenuItemClick } = React.useContext(
  //   ProductContext
  // )! as ContextType;

  // const [registerUser, setRegisterUser] = useState<RegisterUser>({
  //   id: "",
  //   firstname: "",
  //   lastname: "",
  //   adress: "",
  //   postalcode: "",
  //   city: "",
  //   phonenumber: "",
  //   email: "",
  //   password: "",
  //   repeatpassword: "",
  // });


  // const navigate = useNavigate();


  // const [error, setError] = useState<string>("");

  
  // const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setRegisterUser({ ...registerUser, password: e.target.value });
  // };

  // const handleRepeatPasswordChange = (
  //   e: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const repeatPasswordValue = e.target.value;
  //   setRegisterUser({ ...registerUser, repeatpassword: repeatPasswordValue });
  //   if (registerUser.password !== repeatPasswordValue) {
  //     setError("Lösenorden matchar inte.");
  //     return; // Avbryt vidare hantering om lösenorden inte matchar
  //   }
  // };
  

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  
  //   // Validera att alla fält är ifyllda
  //   if (
  //     !registerUser.firstname ||
  //     !registerUser.lastname ||
  //     !registerUser.adress ||
  //     !registerUser.postalcode ||
  //     !registerUser.city ||
  //     !registerUser.phonenumber ||
  //     !registerUser.email ||
  //     !registerUser.password ||
  //     !registerUser.repeatpassword
  //   ) {
  //     setError("Fyll i alla fält.");
  //     return;
  //   }
  
  //   // Validera e-postadress
  //   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailPattern.test(registerUser.email)) {
  //     setError("Vänligen fyll i en giltig e-postadress.");
  //     return;
  //   }
  
  //   // Validera att lösenorden matchar
  //   if (registerUser.password !== registerUser.repeatpassword) {
  //     setError("Lösenorden matchar inte.");
  //     return;
  //   }
  
  //   // Validera postnummer och telefonnummer som siffror
  //   const numericPattern = /^\d+$/;
  //   if (!numericPattern.test(registerUser.postalcode)) {
  //     setError("Postnummer måste vara siffror.");
  //     return;
  //   }
  //   if (!numericPattern.test(registerUser.phonenumber)) {
  //     setError("Telefonnummer måste vara siffror.");
  //     return;
  //   }
  
  //   // Om allt är validerat korrekt, rensa felmeddelandet och navigera till KundSidan
  //   navigate("/KundSida");

   
  // };
  

  // function handleHideRegister() {
  //   handleMenuItemClick("Skapa nytt konto");
  //   registerVisible(true);
  // }

  // if (!registerVisible) {
  //   return null;
  // }

  return (
    
      <div className="flex items-center justify-center">
        <div className="bg-customBeige p-12">
        <button
          onClick={handleHideRegister}
          className="bg-transparent border-none cursor-pointer ml-[100%]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-2 w-96" onSubmit={handleSubmit}>
           
              <div className="mb-2 block">
                <Label htmlFor="firstname" value="Förnamn:" />
              </div>
              <TextInput
                id="firstname"
                type="text"
                value={registerUser.firstname}
                required
                shadow
              />
           
            <div className="mb-2 block">
              <Label htmlFor="lastname" value="Efternamn:" />
            </div>
            <TextInput
              id="lastname"
              type="text"
              value={registerUser.lastname}
              required
              shadow
            />
            <div className="mb-2 block">
              <Label htmlFor="address" value="Adress:" />
            </div>
            <TextInput
              id="address"
              type="text"
              value={registerUser.adress}
              required
              shadow
            />
            {error && <p className="text-black-500">{error}</p>}
            <button
              type="submit"
              className="bg-customDark hover:bg-gray-700 rounded-lg text-white mb-10 p-2 flex items-center justify-center "
            >
              Skapa konto
            </button>
          </form>
        </div>
      </div>
    
  );
}
