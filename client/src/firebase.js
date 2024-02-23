// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-mern-638f9.firebaseapp.com",
  projectId: "realestate-mern-638f9",
  storageBucket: "realestate-mern-638f9.appspot.com",
  messagingSenderId: "884768693250",
  appId: "1:884768693250:web:92ce9fb2d1d3fb939ddb1b",
  measurementId: "G-16JNBVL8JB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
