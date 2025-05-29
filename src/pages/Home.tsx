
import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { SEO } from '@/components/SEO';
import ProductList from '@/components/Home/productlist';

const Home = () => {

  return (
    <>
      <div className='flex-center'>
          <h1>hello home</h1>
          <ProductList/>
      </div>
      
    </>
  );
};

export default Home;
