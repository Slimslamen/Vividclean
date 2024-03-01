import { Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { ProductContext } from "../ProductContext";
import React from "react";
import { ContextType, RegisterUser } from "../types/types";

export default function Register(): JSX.Element {
  const { registerVisible, handleMenuItemClick } = React.useContext(
    ProductContext
  )! as ContextType;

  const [registerUser, setRegisterUser] = useState<RegisterUser>({
    id: "",
    firstname: "",
    lastname: "",
    adress: "",
    postalcode: "",
    city: "",
    phonenumber: "",
    email: "",
    password: "",
    repeatpassword: "",
  });

  const [error, setError] = useState<string>("");

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterUser({ ...registerUser, firstname: e.target.value });
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterUser({ ...registerUser, lastname: e.target.value });
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterUser({ ...registerUser, adress: e.target.value });
  };

  const handlePostalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value)) && value.length <= 5) {
      setRegisterUser({ ...registerUser, postalcode: value });
      setError("");
    } else {
      setError("Postnummer måste vara siffror och högst 5 siffror.");
    }
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterUser({ ...registerUser, city: e.target.value });
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value)) && value.length <= 10) {
      setRegisterUser({ ...registerUser, phonenumber: value });
      setError("");
    } else {
      setError("Telefonnummer måste vara siffror och högst 10 siffror.");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(value)) {
      setRegisterUser({ ...registerUser, email: value });
      setError("");
    } else {
      setError("Vänligen fyll i en giltig e-postadress.");
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterUser({ ...registerUser, password: e.target.value });
  };

  const handleRepeatPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRegisterUser({ ...registerUser, repeatpassword: e.target.value });
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
  setRegisterUser({
    id: "",
    firstname: "",
    lastname: "",
    adress: "",
    postalcode: "",
    city: "",
    phonenumber: "",
    email: "",
    password: "",
    repeatpassword: "",
  });
  if (registerUser.password !== registerUser.repeatpassword) {
    setError("Lösenorden matchar inte.");
    return; // Avbryt vidare hantering om lösenorden inte matchar
  }
    // Här kan du lägga till din valideringslogik och andra åtgärder efter validering
  };

  function handleHideRegister() {
    handleMenuItemClick("Skapa nytt konto");
  }

  if (!registerVisible) {
    return null;
  }

  return (
    
      <div className="grid justify-center items-center right-0 left-0 z-50 md:inset-0 fixed w-96 h-auto ml-[20%] md:ml-[36%] bg-customBeige">
        <button
          onClick={handleHideRegister}
          className="bg-transparent border-none cursor-pointer ml-[92%] mt-2"
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
        <div className="w-96 flex items-center justify-center">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="firstname" value="Förnamn:" />
              </div>
              <TextInput
                id="firstname"
                type="text"
                value={registerUser.firstname}
                onChange={handleFirstNameChange}
                required
                shadow
              />
            </div>
            <div className="mb-2 block">
              <Label htmlFor="lastname" value="Efternamn:" />
            </div>
            <TextInput
              id="lastname"
              type="text"
              value={registerUser.lastname}
              onChange={handleLastNameChange}
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
              onChange={handleAddressChange}
              required
              shadow
            />
            <div className="mb-2 block">
              <Label htmlFor="postalcode" value="Postnummer:" />
            </div>
            <TextInput
              id="postalcode"
              type="text"
              placeholder="123 45"
              value={registerUser.postalcode}
              onChange={handlePostalCodeChange}
              required
              shadow
            />
            <div className="mb-2 block">
              <Label htmlFor="city" value="Stad:" />
            </div>
            <TextInput
              id="city"
              type="text"
              value={registerUser.city}
              onChange={handleCityChange}
              required
              shadow
            />
            <div className="mb-2 block">
              <Label htmlFor="phonenumber" value="Telefonnummer:" />
            </div>
            <TextInput
              id="phonenumber"
              type="text"
              placeholder="123-45678910"
              value={registerUser.phonenumber}
              onChange={handlePhoneNumberChange}
              required
              shadow
            />
            <div className="mb-2 block">
              <Label htmlFor="email" value="E-post:" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="name@vividclean.com"
              value={registerUser.email}
              onChange={handleEmailChange}
              required
              shadow
            />
            <div className="mb-2 block">
              <Label htmlFor="password" value="Lösenord:" />
            </div>
            <TextInput
              id="password"
              type="password"
              placeholder="********"
              value={registerUser.password}
              onChange={handlePasswordChange}
              required
              shadow
            />
            <div className="mb-2 block">
              <Label htmlFor="repeatpassword" value="Bekräfta lösenord:" />
            </div>
            <TextInput
              id="repeatpassword"
              type="password"
              placeholder="********"
              value={registerUser.repeatpassword}
              onChange={handleRepeatPasswordChange}
              required
              shadow
            />
            {error && <p className="text-black-500">{error}</p>}
            <button
              type="submit"
              className="bg-customDark hover:bg-gray-700 rounded-lg text-white mb-10 p-2"
            >
              Skapa konto
            </button>
          </form>
        </div>
      </div>
    
  );
}
