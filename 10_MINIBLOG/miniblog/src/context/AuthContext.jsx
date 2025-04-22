import { useContext, createContext } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children, value }) => {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthValue = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Contexto não encontrado para hook useAuthValue.");
  }

  return context;
};
