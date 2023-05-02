import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser, FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav align-items-center">
                        <Nav>
                            <Link to="/">Website Name</Link>
                        </Nav>
                        <Nav className="mx-auto gap-5">
                            <Link to="/">Home</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/about">About</Link>
                        </Nav>
                        <Nav className='gap-2'>
                            {
                                user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            }

                            {user ?
                                <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                                <Link to="/login">
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavBar;