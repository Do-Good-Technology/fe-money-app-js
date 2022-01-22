import GlobalContextProvider from "./GlobalContextProvider";
import IconWalletContextProvider from "./IconWalletContextProvider";
import ChooseWalletContextProvider from "./ChooseWalletContextProvider";

export default function Index({ children }) {
  return (
    <GlobalContextProvider>
      <IconWalletContextProvider>
        <ChooseWalletContextProvider>
          <>{children}</>
        </ChooseWalletContextProvider>
      </IconWalletContextProvider>
    </GlobalContextProvider>
  );
}
