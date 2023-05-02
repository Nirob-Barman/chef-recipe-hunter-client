import React from 'react';
import NavBar from '../pages/SharedPages/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default LoginLayout;