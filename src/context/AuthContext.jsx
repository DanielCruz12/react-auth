import { createContext, useContext } from "react";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if(!context){
    throw new console.error("useAuth must be use with an provider");
  }
  return context;
}

export const AuthProvider= ({ children }) => {
  const user = { 
    login: true,
  };

  return <authContext.Provider value={{user}}>{children}</authContext.Provider>;
}
