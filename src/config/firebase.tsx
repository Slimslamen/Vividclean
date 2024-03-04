import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
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
const auth = getAuth(app)
const db = getFirestore(app)
