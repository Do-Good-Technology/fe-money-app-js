import React from 'react';

import GlobalContextProvider from './context/GlobalContextProvider';

import Routing from './Routing';
import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <GlobalContextProvider>
      <Routing />
    </GlobalContextProvider>
  );
}

export default App;
