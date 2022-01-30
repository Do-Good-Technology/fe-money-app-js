import { createContext } from "react";

export const initialState = {
  selectedCategory: {
    id: "",
    name: "",
    icon: null,
    type: "",
  },
  setSelectedCategory: null
};

const ChooseCategortyContext = createContext(initialState);

export default ChooseCategortyContext;
