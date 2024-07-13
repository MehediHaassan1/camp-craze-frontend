import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "@/pages/Home/Home";
import Products from "@/pages/Products/Products";
import ProductsManagement from "@/pages/ProductsManagement/ProductsManagement";
import About from "@/pages/About/About";
import ProductDetails from "@/pages/Products/ProductDetails";
import Cart from "@/pages/Cart/Cart";
import CheckOut from "@/pages/Cart/CheckOut";
import OrderComplete from "@/pages/Products/OrderComplete";

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
                element: <Cart />,
            },
            {
                path: "checkout",
                element: <CheckOut />,
            },
            {
                path: "order-complete",
                element: <OrderComplete />,
            },
        ],
    },
]);

export default router;
