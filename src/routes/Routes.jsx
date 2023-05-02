import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Category from "../pages/Home/Category/Category";
import ChefSection from "../pages/ChefSection/ChefSection";

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
                path: '/category:id',
                element: <Category />
            }
        ]
    }
])
export default router;