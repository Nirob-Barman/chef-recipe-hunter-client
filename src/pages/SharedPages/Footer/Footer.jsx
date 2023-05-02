import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const Footer = () => {
    return (
        <footer className="mt-5">
            <Container>
                <Row>
                    <Col md={4} className="mb-3 mb-md-0">
                        <h5>About Us</h5>
                        <p>At XYZ Food Recipes, we believe that cooking is an art form that should be accessible to everyone. Our mission is to provide a platform for food lovers of all skill levels to discover and share delicious and healthy recipes.
                            Thank you for visiting our website, and happy cooking!</p>
                    </Col>
                    <Col md={4} className="mb-3 mb-md-0">
                        <h5>Contact Us</h5>
                        <p>Email: contact@recipewebsite.com<br />Phone: +1 (123) 456-7890</p>
                    </Col>
                    <Col md={4}>
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled">
                            <li><a href="#facebook"><i className="fab fa-facebook fa-lg mr-3"></i>Facebook</a></li>
                            <li><a href="#twitter"><i className="fab fa-twitter fa-lg mr-3"></i>Twitter</a></li>
                            <li><a href="#instagram"><i className="fab fa-instagram fa-lg mr-3"></i>Instagram</a></li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col className="text-center">
                        <p>&copy; 2023 Recipe Website</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;