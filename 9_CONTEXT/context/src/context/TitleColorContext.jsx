import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

const titleColorReducer = (state, action) => {
  // implementação
}

export const TitleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorReducer, { color: "purple" });

  console.log("Title Color Context: ", state)

  return (
    <TitleColorContext.Provider value={{...state}}>
      {children}
    </TitleColorContext.Provider>
  );
};
