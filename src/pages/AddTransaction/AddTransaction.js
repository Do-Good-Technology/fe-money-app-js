import { Layout } from "antd";
import { Fragment } from "react";
import AddTransactionForm from "../../components/AddTransaction/AddTransactionForm";
import MaNavBar from "../../components/global/MaNavBar";

//todo
//_ MaNavBar
//_ AddTransactionForm
//___ SelectWalletButton data={walletData}
//___ NominalForm
//___ ...
//___ SelectCategoryButton
//___ ...
export default function AddTransaction() {
  return (
    <Fragment>
      <MaNavBar title="Add Transaction" goBackTo="/" />
      <AddTransactionForm />
    </Fragment>
  );
}
