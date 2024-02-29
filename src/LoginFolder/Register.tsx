import { Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { ProductContext } from "../ProductContext";
import React from "react";
import { ContextType } from "../types/types";


export default function Register():JSX.Element{
    const { loginVisible, handleMenuItemClick } = React.useContext(ProductContext)! as ContextType;

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [postalCode, setPostalCode] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [repeatPassword, setRepeatPassword] = useState<string>("");
    const [agreeTerms, setAgreeTerms] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    
  
    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFirstName(e.target.value);
    };
  
    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLastName(e.target.value);
    };
  
    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setAddress(e.target.value);
    };
  
    const handlePostalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPostalCode(e.target.value);
    };
  
    const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCity(e.target.value);
    };
  
    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPhoneNumber(e.target.value);
    };
  
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    };
  
    const handleRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setRepeatPassword(e.target.value);
    };
  
    const handleTermsChange = () => {
      setAgreeTerms(!agreeTerms);
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const numericPattern = /^\d+$/;
  
      if (!emailPattern.test(email)) {
        setError("Vänligen fyll i en giltig e-postadress.");
        return;
      }
  
      if (password !== repeatPassword) {
        setError("Lösenorden matchar inte.");
        return;
      }
  
      if (!agreeTerms) {
        setError("Godkänn villkoren.");
        return;
      }
  
      if (!numericPattern.test(postalCode)) {
          setError("Postnummer måste vara siffror.");
          return;
        }
    
        if (!numericPattern.test(phoneNumber)) {
          setError("Telefonnummer måste vara siffror.");
          return;
        }
      
  
      // Återställ alla fält
      
      setFirstName("");
      setLastName("");
      setAddress("");
      setPostalCode("");
      setCity("");
      setPhoneNumber("");
      setEmail("");
      setPassword("");
      setRepeatPassword("");
      setAgreeTerms(false);
      setError("");
    };
    

    function handleHideRegister() {
        handleMenuItemClick("Skapa nytt konto");
      }
    
      if (!loginVisible) {
        return null;
      }

  return (
    <div className="w-96 h-100 border border-solid bg-customBeige">
        <button onClick={handleHideRegister}>stäng</button>
      <div className="w-96 flex items-center justify-center">
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="förnamn2" value="Förnamn:" />
            </div>
            <TextInput
              id="förnamn2"
              type="förnamn"
              value={firstName}
              onChange={handleFirstNameChange}
              required
              shadow
            />
          </div>
          <div className="mb-2 block">
              <Label htmlFor="efternamn2" value="Efternamn:" />
            </div>
            <TextInput
              id="efternamn2"
              type="efternamn"
              value={lastName}
              onChange={handleLastNameChange}
              required
              shadow
            />
            <div className="mb-2 block">
              <Label htmlFor="adress2" value="Adress:" />
            </div>
            <TextInput
              id="adress2"
              type="adress"
              value={address}
              onChange={handleAddressChange}
              required
              shadow
            />
                   <div className="mb-2 block">
              <Label htmlFor="postnummer2" value="Postnummer:" />
            </div>
            <TextInput
              id="postnummer2"
              type="postnummer"
              value={postalCode}
              onChange={handlePostalCodeChange}
              required
              shadow
            />
                   <div className="mb-2 block">
              <Label htmlFor="stad2" value="Stad:" />
            </div>
            <TextInput
              id="stad2"
              type="stad"
              value={city}
              onChange={handleCityChange}
              required
              shadow
            />
            <div className="mb-2 block">
              <Label htmlFor="telefonnummer2" value="Telefonnummer:" />
            </div>
            <TextInput
              id="telefonnummer2"
              type="telefonnummer"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
              shadow
            />
            <div className="mb-2 block">
              <Label htmlFor="email2" value="E-post:" />
            </div>
            <TextInput
              id="email2"
              type="email"
              placeholder="name@vividclean.com"
              value={email}
              onChange={handleEmailChange}
              required
              shadow
            />
          
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Lösenord:" />
          </div>
          <TextInput
            id="password2"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            shadow
          />
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Bekräfta lösenord:" />
          </div>
          <TextInput
            id="repeat-password"
            type="password"
            value={repeatPassword}
            onChange={handleRepeatPasswordChange}
            required
            shadow
          />
          <div className="flex items-center gap-2">
            <Checkbox
              id="agree"
              checked={agreeTerms}
              onChange={handleTermsChange}
            />
            <Label htmlFor="agree" className="flex">
              I agree with the terms and conditions
            </Label>
          </div>
          {error && <p className="text-black-500">{error}</p>}
          <button type="submit" className="bg-customDark hover:bg-gray-700 rounded-lg text-white mb-10 p-2">
            Skapa konto
          </button>
        </form>
      </div>
    </div>
  );
}
