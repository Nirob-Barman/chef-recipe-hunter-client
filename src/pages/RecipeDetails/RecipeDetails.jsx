import React, { useState } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';

const RecipeDetails = ({ recipe }) => {
    const notify = () => toast('Favorite Item');
    const [disabled, setDisabled] = useState(false);

    const handleClick = () => {
        setDisabled(true);
        notify();
        // Do other things you want to do when the button is clicked
    };

    const { name, recipeName, cookingMethod, image, description, rating, ingredients } = recipe;

    return (
        <Container>
            <Card>
                <Card.Img
                    roundedCircle
                    className="mb-3 w-25 mx-auto"
                    variant="top" src={image} />

                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <h5>Ingredients:</h5>
                        <ul>
                            {ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
                        </ul>
                        <h5>Cooking Method:
                            {cookingMethod}</h5>

                        <h5>Rating: {rating}</h5>
                    </Card.Text>
                    <div className='text-center'>
                        <Button onClick={handleClick}
                            disabled={disabled}
                            variant="primary">Favorite</Button>
                        <Toaster />
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default RecipeDetails;