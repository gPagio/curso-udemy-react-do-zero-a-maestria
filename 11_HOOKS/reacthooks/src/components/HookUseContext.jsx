import { createContext } from "react"

export const SomeContext = createContext();

export const HookUseContext = ({ children }) => {
  const contextValue = "Testanto o Contexto";

  return (
    <SomeContext.Provider value={{contextValue}}>
      {children}
    </SomeContext.Provider>
  );
}