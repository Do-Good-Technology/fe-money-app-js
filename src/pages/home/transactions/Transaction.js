import { Row, Col, Affix, Button } from "antd";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

import TransactionHeader from "../../../components/home/Transaction/TransactionHeader";
import TransactionList from "../../../components/home/Transaction/TransactionList";
import MaFloat from "../../../components/global/MaFloat";

const TransactionFloatButton = () =>
  <MaFloat>
    <Link to="/add-transaction">
      <Button
        type="primary"
        shape="circle"
        icon={<PlusOutlined />}
        size="large"
      />
    </Link>
  </MaFloat>;

// ? todo
// TrasactionHeader
// _ Balance
// _ Report
// __ MonthNavigation
// __ DetailReport
// TransactionList
// _ TransactionCard
// __ SummaryCard
// __ DetailCard
// FloatButton
// SelectMonthModal
export default function Transaction() {
  return (
    <Fragment>
      <Row gutter={[0, 16]}>
        <Col span={24}>
          <TransactionHeader />
        </Col>
        <Col span={24}>
          <TransactionList />
        </Col>
      </Row>
      <TransactionFloatButton />
    </Fragment>
  );
}
