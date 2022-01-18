import { Row, Col, Form, Input, InputNumber, DatePicker, Button } from "antd";

//todo
//_ MaNavBar
//_ AddTransactionForm
//___ SelectWalletButton data={walletData}
//___ NominalForm
//___ ...
//___ SelectCategoryButton
//___ ...
export default function AddTransactionForm() {
  return (
    <Row style={{ marginTop: "16px" }}>
      <Col offset={1} span={22}>
        <Form>
          <Form.Item
            name="wallet"
            label="Wallet"
            rules={[{ required: true, message: "hey" }]}
          >
            SelectWalletButton
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
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: "hey" }]}
          >
            SelectCategoryButton
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
