import { Card, Col, Image, Row, Typography } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ChooseCategortyContext from "../../context/ChooseCategortyContext";

import { catergoryData } from "../../helpers/utilitiesCategoryIcon";

const { Text } = Typography;

const CatergoryItem = ({ data, clickable = false, chooseTo = "" }) => {
  const navigate = useNavigate();
  const { selectedCategory, setSelectedCategory } = useContext(
    ChooseCategortyContext
  );

  const onClick = () => {
    if (clickable) {
      setSelectedCategory({
        id: data.id,
        name: data.name,
        icon: data.icon
      });
      navigate(chooseTo);
    }
  };

  const selectedBackgroud = {
    backgroundColor: "var(--neutral-40)"
  };

  return (
    <Card
      onClick={onClick}
      bodyStyle={{ padding: "8px 8px" }}
      style={selectedCategory?.id === data.id ? selectedBackgroud : {}}
    >
      <Row align="middle">
        <Col span={4} offset={1}>
          <Image alt="" width="40px" src={data.icon} preview={false} />
        </Col>
        <Col span={19}>
          <Text strong>{data.name}</Text>
        </Col>
      </Row>
    </Card>
  );
};

export default function ListCategory({ clickable, chooseTo }) {
  const listCategory = catergoryData.map((item) => (
    <Col span={24}>
      <CatergoryItem data={item} clickable={clickable} chooseTo={chooseTo} />
    </Col>
  ));

  return <Row gutter={[0, 8]}>{listCategory}</Row>;
}
