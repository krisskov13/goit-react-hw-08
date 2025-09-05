import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA50WMOD8vkbUFMuFIaS58J27nVlrn2-Es",
  authDomain: "phone-book-89696.firebaseapp.com",
  projectId: "phone-book-89696",
  storageBucket: "phone-book-89696.firebasestorage.app",
  messagingSenderId: "184723774651",
  appId: "1:184723774651:web:d28f12aacfdd08f83f5d9e",
  measurementId: "G-TN975YHBW6",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
