import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  message,
  Radio,
  Row,
  Typography
} from "antd";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";
import IconWalletContext from "../../context/IconWalletContext";
import { onFetch } from "../../helpers/onFetch";
import IconForm from "./IconForm";

const { Text } = Typography;

const listWalletType = [
  {
    label: "Pysical Wallet",
    value: "physical_wallet",
    description: "E.g: Wallet in Your Pocket"
  },
  {
    label: "Card Money",
    value: "card_money",
    description: "E.g: E-money, E-toll"
  },
  { label: "Bank", value: "bank", description: "E.g: BCA, Mandiri, BRI" },
  {
    label: "E-Wallet",
    value: "e_wallet",
    description: "E.g: Gopay, Ovo, Dana"
  },
  {
    label: "Investment",
    value: "investment",
    description: "E.g: Reksadana, Stock"
  },
  { label: "Other", value: "other", description: "Other Wallet" }
];

const ListForm = () => {
  const navigate = useNavigate();
  const [formInstance] = Form.useForm();
  const { type } = useContext(IconWalletContext);
  const { isFetching, setIsFetching } = useContext(GlobalContext);
  const fetch = { isFetching, setIsFetching };
  const [descriptionWalletType, setDescriptionWalletType] = useState("");

  const onChangeWalletType = (e) => {
    let selected = "";
    selected = listWalletType.filter((item) => item.value === e.target.value);
    setDescriptionWalletType(selected[0].description);
  };

  const onFinish = async (values) => {
    const auth = localStorage.getItem("auth");
    const keyValue = {
      auth: auth,
      iconType: type,
      walletName: values.walletName,
      walletType: values.walletType,
      currentBalance: values.currentBalance,
      isReport: values.isReport ? 1 : 0
    };

    const link = "/add-new-wallet";
    const data = await onFetch(keyValue, link, fetch);

    if (data?.status === "success") {
      message.success({
        content: "New Wallet Has Been Made",
        duration: 2
      });
      navigate("/wallet");
    }
    if (data?.status === "failed") {
      message.warning({
        content: "Failed",
        duration: 2
      });
    }
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
        label={`Wallet Type ${
          descriptionWalletType && `( ${descriptionWalletType} )`
        } `}
        name="walletType"
        rules={[{ required: true }]}
      >
        <Radio.Group
          options={listWalletType}
          optionType="button"
          buttonStyle="solid"
          onChange={onChangeWalletType}
        />
      </Form.Item>

      <Form.Item
        name="currentBalance"
        label="Current Balance"
        rules={[
          {
            required: true,
            message: "A value must be entered",
            pattern: new RegExp(/^[0-9]+$/)
          }
        ]}
      >
        <InputNumber
          addonBefore="Rp"
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          style={{ width: "100%" }}
        />
      </Form.Item>

      <Form.Item name="isReport" valuePropName="checked" initialValue={false}>
        <Checkbox>
          <>
            <Text strong>Exclude from Report</Text>
            <br />
            <Text>
              (Default: Off) Don't include this current balance in report such
              as overview
            </Text>
          </>
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
