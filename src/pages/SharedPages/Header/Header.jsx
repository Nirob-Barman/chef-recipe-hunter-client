import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Container } from 'react-bootstrap';
import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <div>

            <Container className='mt-4'>
                <div className="text-center">
                    <img className='w-25' src={logo} alt="" />
                    <p className='text-secondary'><small>Welcome to our website</small></p>
                </div>

            </Container>

            <NavBar />

        </div>
    );
};

export default Header;