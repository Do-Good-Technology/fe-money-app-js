import { Col, Image, Row, Space, Typography } from "antd";

import WalletIcon from "../../../assets/icons/wallet.svg";

const { Text, Title } = Typography;

const Balance = () => (
    <Row gutter={16}>
        <Col span={3} offset={2}>
            <Image src={WalletIcon} width="52px" preview={false} />
        </Col>
        <Col span={18}>
            <Text>Total Balance</Text>
            <br />
            <Title level={3}>Rp 2,500,000</Title>
        </Col>
    </Row>
)

const Report = () => (
    <Row>
        <Col span={24}>

        </Col>
    </Row>
)

// ? todo
// TrasactionHeader
// _ Balance
// _ Report
export default function TransactionHeader() {
    return (
        // <Space direction="vertical">
        <Row span={24} style={{ paddingTop: "30px" }}>
            <Col span={24}>
                <Balance />
            </Col>
            <Col>
                <Report />
            </Col>
        </Row>
        // </Space>
    )
}