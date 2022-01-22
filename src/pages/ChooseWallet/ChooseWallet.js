import { Col, Row, Text } from "antd";
import { Fragment } from "react";
import MaNavBar from "../../components/global/MaNavBar";
import ListWallet from "../../components/home/Wallet/ListWallet";
import WalletContextProvider from "../../components/home/Wallet/WalletContextProvider";

export default function ChooseWallet() {
  return (
    <WalletContextProvider>
      <Fragment>
        <MaNavBar title="Choose Wallet" goBackTo="/add-transaction" />
        <Row style={{ paddingTop: "18px" }}>
          <Col span={22} offset={1}>
            <ListWallet clickable chooseTo="/add-transaction" />
          </Col>
        </Row>
      </Fragment>
    </WalletContextProvider>
  );
}
