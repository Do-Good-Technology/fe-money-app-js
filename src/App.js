import React from "react";

import ContextProvider from "./context/Index";
import Routing from "./Routing";

import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <ContextProvider>
      <Routing />
    </ContextProvider>
  );
}

export default App;
