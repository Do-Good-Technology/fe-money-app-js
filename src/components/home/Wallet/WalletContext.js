import { createContext } from "react";

export const initialState = {
  balanceTotal: 0,
  setBalanceTotal: null,
  walletListData: [{}],
  setWalletListData: null,
};

const WalletContext = createContext(initialState);

export default WalletContext;
