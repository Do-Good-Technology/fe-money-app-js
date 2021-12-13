import { Affix, Col, Layout, Row } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import React, { lazy, Suspense } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

import "./Routing.css";

const TabBar = lazy(() => import('./components/home/TabBar'));

const Transaction = lazy(() => import('./pages/home/transactions/Index'));
const Wallet = lazy(() => import('./pages/home/wallet/Index'));
const Account = lazy(() => import('./pages/home/account/Index'));

// const Home = lazy(() => import('./pages/home/Index'));
// const Coba = lazy(() => import('./pages/Coba'))

export default function Routing() {
    return (
        <Suspense fallback={<div>Loading... </div>}>
            <Router>
                <Routes>
                    <Route path="/" element={<Transaction />} />
                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="/account" element={<Account />} />
                </Routes>
                <Affix className='affix-button-submit'>
                    <TabBar />
                </Affix>
            </Router >
        </Suspense >
    );
}

{/* <div className='mp-routing'>
    <div className='app'>
        <div className='body'>
            <Routes>
                <Route path="/" element={<Transaction />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/account" element={<Account />} />
            </Routes>
        </div>
        <Affix offsetBottom={0}>
            <TabBar />
        </Affix>
        <div className='bottom'>

        </div>
    </div>
</div> */}