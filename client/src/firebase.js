import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrNetxRO_kQRbbqF9GKasTuDQtt6MGiXA",
  authDomain: "authentication-4d7c7.firebaseapp.com",
  projectId: "authentication-4d7c7",
  storageBucket: "authentication-4d7c7.appspot.com",
  messagingSenderId: "618252521307",
  appId: "1:618252521307:web:25bb9906e40aa42c99947e",
  measurementId: "G-5L3KZP2BM7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
