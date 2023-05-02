import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

function PopularFoods() {
    const popularFoods = [
        { title: "Pizza", image: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?size=626&ext=jpg&ga=GA1.1.272230184.1683002624&semt=sph", description: "The classic Italian dish that everyone loves." },
        { title: "Burgers", image: "https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?size=626&ext=jpg&ga=GA1.1.272230184.1683002624&semt=sph", description: "Juicy beef burgers, stacked with your favorite toppings." },
        { title: "Tacos", image: "https://img.freepik.com/free-photo/fresh-beef-taco-wooden-table-with-sauce-generative-ai_188544-8042.jpg?size=626&ext=jpg&ga=GA1.1.272230184.1683002624&semt=sph", description: "Spicy and flavorful Mexican tacos, perfect for any occasion." },
        { title: "Sushi", image: "https://img.freepik.com/free-photo/side-view-mix-sushi-rolls-tray-with-ginger-wasabi_141793-14242.jpg?size=626&ext=jpg&ga=GA1.1.272230184.1683002624&semt=sph", description: "Fresh and delicious Japanese sushi rolls, made to order." }
    ];

    return (
        <div>
            <h2 className='my-5'>Most Popular Foods</h2>
            <Row>
                {popularFoods.map((food, index) => (
                    <Col md={3} key={index}>
                        <Card style={{ width: '18rem', margin: '1rem' }}>
                            <Card.Img
                                variant="top"
                                src={food.image}
                                style={{ height: '12rem', objectFit: 'cover' }}
                            />
                            <Card.Body>
                                <Card.Title>{food.title}</Card.Title>
                                <Card.Text>{food.description}</Card.Text>
                                <Button variant="primary" href={`/${food.title}`}>View Recipe</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default PopularFoods;
