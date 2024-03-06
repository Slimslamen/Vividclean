import {useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Label, TextInput } from "flowbite-react";
import { ProductContext } from "../ProductContext";
import { ContextType } from "../types/types";
import React from "react";

const AdminLogin = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { adminVisible, handleMenuItemClick } = React.useContext(
    ProductContext
  )! as ContextType;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const firestore = getFirestore();

      // Logga in användaren med e-post och lösenord
      await signInWithEmailAndPassword(auth, email, password);

      // Hämta användarens dokument från Firestore baserat på e-postadressen
      const userQuery = doc(firestore, "users", email);
      const userDocSnap = await getDoc(userQuery);

      if (userDocSnap.exists()) {
        // Kontrollera användarrollen
        const userRole = userDocSnap.data()?.role;

        if (userRole === "employee") {
          // Om användaren har rollen 'employee', logga in användaren
          console.log("User logged in as employee");
          alert(`Inloggad som medarbetare ${email}`);
        } else if (userRole === "customer") {
          setError("Du har inte rätt behörighet att logga in.");
        } else {
          setError("Användaren hittades inte");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };
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
    handleMenuItemClick("Medarbetar Portal");
    // Dölj LogIn genom att anropa saveUser med tomma värden
  }

  function NavigateUserLogIn() {
    handleMenuItemClick("Logga in");
    handleMenuItemClick("Medarbetar Portal");
  }

  if (!adminVisible) {
    return null;
  }
  return (
    <main className="grid place-items-center w-full h-full">
      <div className="grid top-40 justify-center items-center right-0 left-0 z-50 md:inset-0 fixed">
        <form
          onSubmit={handleLogin}
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
            <Label value="Din email" className="text-black" />

            <TextInput
              type="email"
              value={email}
              placeholder="Din email"
              addon={usernameIcon}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Label value="Lösenord" className="text-black" />

            <TextInput
              type="password"
              value={password}
              placeholder="Lösenord"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="bg-customDark text-white hover:bg-customHoverDark rounded-md p-2 font-semibold"
            type="submit"
          >
            Logga in
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <p className="font-DM">
            Är du kund?{" "}
            <span onClick={NavigateUserLogIn} className="text-customDark hover:underline cursor-pointer">
              Logga in här
            </span>
          </p>
        </form>
      </div>
    </main>
  );
};

export default AdminLogin;
