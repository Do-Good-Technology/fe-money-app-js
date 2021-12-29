import { Row, Col } from "antd";

import TransactionHeader from "../../../components/home/Transaction/TransactionHeader";
import TransactionList from "../../../components/home/Transaction/TransactionList";

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
    <Row gutter={[0, 16]}>
      <Col span={24}>
        <TransactionHeader />
      </Col>
      <Col span={24}>
        <TransactionList />
      </Col>
    </Row>
  );
}
