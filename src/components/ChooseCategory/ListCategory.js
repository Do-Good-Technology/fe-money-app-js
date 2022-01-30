import { Card, Col, Image, Row, Typography } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CapsuleTabs } from "antd-mobile";
import ChooseCategortyContext from "../../context/ChooseCategortyContext";

import {
  expenseCatergoryData,
  incomeCategoryData
} from "../../helpers/utilitiesCategoryIcon";

const { Text } = Typography;

const CatergoryItem = ({
  type = "",
  data,
  clickable = false,
  chooseTo = ""
}) => {
  const navigate = useNavigate();
  const { selectedCategory, setSelectedCategory } = useContext(
    ChooseCategortyContext
  );

  const onClick = () => {
    if (clickable) {
      setSelectedCategory({
        id: data.id,
        name: data.name,
        icon: data.icon,
        type: type
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
  const listExpenseCategory = expenseCatergoryData.map((item) => (
    <Col span={24}>
      <CatergoryItem
        type="expense"
        data={item}
        clickable={clickable}
        chooseTo={chooseTo}
      />
    </Col>
  ));

  const listIncomeCategory = incomeCategoryData.map((item) => (
    <Col span={24}>
      <CatergoryItem
        type="income"
        data={item}
        clickable={clickable}
        chooseTo={chooseTo}
      />
    </Col>
  ));

  return (
    <CapsuleTabs>
      <CapsuleTabs.Tab title="Expense" key="expense">
        {listExpenseCategory}
      </CapsuleTabs.Tab>
      <CapsuleTabs.Tab title="Income" key="income">
        {listIncomeCategory}
      </CapsuleTabs.Tab>
    </CapsuleTabs>
  );
}
