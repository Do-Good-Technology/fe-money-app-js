import { createContext } from "react";

export const initialState = {
  isHome: false,
  isFetching: false,
  setIsFetching: null
};

const GlobalContext = createContext(initialState);

export default GlobalContext;
