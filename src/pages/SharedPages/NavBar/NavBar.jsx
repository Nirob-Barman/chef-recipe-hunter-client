import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser, FaUserCircle } from 'react-icons/fa';

const NavBar = () => {
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav align-items-center">
                        <Nav>
                            <Link>Website Name</Link>
                        </Nav>
                        <Nav className="mx-auto gap-5">
                            <Link to="/category/0">Home</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/about">About</Link>
                        </Nav>
                        <Nav className='gap-2'>
                            {/* {
                                user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            } */}
                            {
                                <FaUser style={{ fontSize: '2rem' }}></FaUser>
                            }

                            {/* {user ?
                                <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                                <Link to="/login">
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            } */}
                            {
                                <Button variant="secondary">Logout</Button>
                                // :
                                // <Link to="/login">
                                //     <Button variant="secondary">Login</Button>
                                // </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavBar;