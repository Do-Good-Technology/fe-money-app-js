import { useEffect } from "react";
import { useState } from "react";
import IconWalletContext, { InitialState } from "./IconWalletContext";

export default function IconWalletContextProvider({ children }) {
  const [type, setType] = useState(InitialState.type);
  return (
    <IconWalletContext.Provider
      value={{
        type,
        setType
      }}
    >
      {children}
    </IconWalletContext.Provider>
  );
}
