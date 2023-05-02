import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Category from "../pages/Home/Category/Category";
import ChefSection from "../pages/ChefSection/ChefSection";
import ChefRecipes from "../layout/ChefRecipes/ChefRecipes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                // element: <Home />
                element: <ChefSection />,
                loader: () => fetch('http://localhost:5000/categories')

            },
            {
                path: '/chef:id',
                element: <ChefRecipes />,
                // loader: ({ params }) => fetch(`https://the-news-server-rsnirob.vercel.app/categories/${params.id}`)
            }
        ]
    }
])
export default router;