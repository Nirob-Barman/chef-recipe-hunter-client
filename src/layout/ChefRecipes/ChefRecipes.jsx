import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefBanner from '../../pages/Banner/ChefBanner';
import RecipeDetails from '../../pages/RecipeDetails/RecipeDetails';
import NavBar from '../../pages/SharedPages/NavBar/NavBar';
import Footer from '../../pages/SharedPages/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';

const ChefRecipes = () => {

    const { id } = useParams();
    const chef = useLoaderData();
    const chefData = chef[0];
    // console.log(chef[0]);
    const recipes = chef[0].recipesList;
    // console.log(recipes);

    return (
        <div>

            <Container>
                <NavBar />

                <ChefBanner
                    key={id}
                    chefData={chefData}
                >
                </ChefBanner>

                <Row>
                    {
                        // recipes.map((recipe,idx) => <p
                        //     key={idx}
                        // >{recipe.name}</p>)
                        recipes.map((recipe, idx) => <RecipeDetails
                            key={idx}
                            recipe={recipe}
                        ></RecipeDetails>)
                    }
                </Row>

                <Footer />
            </Container>

        </div>
    );
};

export default ChefRecipes;