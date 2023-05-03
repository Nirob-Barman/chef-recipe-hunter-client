import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import NavBar from '../SharedPages/NavBar/NavBar';
import Footer from '../SharedPages/Footer/Footer';

const Blog = () => {
    return (
        <Container>

            <NavBar />

            <Row className="justify-content-center my-5">
                <Col xs={12} md={8}>
                    <ListGroup>
                        <ListGroupItem variant="primary">
                            <h4>Tell us the differences between uncontrolled and controlled components.</h4>
                        </ListGroupItem>
                        <ListGroupItem>
                            <h3>Uncontrolled</h3>
                            <p>the component doesn't maintain the state of the input values.</p>
                            <h3>Controlled</h3>
                            <p>the component is responsible for updating the input values and handling input changes.</p>
                        </ListGroupItem>

                        <ListGroupItem variant="primary">
                            <h4>How to validate React props using PropTypes</h4>
                        </ListGroupItem>
                        <ListGroupItem>
                            <p>React PropTypes is a feature that allows you to validate the props passed to a component.</p>
                            <p>Here are the steps to validate React props using PropTypes:</p>
                            <li>First, import the PropTypes library</li>
                            <li>Define the propTypes for the component by creating a static propTypes object inside the component class.</li>
                            <li>Pass the props to the component in the usual way</li>
                        </ListGroupItem>

                        <ListGroupItem variant="primary">
                            <h4>Tell us the difference between nodejs and express js</h4>
                        </ListGroupItem>
                        <ListGroupItem>
                            <p>Node.js provides the foundation for building server-side applications, while Express.js provides a layer of abstraction on top of Node.js to simplify web application development.</p>
                        </ListGroupItem>
                        <ListGroupItem variant="primary">
                            <h4>What is a custom hook, and why will you create a custom hook?</h4>
                        </ListGroupItem>
                        <ListGroupItem>
                            <p>A custom hook is a JavaScript function that utilizes the built-in hooks</p>
                            <p>Here are some reasons why you might create a custom hook:</p>
                            <li>Encapsulate complex logic</li>
                            <li>Promote code reusability</li>
                            <li>Improve readability</li>
                            <li>Simplify testing</li>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>

            <Footer />
        </Container>
    );
};

export default Blog;