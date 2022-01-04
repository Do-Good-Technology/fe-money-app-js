import { useState } from "react";

import GlobalContext, { initialState } from "./GlobalContext";

export default function GlobalContextProvider({ children }) {
  const [isHome, setIsHome] = useState(initialState.isHome);

  return (
    <GlobalContext.Provider
      value={{
        isHome,
        setIsHome
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
