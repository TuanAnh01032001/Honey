import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Product from "@/pages/Product";
import { Layout } from "@/pages/shared/Layout";


import { createBrowserRouter } from "react-router-dom";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {path: '/', element: <Home/>},
            {path: '/honey', element: <Product/>},
            {path: '/about', element: <About/>},
            {path: '/blog', element: <Blog/>},
            {path: '/contact', element: <Contact/>}
        ]
    }
]);

export default routes;