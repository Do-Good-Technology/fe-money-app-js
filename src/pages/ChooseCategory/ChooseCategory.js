import { Col, Row } from "antd";
import { Fragment } from "react";
import ListCategory from "../../components/ChooseCategory/ListCategory";
import MaNavBar from "../../components/global/MaNavBar";

export default function ChooseCategory() {
  return (
    <Fragment>
      <MaNavBar title="Choose Category" goBackTo="/add-transaction" />
      <Row style={{ paddingTop: "18px" }}>
        <Col span={22} offset={1}>
          <ListCategory clickable chooseTo="/add-transaction" />
        </Col>
      </Row>
    </Fragment>
  );
}
