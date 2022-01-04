import { Affix, Card, Col, Row, Typography } from "antd";
import { NavBar as AntmNavbar } from "antd-mobile";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

export default function MaNavBar({ title, goBackTo }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(goBackTo);
  };

  return (
    <Row style={{ height: "63px" }}>
      <Col span={24}>
        <Affix
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%"
          }}
        >
          <Card bodyStyle={{ padding: "8px 8px" }}>
            <AntmNavbar onBack={goBack}>
              <Text strong>
                {title}
              </Text>
            </AntmNavbar>
          </Card>
        </Affix>
      </Col>
    </Row>
  );
}
