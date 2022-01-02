import { Affix, Card, Col, Row } from "antd";
import { NavBar } from "antd-mobile";
import { Fragment } from "react";

const NavBarAddWallet = () =>
  <Row style={{ height: "63px" }}>
    <Col span={24}>
      <Affix
        style={{ position: "absolute", top: "0px", left: "0px", width: "100%" }}
      >
        <Card bodyStyle={{ padding: "8px 8px" }}>
          <NavBar>标题</NavBar>
        </Card>
      </Affix>
    </Col>
  </Row>;

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
      <NavBarAddWallet />
      <Row>
        <Col span={24}>hayo</Col>
      </Row>
    </Fragment>
  );
}
