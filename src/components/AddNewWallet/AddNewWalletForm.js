import {
  Row,
  Col,
  Typography,
  Image,
  Form,
  Input,
  InputNumber,
  Checkbox,
  Button
} from "antd";
import { Fragment } from "react";

import WalletIcon from "../../assets/icons/wallet.svg";

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

const IconForm = () =>
  <Fragment>
    <Row justify="center">
      <Col>
        <Image alt="" src={WalletIcon} width="120px" preview={false} />
      </Col>
    </Row>
    <Row justify="center" style={{ marginTop: "8px" }}>
      <Col>
        <Text type="secondary">Tap to Change Wallet Icon</Text>
      </Col>
    </Row>
  </Fragment>;

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
