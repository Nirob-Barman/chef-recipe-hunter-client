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
                                    src="data:image/png;base64,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"
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