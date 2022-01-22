import { createContext } from "react";

export const initialState = {
  selectedWalletData: {
    nameWallet: "",
    iconWallet: "",
    nominalWallet: 0
  },
  setSelectedWalletData: null
};

const ChooseWalletContext = createContext(initialState);

export default ChooseWalletContext;
