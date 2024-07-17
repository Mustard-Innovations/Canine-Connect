// app/product-detailz/page.tsx

import React from 'react';
import ProductDetails from './productDetails';
import Navigation from '../Components/Parts/Navigation';
import Footer from '../Components/Parts/Footer';
import ShowCollection from '../Components/Parts/ShowCollection';

const ProductDetailsPage: React.FC = () => {
  return (
    <div>
      <Navigation />
      <div className='bg-white'>
        <ProductDetails  />
        <div className='mt-10'>
          <ShowCollection 
            title={'You Might Also Like'} 
            description={''} 
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
