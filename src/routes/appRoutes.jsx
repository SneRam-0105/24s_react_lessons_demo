import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import About from "../pages/About";
import List from "../pages/List";
import ErrorPage from "../pages/error";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <List /> },
            { path: '/about', element: <About /> },
        ]
    },

]);


