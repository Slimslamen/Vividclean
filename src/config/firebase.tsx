
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}


  // Your web app's Firebase configuration
  const firebaseConfig: FirebaseConfig = {
    apiKey: "AIzaSyDbJxahF_FwUHw1oVk4kjyvlQI_3lGvJic",
    authDomain: "vividclean-fc118.firebaseapp.com",
    projectId: "vividclean-fc118",
    storageBucket: "vividclean-fc118.appspot.com",
    messagingSenderId: "331122350947",
    appId: "1:331122350947:web:61015cc1d144bf1cb1d156",
    measurementId: "G-EW79PSPLMW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);

 export default app
