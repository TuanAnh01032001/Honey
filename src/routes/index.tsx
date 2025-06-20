import { Layout } from "@/pages/shared/Layout";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(()=> import('@/pages/Home'));
const Product = lazy(()=> import('@/pages/Product'));
const About = lazy(()=> import('@/pages/About'));
const Contact = lazy(()=> import('@/pages/Contact'));
const Blog = lazy(()=> import('@/pages/Blog'));
const BlogDetail = lazy(()=> import('@/components/Blog/blogDetail'));


const routes = createBrowserRouter([
    { 
        path: '/',
        element: <Layout/>,
        children: [
            {path: '/', element: <Home/>},
            {path: '/honey', element: <Product/>},
            {path: '/about', element: <About/>},
            {path: '/blog', element: <Blog/>},
            {path: '/blog/:id', element: <BlogDetail/>},
            {path: '/contact', element: <Contact/>}
        ]
    }
]);

export default routes;