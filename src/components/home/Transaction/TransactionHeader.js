import { Card, Col, Divider, Image, Row, Space, Typography } from "antd";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import WalletIcon from "../../../assets/icons/wallet.svg";

const { Text, Title } = Typography;

const Balance = () => (
    <Row>
        <Col span={4} offset={2}>
            <Image src={WalletIcon} width="52px" preview={false} />
        </Col>
        <Col span={17} offset={1}>
            <Text>Total Balance</Text>
            <br />
            <Title level={3}>Rp 2,500,000</Title>
        </Col>
    </Row>
)

const Report = () => (
    <Row gutter={[0, 8]}>
        <Col span={24}>
            <Row>
                <Col span={7}>
                    <Row justify="end">
                        <Col>
                            <LeftOutlined />
                        </Col>
                    </Row>
                </Col>
                <Col span={10}>
                    <Row justify="center">
                        <Col>
                            <Text>This Month</Text>
                        </Col>
                    </Row>
                </Col>
                <Col span={7}>
                    <Row justify="start">
                        <Col>
                            <RightOutlined />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
        <Col span={24}>
            <Row>
                <Col offset={1}>
                    <Title level={5}>April 2021</Title>
                </Col>
                <Col span={24}>
                    <Row>
                        <Col span={8} offset={1}>
                            <Text>Income</Text>
                        </Col>
                        <Col span={14}>
                            <Row justify="end">
                                <Col>
                                    <Text style={{ color: "var(--green-default)" }}>+ 1,689,000</Text>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Row>
                        <Col span={8} offset={1}>
                            <Text>Outcome</Text>
                        </Col>
                        <Col span={14}>
                            <Row justify="end">
                                <Col>
                                    <Text style={{ color: "var(--red-default)" }}>- 340,500</Text>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Row>
                        <Col span={8} offset={1} />
                        <Col span={14}>
                            <Row justify="end">
                                <Col>
                                    <Text strong>+ 1,287,500</Text>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    </Row>
)

// ? todo
// TrasactionHeader
// _ Balance
// _ Report
// __ MonthNavigation
// __ DetailReport
export default function TransactionHeader() {
    return (
        <Row span={24} gutter={[0, 8]} >
            <Col span={24}>
                <Card bodyStyle={{ padding: "8px 0px" }}>
                    <Balance />
                </Card>
            </Col>
            <Col span={24}>
                <Card bodyStyle={{ padding: "8px 0px" }}>
                    <Report />
                </Card>
            </Col>
        </Row>
    )
}