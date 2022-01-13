import { Card, Col, Image, Row, Typography } from "antd";
import { useContext } from "react";
import { idrFormatter } from "../../../helpers/utilities";
import { wallet } from "../../../helpers/utilitiesWalletIcon";
import WalletContext from "./WalletContext";

const { Text } = Typography;

const ItemWallet = ({ name, nominal, icon }) => (
  <Card bodyStyle={{ padding: "8px 8px" }}>
    <Row>
      <Col span={4} offset={1}>
        <Image alt="" width="40px" src={wallet(icon)} preview={false} />
      </Col>
      <Col span={19}>
        <Text strong>{name}</Text>
        <br />
        <Text>{idrFormatter.format(nominal)}</Text>
      </Col>
    </Row>
  </Card>
);

const GroupWallet = () => {
  const { walletListData } = useContext(WalletContext);

  const groupWallet = walletListData.map((item) => (
    <Col span={24}>
      <ItemWallet
        name={item?.name_wallet}
        nominal={item?.nominal_wallet}
        icon={item?.icon_wallet}
      />
    </Col>
  ));

  return <Row gutter={[0, 8]}>{groupWallet}</Row>;
};

// ? todo
// Wallet pages
// _ O WalletHeader
// _ C List Wallet
// __ text "your wallet"
// __ Card Wallets
// ___ Item Wallet
// _ WalletFloatButton
export default function ListWallet() {
  return (
    <Row gutter={[0, 16]}>
      <Col span={12} offset={1}>
        <Text strong>Your Wallet</Text>
      </Col>
      <Col span={22} offset={1}>
        <GroupWallet />
      </Col>
    </Row>
  );
}
