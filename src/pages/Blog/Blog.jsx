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
                            <h4>Question 1</h4>
                        </ListGroupItem>
                        <ListGroupItem>
                            <p>Answer 1</p>
                        </ListGroupItem>

                        <ListGroupItem variant="primary">
                            <h4>Question 2</h4>
                        </ListGroupItem>
                        <ListGroupItem>
                            <p>Answer 2</p>
                        </ListGroupItem>

                        <ListGroupItem variant="primary">
                            <h4>Question 3</h4>
                        </ListGroupItem>
                        <ListGroupItem>
                            <p>Answer 3</p>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>

            <Footer />
        </Container>
    );
};

export default Blog;