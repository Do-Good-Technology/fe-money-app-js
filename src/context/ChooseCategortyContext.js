import { createContext } from "react";

export const initialState = {
  selectedCategory: {
    id: "",
    name: "",
    icon: null,
    type: "",
  },
  setSelectedCategory: null,
  resetSelectedCategory: null,
};

const ChooseCategortyContext = createContext(initialState);

export default ChooseCategortyContext;
