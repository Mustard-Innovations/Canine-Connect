// app/product-details/[id]/page.tsx

import React from 'react';
import { notFound } from 'next/navigation';
import ProductDetails from './ProductDetails';
import Navigation from '@/app/Components/Parts/Navigation';
import ShowCollection from '@/app/Components/Parts/ShowCollection';
import { fetchItemDetails, fetchUnsplashData } from '@/app/utils/fetchUnsplashData';
import Footer from '@/app/Components/Parts/Footer';

interface CollectionItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  rating: number;
  numberOfReviews: number;
  price: number;
}

const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
  const item: CollectionItem | null = await fetchItemDetails(params.id);

  if (!item) {
    notFound();
  }

  const relatedItems = await fetchUnsplashData('clothing items', 5);

  return (
    <div>
      <Navigation />
      <div className='bg-white'>
        <ProductDetails item={item} />
        <div className='mt-10'>
          <ShowCollection 
            title={'You Might Also Like'} 
            description={''} 
            // items={relatedItems}  // Assuming ShowCollection expects an items prop
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
