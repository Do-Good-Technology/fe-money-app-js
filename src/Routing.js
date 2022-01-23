import { Skeleton, Spin } from "antd";
import React, { lazy, Suspense, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CheckAuth from "./components/auth/CheckAuth";
import GlobalContext from "./context/GlobalContext";
import "./Routing.css";

const TabBar = lazy(() => import("./components/home/TabBar"));

const Transaction = lazy(() => import("./pages/home/transactions/Index"));
const Wallet = lazy(() => import("./pages/home/wallet/Index"));
const Account = lazy(() => import("./pages/home/account/Index"));

const AddNewWallet = lazy(() => import("./pages/AddNewWallet/AddNewWallet"));
const AddTransaction = lazy(() => import("./pages/AddTransaction/Index"));

const ChooseWalletIcon = lazy(() => import("./pages/ChooseWalletIcon/Index"));
const ChooseWallet = lazy(() => import("./pages/ChooseWallet/Index"));

const Register = lazy(() => import("./pages/auth/register/Index"));
const Login = lazy(() => import("./pages/auth/login/Index"));

export default function Routing() {
  const { isFetching } = useContext(GlobalContext);

  return (
    <Suspense fallback={<Skeleton />}>
      <Router>
        <CheckAuth />
        <Spin spinning={isFetching}>
          <div style={{ height: "100vh" }}>
            <div className="app mp-routing">
              <Routes>
                <Route path="/" element={<Transaction />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/account" element={<Account />} />

                <Route path="/add-new-wallet" element={<AddNewWallet />} />
                <Route path="/add-transaction" element={<AddTransaction />} />

                <Route
                  path="/choose-wallet-icon"
                  element={<ChooseWalletIcon />}
                />
                <Route path="/choose-wallet" element={<ChooseWallet />} />

                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Routes>
              <div className="affix-button-submit">
                <TabBar />
              </div>
            </div>
          </div>
        </Spin>
      </Router>
    </Suspense>
  );
}
