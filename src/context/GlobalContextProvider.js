import { useState } from "react";
import GlobalContext, { initialState } from "./GlobalContext";


export default function GlobalContextProvider({ children }) {
  const [isHome, setIsHome] = useState(initialState.isHome);

  const [isFetching, setIsFetching] = useState(initialState.isFetching);

  return (
    <GlobalContext.Provider
      value={{
        isHome,
        setIsHome,
        isFetching,
        setIsFetching
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
