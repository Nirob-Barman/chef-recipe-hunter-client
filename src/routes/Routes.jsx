import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Category from "../pages/Home/Category/Category";
import ChefSection from "../pages/ChefSection/ChefSection";
import ChefRecipes from "../layout/ChefRecipes/ChefRecipes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ChefDetails from "../pages/ChefDetails/ChefDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                // element: <Home />
                element: <ChefSection />,
                loader: () => fetch('http://localhost:5000/chef')
            }

        ]
    },
    {
        path: '/chef',
        element: <ChefRecipes />,
        loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`),
        children: [
            {
                path: ':id',
                element: <ChefDetails />,
                
            }
        ]
    }
])
export default router;