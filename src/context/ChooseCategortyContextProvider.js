import { useState } from "react";
import ChooseCategortyContext, { initialState } from "./ChooseCategortyContext";

export default function ChooseCategortyContextProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState(
    initialState.selectedCategory
  );

  const resetSelectedCategory = () => {
    setSelectedCategory(initialState.selectedCat);
  };

  return (
    <ChooseCategortyContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        resetSelectedCategory
      }}
    >
      {children}
    </ChooseCategortyContext.Provider>
  );
}
