import { useState } from "react";
import ChooseWalletContext, { initialState } from "./ChooseWalletContext";

export default function ChooseWalletContextProvider({ children }) {
  const [selectedWalletData, setSelectedWalletData] = useState(
    initialState.selectedWalletData
  );

  const resetSelectedWalletData = () => {
    setSelectedWalletData(initialState.selectedWalletData);
  };

  return (
    <ChooseWalletContext.Provider
      value={{
        selectedWalletData,
        setSelectedWalletData,
        resetSelectedWalletData
      }}
    >
      {children}
    </ChooseWalletContext.Provider>
  );
}
