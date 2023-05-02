import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import bannerImage from '../../assets/banimage.avif';

const Banner = () => {
    return (
        <div className='img-fluid' style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', color: 'white', paddingTop: '5rem', paddingBottom: '5rem' }}>
            <Container>
                <Row>
                    <Col>
                        <h1>Discover Delicious Recipes</h1>
                        <p>
                            Looking for meal inspiration? Browse our collection of mouthwatering recipes, from appetizers to desserts.
                        </p>
                        <Button bg="light" variant="light" href="/recipes">View Recipes</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;