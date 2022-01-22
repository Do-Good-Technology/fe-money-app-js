import { Button, Card, Col, Image, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import { idrFormatter } from "../../helpers/utilities";
import { wallet } from "../../helpers/utilitiesWalletIcon";

const { Text } = Typography;

export default function MaSelectWalletButton({ data }) {
  if (data?.nameWallet !== "") {
    return (
      <Row>
        <Col span={12}>
          <Link to="/choose-wallet">
            <Card hoverable bodyStyle={{ padding: "8px 8px" }}>
              <Row>
                <Col offset={1} span={8}>
                  <Image
                    alt=""
                    width="40px"
                    src={wallet(data?.iconWallet)}
                    preview={false}
                  />
                </Col>
                <Col span={15}>
                  <Text>{data?.nameWallet}</Text> <br />
                  <Text>{idrFormatter.format(data?.nominalWallet)}</Text>
                </Col>
              </Row>
            </Card>
          </Link>
        </Col>
      </Row>
    );
  }

  return (
    <Link to="/choose-wallet">
      <Button>Select Wallet</Button>
    </Link>
  );
}
