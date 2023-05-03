import React from 'react';
import NavBar from '../pages/SharedPages/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/SharedPages/Footer/Footer';

const LoginLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default LoginLayout;