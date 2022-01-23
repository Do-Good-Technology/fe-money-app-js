import { Button, Card, Col, Image, Row, Typography } from "antd";
import { Link } from "react-router-dom";

const { Text } = Typography;

export default function MaSelectCategoryButton({ data }) {
  if (data?.id !== "") {
    return (
      <Row>
        <Col span={12}>
          <Link to="/choose-category">
            <Card hoverable bodyStyle={{ padding: "8px 8px" }}>
              <Row align="middle">
                <Col offset={1} span={8}>
                  <Image alt="" width="40px" src={data?.icon} preview={false} />
                </Col>
                <Col span={15}>
                  <Text>{data?.name}</Text> <br />
                </Col>
              </Row>
            </Card>
          </Link>
        </Col>
      </Row>
    );
  }

  return (
    <Link to="/choose-category">
      <Button>Select Category</Button>;
    </Link>
  );
}
