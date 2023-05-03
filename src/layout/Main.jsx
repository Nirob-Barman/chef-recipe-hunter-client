import React from 'react';
import Header from '../pages/SharedPages/Header/Header';
import Footer from '../pages/SharedPages/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import PopularFoods from '../pages/PopularFoods/PopularFoods';
import FeaturedChefSection from '../pages/FeaturedChefSection/FeaturedChefSection';

const Main = () => {
    return (
        <div>
            <Header />

            <Container>
                <Row>
                    {/* <Col lg={12}>
                        <Outlet />
                    </Col> */}
                    <Outlet />
                </Row>

                <Row className='text-center my-5'>
                    <Col lg={12}>
                        <PopularFoods />
                    </Col>
                    <Col className='my-5'
                        lg={12}>
                        <FeaturedChefSection />
                    </Col>
                </Row>
            </Container>

            {/* <Footer /> */}
        </div>
    );
};

export default Main;