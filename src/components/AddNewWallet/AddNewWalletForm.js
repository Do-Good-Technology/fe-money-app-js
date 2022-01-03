import {
  Button, Checkbox, Col, Form,
  Input,
  InputNumber, Row, Typography
} from "antd";
import IconForm from "./IconForm";


const { Text } = Typography;

const ListForm = ({ formInstance }) =>
  <Form name="addNewWallet" form={formInstance}>
    <Form.Item name="walletName" label="Wallet Name">
      <Input placeholder="E.g.: Brown Wallet" />
    </Form.Item>
    <Form.Item name="currentBalance" label="Current Balance">
      <InputNumber addonBefore="Rp" style={{ width: "100%" }} />
    </Form.Item>
    <Form.Item name="condition">
      <Checkbox>
        <Text>
          Add current balance as new income transaction to adjust total balance
        </Text>
      </Checkbox>
    </Form.Item>
    <Form.Item style={{ marginTop: "32px" }}>
      <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
        Save
      </Button>
    </Form.Item>
  </Form>;

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
        <ListForm formInstance={formInstance} />
      </Col>
    </Row>
  );
}
