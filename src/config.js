    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZgLZsWlYAcOQ3DU5elwOFNDw7y8Zyq5U",
  authDomain: "react-auth-fire-fa3b6.firebaseapp.com",
  projectId: "react-auth-fire-fa3b6",
  storageBucket: "react-auth-fire-fa3b6.appspot.com",
  messagingSenderId: "1037054313442",
  appId: "1:1037054313442:web:e7c3916acdc001923f2fbb",
  measurementId: "G-4759LEQK8G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);