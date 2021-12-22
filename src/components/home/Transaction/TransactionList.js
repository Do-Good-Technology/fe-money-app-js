import { Card, Col, Divider, Image, Row, Space, Typography } from "antd";

import CharityIcon from '../../../assets/icons/category/charity.svg'

const { Text, Title } = Typography;

const SummaryCard = () => (
    <Col span={24}>
        <Row>
            <Col span={4}>
                <Row justify="end">
                    <Col>
                        <Title level={2} style={{ color: "var(--neutral-80)" }}>28</Title>
                    </Col>
                </Row>
            </Col>
            <Col span={12} offset={1}>
                <Row>
                    <Col span={24}>
                        <Text strong>Sunday</Text>
                    </Col>
                    <Col>
                        <Text>August 2021</Text>
                    </Col>
                </Row>
            </Col>
            <Col span={6}>
                <Row justify="end">
                    <Col>
                        <Title level={5} style={{ color: "var(--red-default)" }}>- 132,000</Title>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Col>
)


const DetailItem = () => (
    <Col span={24}>
        <Row>
            <Col span={4}>
                <Row justify="end">
                    <Image alt="" width="40px" src={CharityIcon} preview={false} />
                </Row>
            </Col>
            <Col span={12} offset={1}>
                <Row>
                    <Col span={24}>
                        <Text>Donation</Text>
                    </Col>
                    <Col>
                        <Text type="secondary">Gopay | Sedekah hari jumat via Kitabisa</Text>
                    </Col>
                </Row>
            </Col>
            <Col span={6}>
                <Row justify="end">
                    <Col>
                        <Text strong style={{ color: "var(--red-default)" }}>- 5,000</Text>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Col>
)

const DetailCard = () => (
    <DetailItem />
)

const TransactionCard = () => (
    <Col span={24}>
        <Card bodyStyle={{ padding: "4px 0px" }}>
            <Row>
                <SummaryCard />
                <DetailCard />
            </Row>
        </Card>
    </Col>
)

// ? todo
// O TransactionList
// _ O TransactionCard
// __ O SummaryCard
// __ DetailCard
// ___ DetailItem
// FloatButton
export default function TransactionList() {
    return (
        <Row>
            <TransactionCard />
        </Row>
    )
}