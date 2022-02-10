import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  message,
  Row
} from "antd";
import moment from "moment";
import { useContext } from "react";
import ChooseWalletContext from "../../context/ChooseWalletContext";
import ChooseCategoryContext from "../../context/ChooseCategortyContext";
import MaSelectCategoryButton from "../global/MaSelectCategoryButton";
import MaSelectWalletButton from "../global/MaSelectWalletButton";
import FormContext from "../../context/FormContext";
import { maOnFetch } from "../../helpers/maOnFetch";
import GlobalContext from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";

//todo
//_ MaNavBar
//_ AddTransactionForm
//___ SelectWalletButton data={walletData}
//___ NominalForm
//___ ...
//___ SelectCategoryButton data={categoryData}
//___ ...
export default function AddTransactionForm() {
  const navigate = useNavigate();

  const { addTransactionForm } = useContext(FormContext);
  const { selectedWalletData, resetSelectedWalletData } = useContext(ChooseWalletContext);
  const { selectedCategory, resetSelectedCategory } = useContext(ChooseCategoryContext);
  const { isFetching, setIsFetching } = useContext(GlobalContext);
  const fetch = { isFetching, setIsFetching };

  const onFinish = async (value) => {
    console.log("value", value);
    console.log("selectedWalletData", selectedWalletData);
    console.log("selectedCategory", selectedCategory);

    const keyValue = {
      idWallet: selectedWalletData?.idWallet,
      nominalTransaction: value?.nominal,
      flowTransaction: selectedCategory?.type,
      categoryTransaction: selectedCategory?.id,
      noteTransaction: value?.note,
      dateTransaction: moment(value?.date).format("YYYY-MM-DD"),
      isReport: 1
    };
    console.log("keyValue", keyValue);

    const data = await maOnFetch(
      keyValue,
      "transaction/add-transaction",
      fetch,
      navigate
    );

    if (data?.status === "success") {
      message.success({
        content: "New Wallet Has Been Made",
        duration: 2
      });
      addTransactionForm.resetFields();
      resetSelectedWalletData();
      resetSelectedCategory();
      navigate("/");
    } else {
      message.warning({
        content: "Failed",
        duration: 2
      });
    }
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
