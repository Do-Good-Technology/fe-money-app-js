import { Fragment } from "react";
import MaNavBar from "../../components/global/MaNavBar";
import IconWalletContextProvider from "../../components/ChooseWalletIcon/context/IconWalletContextProvider";
import ListWalletIcon from "../../components/ChooseWalletIcon/ListWalletIcon";

export default function ChooseWalletIcon() {
  return (
    <IconWalletContextProvider>
      <Fragment>
        <MaNavBar title="Choose Wallet Icon" />
        <ListWalletIcon />
      </Fragment>
    </IconWalletContextProvider>
  );
}
