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
  loginVisible: boolean;
  registerUser: RegisterUser;
  registerVisible: booelan;
};

export type UserAuthContextProps = {
  googleSignIn: () => Promise<void>;
  logOut: () => void;
  signUp: (email: string, password: string) => Promise<void>;
  logIn: (email: string, password: string) => Promise<void>;
  user: any;
};

//Interface for kundsida component
export interface Ibooking {
  name: string;
  selectedDate: date;
  cleaner: string;
  time: string;
  service: string;
  status: boolean;
}
export interface Ioptions {
  id: number;
  service: string;
  type: string;
}
export interface Icleaners {
  id: string | number;
  value: string;
  name: string;
}
export interface IformData {
  date: Date;
  time: string;
  cleaner: string;
  service: string;
}

export interface Ifirebase{
  id: string;
  name: string;
  date: date;
  cleaner: string;
  time: string;
  status: boolean;
  service: string
}