import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Category from '../Home/Category/Category';

const ChefSection = () => {

    // const [categories, setCategories] = useState([]);

    // useEffect(() => {
    //     fetch('https://chef-recipe-hunting-server-rsnirob.vercel.app/categories')
    //         .then(res => res.json())
    //         // .then(data => console.log(data))
    //         .then(data => setCategories(data))
    //         .catch(error => console.error(error))
    // }, [])

    const categories = useLoaderData();

    return (
        <div>
            <Container className="mt-5">
                <h2 className="text-center mb-4">Meet Our Chefs</h2>
                <Row>
                    {categories.map((chef) => (
                        <Col xs={12} md={6} lg={4} key={chef.id}>
                            <Card className="mb-4">
                                <Card.Img
                                    style={{ height: '12rem', objectFit: 'cover' }}
                                    variant="top" src={chef.pictureUrl} />
                                <Card.Body>
                                    <Card.Title>{chef.name}</Card.Title>
                                    <Card.Text>Years of Experience: {chef.experience}</Card.Text>
                                    <Card.Text>Number of Recipes: {chef.recipes}</Card.Text>
                                    <Card.Text>Likes: {chef.likes}</Card.Text>
                                    <Link to={`/chef/${chef.id}`}><Button variant="primary">View Recipes</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ChefSection;