// types.ts

export type ContextType = {
  saveUser: (username: string, password: string) => void; // to save a new user
  user: User; // Interface for user object
  handleMenuItemClick: (label: string) => void;
  loginVisible: boolean;
  registerUser: RegisterUser;
  registerVisible: boolean;
  adminVisible: boolean;
};

export type UserAuthContextProps = {
  googleSignIn: () => Promise<void>;
  logOut: () => void;
  signUp: (email: string, password: string) => Promise<void>;
  logIn: (email: string, password: string) => Promise<void>;
  user: any;
};

//Interface for kundsida component

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
  selectedDate: date;
  time: string;
  cleaner: string;
  service: string;
}

export interface Ibooking{
  id: string;
  name: string;
  date: date;
  cleaner: string;
  time: string;
  status: boolean;
  service: string
}