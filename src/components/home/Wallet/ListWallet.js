import { Card, Col, Image, Row, Typography } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { idrFormatter } from "../../../helpers/utilities";
import { wallet } from "../../../helpers/utilitiesWalletIcon";
import WalletContext from "./WalletContext";
import ChooseWalletContext from "../../../context/ChooseWalletContext";

const { Text } = Typography;

const ItemWallet = ({
  name = "",
  nominal = "",
  icon = "",
  clickable = false,
  chooseTo = ""
}) => {
  const navigate = useNavigate();
  const { setSelectedWalletData } = useContext(ChooseWalletContext);

  const onClick = () => {
    if (clickable) {
      setSelectedWalletData({
        nameWallet: name,
        iconWallet: icon,
        nominalWallet: nominal
      });
      navigate(chooseTo);
    }
  };

  return (
    <Card onClick={onClick} bodyStyle={{ padding: "8px 8px" }}>
      <Row>
        <Col span={4} offset={1}>
          <Image alt="" width="40px" src={wallet(icon)} preview={false} />
        </Col>
        <Col span={19}>
          <Text strong>{name}</Text>
          <br />
          <Text>{nominal && idrFormatter.format(nominal)}</Text>
        </Col>
      </Row>
    </Card>
  );
};

export default function ListWallet({ clickable, chooseTo }) {
  const { walletListData } = useContext(WalletContext);

  const groupWallet = walletListData.map((item) => (
    <Col span={24}>
      <ItemWallet
        name={item?.name_wallet}
        nominal={item?.nominal_wallet}
        icon={item?.icon_wallet}
        clickable={clickable}
        chooseTo={chooseTo}
      />
    </Col>
  ));

  return <Row gutter={[0, 8]}>{groupWallet}</Row>;
}
