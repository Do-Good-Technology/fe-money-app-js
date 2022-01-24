import { createContext } from "react";

export const initialState = {
  addTransactionForm: null,
  resetAddTransactionForm: null
};

const FormContext = createContext(initialState);

export default FormContext;
