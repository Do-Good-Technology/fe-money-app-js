import { Button, Col, DatePicker, Form, Input, InputNumber, Row } from "antd";
import { useContext } from "react";
import ChooseWalletContext from "../../context/ChooseWalletContext";
import ChooseCategoryContext from "../../context/ChooseCategortyContext";
import MaSelectCategoryButton from "../global/MaSelectCategoryButton";
import MaSelectWalletButton from "../global/MaSelectWalletButton";
import FormContext from "../../context/FormContext";

//todo
//_ MaNavBar
//_ AddTransactionForm
//___ SelectWalletButton data={walletData}
//___ NominalForm
//___ ...
//___ SelectCategoryButton data={categoryData}
//___ ...
export default function AddTransactionForm() {
  const { addTransactionForm } = useContext(FormContext);
  const { selectedWalletData } = useContext(ChooseWalletContext);
  const { selectedCategory } = useContext(ChooseCategoryContext);

  const onFinish = (value) => {
    console.log("value", value);
  };

  return (
    <Row style={{ marginTop: "16px" }}>
      <Col offset={1} span={22}>
        <Form form={addTransactionForm} onFinish={onFinish}>
          <Form.Item name="wallet" label="Wallet">
            <MaSelectWalletButton data={selectedWalletData} />
          </Form.Item>
          <Form.Item
            name="nominal"
            label="Nominal"
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
          <Form.Item
            name="date"
            label="Date"
            rules={[{ required: true, message: "Date must be filled" }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item name="category" label="Category">
            <MaSelectCategoryButton data={selectedCategory} />
          </Form.Item>
          <Form.Item name="note" label="Note (Optional)">
            <Input.TextArea
              placeholder="Put a note for transaction details"
              autoSize={{ minRows: 3, maxRows: 5 }}
            />
          </Form.Item>
          <Form.Item>
            <Button style={{ width: "100%" }} type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
