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
  signUp: (email: string, name:string, password: string) => Promise<void>;
  logIn: (email: string, password: string) => Promise<void>;
  user: any;
  name:string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  emailLogin: string;
  setEmailLogin: React.Dispatch<React.SetStateAction<string>>
  martaRef: CollectionReference<DocumentData>;
  EstelleRef: CollectionReference<DocumentData>;
  JimmyRef:CollectionReference<DocumentData>;
  emailAdmin: string;
  setEmailAdmin: React.Dispatch<React.SetStateAction<string>>
  formData: IformData;
  setFormData: React.Dispatch<React.SetStateAction<IformData>>
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
  selectedName: string;
  selectedDate: date;
  time: string;
  cleaner: string;
  service: string;
  status: boolean;
}

export interface Ibooking{
  id: string;
  name: string;
  date: Date;
  cleaner: string;
  time: string;
  status: boolean;
  service: string
}