import { useState } from "react";
import ChooseCategortyContext, { initialState } from "./ChooseCategortyContext";

export default function ChooseCategortyContextProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState(
    initialState.selectedCategory
  );

  return (
    <ChooseCategortyContext.Provider
      value={{ selectedCategory, setSelectedCategory }}
    >
      {children}
    </ChooseCategortyContext.Provider>
  );
}
