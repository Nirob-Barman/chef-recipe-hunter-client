import React from 'react';
import Header from '../pages/SharedPages/Header/Header';
import Footer from '../pages/SharedPages/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftNav from '../pages/LeftNav/LeftNav';

const Main = () => {
    return (
        <div>
            <Header />

            <Container>
                <Row>
                    <Col
                        lg={4}>
                        <LeftNav />
                    </Col>
                    <Col lg={8}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    );
};

export default Main;