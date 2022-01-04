import React from "react";

import GlobalContextProvider from "./context/GlobalContextProvider";
import IconWalletContextProvider from "./context/IconWalletContextProvider";

import Routing from "./Routing";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <GlobalContextProvider>
      <IconWalletContextProvider>
        <Routing />
      </IconWalletContextProvider>
    </GlobalContextProvider>
  );
}

export default App;
