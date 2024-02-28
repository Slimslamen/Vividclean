import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";

export default function Register():JSX.Element{

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [repeatPassword, setRepeatPassword] = useState<string>("");
    const [agreeTerms, setAgreeTerms] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

  return (
    <div className="w-96 h-100 border border-solid ">
      <div className="w-80">
        <form className="flex max-w-md flex-col gap-4" />
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="E-post" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="name@flowbite.com"
            required
            shadow
          />
        </div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Lösenord" />
        </div>
        <TextInput id="password2" type="password" required shadow />
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Repetera lösenord" />
        </div>
        <TextInput id="repeat-password" type="password" required shadow />
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the terms and conditions
          </Label>
        </div>
        <Button type="submit" className="bg-customDark hover:bg-gray-700">Registrera konto</Button>
      </div>
    </div>
  );
}
