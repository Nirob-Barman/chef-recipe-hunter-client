import React from 'react';
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import LazyLoad from 'react-lazyload';

const ChefBanner = ({ chefData }) => {

    // console.log(chefData);
    const { id, name, bio, pictureUrl, experience, recipes, likes } = chefData;
    console.log(bio);

    return (
        <Container className="bg-light py-5">
            <Row className="justify-content-center align-items-center">
                <Col md={4} className="text-center">

                    <LazyLoad height={5000}>
                        <Image
                            src={pictureUrl}
                            alt="Chef"
                            className="mb-3 w-50"
                        />
                    </LazyLoad>

                    

                    <h2 className="font-weight-bold mb-3">{name}</h2>
                    <p className="text-muted mb-3">
                        {bio}
                    </p>
                    <p className="text-muted mb-3">
                        <span className="font-weight-bold mr-2">Likes:</span> {likes}
                    </p>
                    <p className="text-muted mb-3">
                        <span className="font-weight-bold mr-2">Recipes:</span> {recipes}
                    </p>
                    <p className="text-muted mb-3">
                        <span className="font-weight-bold mr-2">Years of Experience:</span>{" "}
                        {experience}
                    </p>
                    {/* <Button variant="primary" size="lg">
                                View Recipes
                            </Button> */}
                </Col>
            </Row>
        </Container>
    );
};

export default ChefBanner;