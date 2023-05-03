import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    // console.log('register page location', location)

    const from = location.state?.from?.pathname || '/';
    // console.log(from);

    const handleRegister = event => {
        event.preventDefault();
        setError();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        // console.log(name, photo, email, password)


        //validation

        if (password.length < 6) {
            setError('Please add at least 6 characters in your password');
            return;
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                
                setError('');
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleAccepted = event => {
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.checked);
        setAccepted(event.target.checked)
    }

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col lg={6}>
                    <h3>Please Register</h3>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='name' placeholder="Your Name" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                onClick={handleAccepted}
                                type="checkbox"
                                name="accept"
                                // label="Accept Terms and Conditions"
                                label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>}
                            />
                        </Form.Group>
                        <p className='text-danger'>{error}</p>
                        <Button variant="primary" disabled={!accepted} type="submit">
                            Register
                        </Button>
                        <br />
                        <Form.Text className="text-secondary">
                            Already Have an Account? <Link to="/login">Login</Link>
                        </Form.Text>
                    </Form>
                </Col>
            </Row>

        </Container>
    );
};

export default Register;