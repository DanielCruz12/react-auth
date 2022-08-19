import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { auth } from "../config";

export const authContext = createContext()

export const useAuth = () => {
  const context = useContext(authContext);
  if(!context){
    throw new console.error("useAuth must be use with an provider");
  }
  return context;
}

export const AuthProvider= ({ children }) => {
const [user, setUser] = useState(null);

const signUp =  (email, password) => createUserWithEmailAndPassword(auth, email, password);

const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

const logout = () => signOut(auth);

const loginWithGoogle = () => {
  const googleProvider = new GoogleAuthProvider()
  return signInWithPopup(auth, googleProvider)
}

useEffect(() => {
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })
},[]);

  return <authContext.Provider value={{signUp, login, logout, loginWithGoogle, user}}>{children}</authContext.Provider>;
}
