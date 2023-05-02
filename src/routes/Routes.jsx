import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Category from "../pages/Home/Category/Category";
import ChefSection from "../pages/ChefSection/ChefSection";
import ChefRecipes from "../layout/ChefRecipes/ChefRecipes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Main></Main>,
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
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            // {
            //     path: '/terms',
            //     element: <Terms />
            // }
        ]
    },
    {
        // path: '/',
        // element: <Main />,
        // children: [
        //     {
        //         path: '/',
        //         // element: <Home />
        //         element: <ChefSection />,
        //         loader: () => fetch('http://localhost:5000/chef')
        //     }
        // ]
    },
    {
        path: '/chef',
        element: <PrivateRoute>
            <ChefRecipes />
        </PrivateRoute>,
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