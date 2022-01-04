import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  message,
  Row,
  Typography
} from "antd";
import md5 from "md5";
import { onFetch } from "../../helpers/onFetch";
import IconForm from "./IconForm";
import IconWalletContext from "../../context/IconWalletContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

const ListForm = () => {
  const navigate = useNavigate();
  const [formInstance] = Form.useForm();

  const { type } = useContext(IconWalletContext);

  const onFinish = async values => {
    console.log("values", values, "type", type);
    const keyValue = {
      walletName: values.walletName,
      currentBalance: values.currentBalance,
      type: type
    };
    console.log("key values", keyValue);
    const link = "asd";
  };

  return (
    <Form name="addNewWallet" form={formInstance} onFinish={onFinish}>
      <Form.Item
        name="walletName"
        label="Wallet Name"
        rules={[{ required: true }]}
      >
        <Input placeholder="E.g.: Brown Wallet" />
      </Form.Item>
      <Form.Item
        name="currentBalance"
        label="Current Balance"
        rules={[{ required: true }]}
      >
        <InputNumber addonBefore="Rp" style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item name="condition">
        <Checkbox>
          <Text>
            Add current balance as new income transaction to adjust total
            balance
          </Text>
        </Checkbox>
      </Form.Item>
      <Form.Item style={{ marginTop: "32px" }}>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

//? todo
// AddNewWallet
// _ O NavBar
// _ C AddNewWalletForm
// __ O IconForm
// __ C NameForm
// __ CurrentBalanceForm
// __ ConditionCheckBox
export default function AddNewWalletForm() {
  const [formInstance] = Form.useForm();

  return (
    <Row gutter={[0, 32]} style={{ paddingTop: "32px" }}>
      <Col span={24}>
        <IconForm />
      </Col>
      <Col span={22} offset={1}>
        <ListForm />
      </Col>
    </Row>
  );
}
