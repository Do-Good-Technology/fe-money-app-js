import { createContext } from "react";

export const initialState = {
  isHome: false
};

const GlobalContext = createContext(initialState);

export default GlobalContext;
