import { createContext, useContext } from "react";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../config";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if(!context){
    throw new console.error("useAuth must be use with an provider");
  }
  return context;
}

export const AuthProvider= ({ children }) => {
const signUp =  (email, password) => createUserWithEmailAndPassword(auth, email, password);


  return <authContext.Provider value={{signUp}}>{children}</authContext.Provider>;
}
