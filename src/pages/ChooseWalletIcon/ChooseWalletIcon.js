import { Col, Row } from "antd";
import { Fragment } from "react";
import ListWalletIcon from "../../components/ChooseWalletIcon/ListWalletIcon";
import MaNavBar from "../../components/global/MaNavBar";

export default function ChooseWalletIcon() {
  return (
    <Fragment>
      <Row gutter={[0, 16]}>
        <Col span={24}>
          <MaNavBar title="Choose Wallet Icon" goBackTo="/add-new-wallet" />
        </Col>
        <Col span={24}>
          <ListWalletIcon />
        </Col>
      </Row>
    </Fragment>
  );
}
