import React, { useReducer } from "react";
import { initialState, reducer } from "./reducer";

export const authContext = React.createContext();

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <authContext.Provider value={{ state, dispatch }}>
      {children}
    </authContext.Provider>
  );
}
