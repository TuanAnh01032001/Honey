import { Layout } from "@/pages/shared/Layout";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(()=> import('@/pages/Home'));
const Product = lazy(()=> import('@/pages/Product'));
const About = lazy(()=> import('@/pages/About'));
const Contact = lazy(()=> import('@/pages/Contact'));
const Blog = lazy(()=> import('@/pages/Blog'));


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