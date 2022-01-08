import { Fragment } from "react";
import AddNewWalletForm from "../../components/AddNewWallet/AddNewWalletForm";
import MaNavBar from "../../components/global/MaNavBar";

//? todo
// AddNewWallet
// _ NavBar
// _ AddNewWalletForm
// __ IconForm
// __ NameForm
// __ CurrentBalanceForm
// __ ConditionCheckBox
export default function AddNewWallet() {
  return (
    <Fragment>
      <MaNavBar title="Add New Wallet" goBackTo="/wallet" />
      <AddNewWalletForm />
    </Fragment>
  );
}
