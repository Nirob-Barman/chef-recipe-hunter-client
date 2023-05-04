import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ChefSection from "../pages/ChefSection/ChefSection";
import ChefRecipes from "../layout/ChefRecipes/ChefRecipes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Main></Main>,
                children: [
                    {
                        path: '/',
                        // element: <Home />
                        element: <ChefSection />,
                        loader: () => fetch('https://chef-recipe-hunting-server-rsnirob.vercel.app/chef')
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
        //         loader: () => fetch('https://chef-recipe-hunting-server-rsnirob.vercel.app/chef')
        //     }
        // ]
    },
    {
        path: '/chef',
        element: <PrivateRoute>
            <ChefRecipes />
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://chef-recipe-hunting-server-rsnirob.vercel.app/chef/${params.id}`),
        children: [
            {
                path: ':id',
                element: <ChefDetails />,

            }
        ]
    },
    {
        path: '/blog',
        element: <Blog />
    }
])
export default router;