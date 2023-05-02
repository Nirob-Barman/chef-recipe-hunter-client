import React from 'react';
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const ChefBanner = ({ chefData }) => {

    // console.log(chefData);
    const { id, name, pictureUrl, experience, recipes, likes } = chefData;

    return (
        <Container className="bg-light py-5">
            <Row className="justify-content-center align-items-center">
                <Col md={4} className="text-center">
                    <Image
                        src={pictureUrl}
                        alt="Chef"
                        className="mb-3 w-50"
                    />
                    <h2 className="font-weight-bold mb-3">{name}</h2>
                    <p className="text-muted mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                        id enim eu elit gravida tempor.
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