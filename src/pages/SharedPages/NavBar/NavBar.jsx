import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
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
                            <Link
                                title='Delicious'
                                to="/">
                                <Image
                                className=''
                                    src="https://w7.pngwing.com/pngs/791/461/png-transparent-seed-bank-seed-company-hemp-benih-others-text-wedding-logo.png"
                                    style={{ width: "100%", height: "40px", objectFit: "cover" }}
                                    alt="Delicious"  />
                            </Link>
                        </Nav>
                        <Nav className="mx-auto gap-5">
                            <Link to="/">Home</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/about">About</Link>
                        </Nav>
                        <Nav className='gap-2'>
                            {
                                user && <FaUser style={{ fontSize: '2rem' }}></FaUser>
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