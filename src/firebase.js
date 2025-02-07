// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnVAxAbOdndPh6U8iQqnxglegwB8RhQ9M",
  authDomain: "clone-niranjansd.firebaseapp.com",
  projectId: "clone-niranjansd",
  storageBucket: "clone-niranjansd.firebasestorage.app",
  messagingSenderId: "855229504070",
  appId: "1:855229504070:web:d50f3c9bc3b29c38814847",
  measurementId: "G-J0WJDDM3G0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
