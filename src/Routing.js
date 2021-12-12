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

const Home = lazy(() => import('./pages/home/Index'));

const Coba = lazy(() => import('./pages/Coba'))

export default function Routing() {
    return (
        <Suspense fallback={<div>Loading... </div>}>
            <Router>
                <div className='mp-routing'>
                    <div className='app'>
                        <div className='body'>
                            <Routes>
                                <Route path="/home/transactions" element={<Transaction />} />
                                <Route path="/home/wallet" element={<Wallet />} />

                                <Route path='/' element={<Home />} />
                                <Route path='/coba' element={<Coba />} />
                            </Routes>
                        </div>
                        <div className='bottom'>
                            <TabBar />
                        </div>
                    </div>
                </div>
            </Router>
        </Suspense>
    );
}