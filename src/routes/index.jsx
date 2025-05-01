import { createBrowserRouter } from "react-router-dom";
import {Category, Home, Item} from '../pages';
import { MainLayout } from "../layout";

//Se configuran las rutas solicitadas en la segunda pre-entrega
const routes = [
    {
        path:"/",
        element: <MainLayout />,  
        children:[
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/category/:categoryId",
                element: <Category />
            },
            {
                path: "/item/:itemId",
                element: <Item />
            }
        ]
    }
];

export const router = createBrowserRouter(routes);