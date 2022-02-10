import { createContext } from "react";

export const initialState = {
  selectedWalletData: {
    idWallet: 0,
    nameWallet: "",
    iconWallet: "",
    nominalWallet: 0
  },
  setSelectedWalletData: null,
  resetSelectedWalletData: null,
};

const ChooseWalletContext = createContext(initialState);

export default ChooseWalletContext;
