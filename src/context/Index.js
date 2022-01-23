import GlobalContextProvider from "./GlobalContextProvider";
import IconWalletContextProvider from "./IconWalletContextProvider";
import ChooseWalletContextProvider from "./ChooseWalletContextProvider";
import ChooseCategortyContextProvider from "./ChooseCategortyContextProvider";

export default function Index({ children }) {
  return (
    <GlobalContextProvider>
      <IconWalletContextProvider>
        <ChooseWalletContextProvider>
          <ChooseCategortyContextProvider>
            <>{children}</>
          </ChooseCategortyContextProvider>
        </ChooseWalletContextProvider>
      </IconWalletContextProvider>
    </GlobalContextProvider>
  );
}
