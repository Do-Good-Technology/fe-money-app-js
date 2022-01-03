import { Col, Image, Row, Typography } from "antd";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { wallet } from "../ChooseWalletIcon/utilitiesWalletIcon";

const { Text } = Typography;

/**
 * 
 * @param {String} type 
 * @returns {React.ReactNode} icon & text
 */
export default function IconForm({ type = "Green" }) {
  return (
    <Fragment>
      <Row justify="center">
        <Col>
          <Link to="/choose-wallet-icon">
            <Image alt="" src={wallet(type)} width="120px" preview={false} />
          </Link>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: "8px" }}>
        <Col>
          <Text type="secondary">Tap to Change Wallet Icon</Text>
        </Col>
      </Row>
    </Fragment>
  );
}
