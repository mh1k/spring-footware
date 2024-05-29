import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Roots";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/Error/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProductDetails from "../components/products/ProductDetails";
import AllProducts from "../pages/Dashboard/AllProducts";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:3000/shoes"),
            },
            {
                path: "/products/:id",
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) =>
                    fetch(`http://localhost:3000/shoes/${params.id}`),
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]
    },
    {
        path: '/dashboard',
        element: (<PrivateRoutes>
            <DashboardLayout></DashboardLayout>
        </PrivateRoutes>),
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
            },
            {
                path: "/dashboard/products",
                element: <AllProducts></AllProducts>,
            },
        ]
    }
]);

export default router;