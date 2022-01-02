import React, { lazy, Suspense } from "react";
import { Skeleton } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./Routing.css";

const TabBar = lazy(() => import("./components/home/TabBar"));

const Transaction = lazy(() => import("./pages/home/transactions/Index"));
const Wallet = lazy(() => import("./pages/home/wallet/Index"));
const Account = lazy(() => import("./pages/home/account/Index"));

const AddNewWallet = lazy(() => import("./pages/AddNewWallet/AddNewWallet"));

const Register = lazy(() => import("./pages/auth/register/Index"));
const Login = lazy(() => import("./pages/auth/login/Index"));

export default function Routing() {
  return (
    <Suspense fallback={<Skeleton />}>
      <Router>
        <div className="app mp-routing">
          <Routes>
            <Route path="/" element={<Transaction />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/account" element={<Account />} />

            <Route path="/add-new-wallet" element={<AddNewWallet />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <div className="affix-button-submit">
            <TabBar />
          </div>
        </div>
      </Router>
    </Suspense>
  );
}
