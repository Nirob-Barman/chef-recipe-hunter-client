import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefBanner from '../../pages/Banner/ChefBanner';
import RecipeDetails from '../../pages/RecipeDetails/RecipeDetails';
import NavBar from '../../pages/SharedPages/NavBar/NavBar';

const ChefRecipes = () => {

    const { id } = useParams();
    const chef = useLoaderData();
    const chefData = chef[0];
    console.log(chef[0]);
    const recipes = chef[0].recipesList;
    // console.log(recipes);

    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <ChefBanner
                    key={id}
                    chefData={chefData}
                >
                </ChefBanner>
            </div>

            <div>
                {
                    // recipes.map((recipe,idx) => <p
                    //     key={idx}
                    // >{recipe.name}</p>)
                    recipes.map((recipe, idx) => <RecipeDetails
                        key={idx}
                        recipe={recipe}
                    ></RecipeDetails>)
                }
            </div>
        </div>
    );
};

export default ChefRecipes;