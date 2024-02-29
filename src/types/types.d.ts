// types.ts
export interface User {
    id: string;
    username: string;
    password: string;
  }
  
  export interface RegisterUser {
    id: string;
    firstname: string;
    lastname: string;
    adress: string;
    postalcode: string;
    city: string;
    phonenumber: string;
    email: string;
    password: string;
    repeatpassword: string; 
  }

  export type ContextType = {
    saveUser: (username: string, password: string) => void; // to save a new user
    user: User; // Interface for user object
    handleMenuItemClick: (label: string) => void;
    loginVisible: boolean
    registerUser: RegisterUser;
    registerVisible: boolean
  };