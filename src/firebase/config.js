import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8ExkgagXVOW27dnsTN0m20mMIzqIhqf0",
  authDomain: "veterinaria-petcare-b9fb4.firebaseapp.com",
  projectId: "veterinaria-petcare-b9fb4",
  storageBucket: "veterinaria-petcare-b9fb4.firebasestorage.app",
  messagingSenderId: "991078385672",
  appId: "1:991078385672:web:857c1961d66458abe169bd",
  measurementId: "G-405V9CJ0BN",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
