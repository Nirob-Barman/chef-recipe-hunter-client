import React from 'react';
import { CardGroup, Card } from 'react-bootstrap';

function FeaturedChefSection() {
    return (
        <div className="featured-chef-section">
            <h2 className='mb-5'>Featured Chef</h2>
            <CardGroup>
                <Card style={{ width: '300px', height: '400px' }}>
                    <Card.Img
                        variant="top"
                        src="https://img.freepik.com/free-photo/woman-standing_1157-657.jpg?size=626&ext=jpg&ga=GA1.2.272230184.1683002624&semt=ais"
                        style={{ width: '100%', height: '60%' }}
                    />
                    <Card.Body style={{ height: '40%' }}>
                        <Card.Title>Rachael Ray</Card.Title>
                        <Card.Text>
                            Ray worked in various roles within the hospitality industry, including stints as a restaurant manager.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '300px', height: '400px' }}>
                    <Card.Img
                        variant="top"
                        src="https://www.rachaelrayshow.com/sites/default/files/styles/868x488/public/images/2023-03/17064_petite_pasta_1.jpg?h=d1cb525d&itok=7ZTmeEGY"
                        style={{ width: '100%', height: '60%' }}
                    />
                    <Card.Body style={{ height: '40%' }}>
                        <Card.Title>Creamy Caramelized Leek Pasta</Card.Title>
                        <Card.Text>
                            Summary of the recipe and why it's special or unique.
                        </Card.Text>
                        {/* <small className="text-muted">By Chef Name</small> */}
                    </Card.Body>
                </Card>
                <Card style={{ width: '300px', height: '400px' }}>
                    <Card.Img
                        variant="top"
                        src="https://www.rachaelrayshow.com/sites/default/files/styles/868x488/public/images/2023-03/buffalowing.jpg?h=d1cb525d&itok=pMNbx14j"
                        style={{ width: '100%', height: '60%' }}
                    />
                    <Card.Body style={{ height: '40%' }}>
                        <Card.Title>Air Fryer Chicken Wings with 3 Sauces</Card.Title>
                        <Card.Text>
                            Summary of the recipe and why it's special or unique.
                        </Card.Text>
                        {/* <small className="text-muted">By Chef Name</small> */}
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
}

export default FeaturedChefSection;
