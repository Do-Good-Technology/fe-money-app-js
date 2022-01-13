import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../../context/GlobalContext";
import { onFetch } from "../../../helpers/onFetch";
import WalletContext, { initialState } from "./WalletContext";

export default function WalletContextProvider({ children }) {
  const { isFetching, setIsFetching } = useContext(GlobalContext);
  const fetch = { isFetching, setIsFetching };

  const [balanceTotal, setBalanceTotal] = useState(initialState.balanceTotal);

  const [walletListData, setWalletListData] = useState(
    initialState.walletListData
  );

  const fetchGetData = async () => {
    const auth = localStorage.getItem("auth");

    const keyValue = {
      auth: auth
    };
    const link = "/wallet/show-wallet-page";

    const data = await onFetch(keyValue, link, fetch);

    setBalanceTotal(data?.balanceTotal);
    setWalletListData(data?.walletListData);

    console.log("data /wallet/show-wallet-page", data);
  };

  useEffect(() => {
    fetchGetData();
  }, []);

  return (
    <WalletContext.Provider value={{ balanceTotal, walletListData }}>
      {children}
    </WalletContext.Provider>
  );
}
