import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Typography } from "antd";
import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import WalletBackground from "../../../assets/background/wallet.svg";
import MaFloat from "../../../components/global/MaFloat";
import ListWallet from "../../../components/home/Wallet/ListWallet";
import WalletContext from "../../../components/home/Wallet/WalletContext";
import WalletContextProvider from "../../../components/home/Wallet/WalletContextProvider";
import { idrFormatter } from "../../../helpers/utilities";

const { Text, Title } = Typography;

const WalletHeader = () => {
  const { balanceTotal } = useContext(WalletContext);

  return (
    <Card
      style={{ backgroundImage: `url(${WalletBackground})`, height: "240px" }}
    >
      <Row style={{ paddingTop: "50px" }} align="bottom" justify="space-around">
        <Col span={24}>
          <Row justify="center">
            <Col>
              <Title level={5}>Total Balance</Title>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row justify="center">
            <Col>
              <Title level={1} strong>
                {idrFormatter.format(balanceTotal)}
              </Title>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};
const WalletFloatButton = () => (
  <MaFloat>
    <Link to="/add-new-wallet">
      <Button
        type="primary"
        shape="round"
        icon={<PlusOutlined />}
        size="middle"
      >
        Add Wallet
      </Button>
    </Link>
  </MaFloat>
);

// ? todo
// Wallet pages
// _ O WalletHeader
// _ List Wallet
// __ text "your wallet"
// __ Card Wallet
// _ WalletFloatButton
export default function Wallet() {
  return (
    <Fragment>
      <WalletContextProvider>
        <Row gutter={[0, 16]}>
          <Col span={24}>
            <WalletHeader />
          </Col>
          <Col span={24}>
            <ListWallet />
          </Col>
        </Row>
        <WalletFloatButton />
      </WalletContextProvider>
    </Fragment>
  );
}
