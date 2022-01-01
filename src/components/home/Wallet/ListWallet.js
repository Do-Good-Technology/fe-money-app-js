import { Card, Col, Row, Typography, Image } from "antd";

import WalletIcon from "../../../assets/icons/wallet.svg";

const { Text } = Typography;

const ItemWallet = () =>
  <Card bodyStyle={{ padding: "8px 8px" }}>
    <Row>
      <Col span={4} offset={1}>
        <Image alt="" width="40px" src={WalletIcon} />
      </Col>
      <Col span={19}>
        <Text strong>Real Wallet</Text>
        <br />
        <Text>Rp 380,000</Text>
      </Col>
    </Row>
  </Card>;

const CardWallet = () => {
  return <ItemWallet />;
};

// ? todo
// Wallet pages
// _ O WalletHeader
// _ C List Wallet
// __ text "your wallet"
// __ Card Wallet
// ___ Item Wallet
// _ WalletFloatButton
export default function ListWallet() {
  return (
    <Row>
      <Col span={12} offset={1}>
        <Text strong>Your Wallet</Text>
      </Col>
      <Col span={22} offset={1}>
        <CardWallet />
      </Col>
    </Row>
  );
}
