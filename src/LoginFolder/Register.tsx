import { Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { ProductContext } from "../ProductContext";
import React from "react";
import { ContextType, RegisterUser } from "../types/types";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import UserAuthContext from "../UserAuthContext";

export default function Register(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { registerVisible,  handleMenuItemClick } = React.useContext(
  ProductContext
)! as ContextType;

  const { signUp } = React.useContext(
    UserAuthContext
  )! as UserAuthContextProps;
  
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError("");
    try {
      // Registers the user with the email and password
      await signUp(email, password);
      // If the registration is successful, navigate the user to the login page
      navigate("/LogIn");

    // Handles errors that may happen during registration
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message); // Du kan nu använda Error-metoder
      } else {
        console.error("Ett okänt fel inträffade:", error);
      }
    }
  };


  // function to close the register form 
  function handleHideRegister() {
  handleMenuItemClick("Skapa nytt konto");
  registerVisible(true);
}
if (!registerVisible) {
  return null;
}

  return (
    <div className="flex items-center justify-center">
      <div className="bg-customBeige p-12 rounded-3xl">
        <h1 className="font-DM text-2xl flex items-center justify-center border-b border-black mb-4">Skapa ett konto hos VividClean</h1>
        <button className="bg-transparent border-none cursor-pointer ml-[95%] transform hover:scale-110 transition duration-300 ease-in-out" onClick={handleHideRegister}>
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
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-2 w-96 m-5"
          onSubmit={handleSubmit}
        >
          <div className="mb-2 block font-DM">
            <Label htmlFor="email" value="E-post:" className="text-xl"/>
          </div>
          <input
            type="email"
            placeholder="vividclean@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="font-DM rounded p-2"
          />

          <div className="mb-2 block font-DM">
            <Label htmlFor="password" value="Lösenord:" className="text-xl"/>
          </div>
          <input
            type="password"
            placeholder="Lösenord"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="font-DM rounded p-2"
          />
          <p className="font-DM mt-5">Har du redan ett konto? <Link to="/LogIn"><span className="text-customDark hover:underline">Logga in här</span></Link></p>
          <button
            type="submit"
            className="bg-customDark hover:bg-gray-700 rounded-lg text-white mb-10 p-2 flex items-center justify-center mt-5"
          >
            Skapa konto
          </button>
        </form>
      </div>
    </div>
  );
}

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
