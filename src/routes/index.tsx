import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "@/pages/Home/Home";
import Products from "@/pages/Products/Products";
import ProductsManagement from "@/pages/ProductsManagement/ProductsManagement";
import About from "@/pages/About/About";
import ProductDetails from "@/pages/Products/ProductDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "products/:id",
                element: <ProductDetails />,
            },
            {
                path: "products-management",
                element: <ProductsManagement />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "wishlist",
                element: <div>THis is wishlist</div>,
            },
            {
                path: "cart",
                element: <div>THis is cart</div>,
            },
        ],
    },
    
]);

export default router;
