import { createContext } from "react";

export const InitialState = {
  type: "Green",
  setType: null
};

const IconWalletContext = createContext(InitialState);

export default IconWalletContext;
