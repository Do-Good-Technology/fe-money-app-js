import FormContext, { initialState } from "./FormContext";
import { Form } from "antd";

export default function FormContextProvider({ children }) {
  const [addTransactionForm] = Form.useForm();

  const resetAddTransactionForm = () => {
    addTransactionForm.resetFields();
  };

  return (
    <FormContext.Provider
      value={{ addTransactionForm, resetAddTransactionForm }}
    >
      {children}
    </FormContext.Provider>
  );
}
