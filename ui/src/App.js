// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Outlet, BrowserRouter } from "react-router-dom";
import { ErrorLogin } from '../src/pages/ErrorLogin.js'
import { HomePage } from '../src/pages/HomePage.js'
import { SignInPage } from '../src/pages/SignInPage.js'
import { CreateAccountPage } from '../src/pages/CreateAccount.js'

export default function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/signInPage" element={<SignInPage />} />
                    <Route path="/createAccountPage" element={<CreateAccountPage />} />
                    {/* <Route path="*" element={<ErrorLogin />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}