// types.ts
export interface User {
    id: string;
    username: string;
    password: string;
  }
  
  export type ContextType = {
    saveUser: (username: string, password: string) => void; // to save a new user
    user: User; // Interface for user object
    handleMenuItemClick: (label: string) => void;
    loginVisible: boolean

  };