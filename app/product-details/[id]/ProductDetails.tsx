// app/product-details/[id]/ProductDetails.tsx

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeftCircleIcon, StarIcon } from '@heroicons/react/24/outline';

interface CollectionItem {
  price: number;
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  rating: number;
  numberOfReviews: number;
}

interface ProductDetailProps {
  item: CollectionItem;
}

const ProductDetails: React.FC<ProductDetailProps> = ({ item }) => {
  const router = useRouter();

  return (
    <div className="p-8 md:mx-10">
      <button onClick={() => router.back()} className="mb-4 p-2 bg-gray-300 rounded flex items-center">
        <ArrowLeftCircleIcon className='w-6 h-6 mr-2' />
        Back
      </button>
      <div className="md:flex text-black">
        <img src={item.imageUrl} alt={item.title} className="max-w-full md:w-2/3 h-auto" />
        <div className='md:px-5 md:mx-5'>
          <p className="text-2xl font-bold m-4">{item.description}</p>
          <div className='flex justify-between mx-4'>
            <p className="mr-2">Casual wear</p>
            <div className='flex'>
              <StarIcon className='w-4 h-4 m-1' />
              <p className='font-bold mr-2'>{item.rating ?? 0}</p>
              <p>({item.numberOfReviews ?? 'N/A'} Reviews)</p>
            </div>
          </div>
          <p className='mx-4 font-bold text-2xl'>${item.price ?? 'N/A'}</p>
          <hr className='bordered my-5 w-full' />
          <div>
            <div className='flex justify-between mx-4'>
              <p className='font-semibold'>Select Size</p>
              <p>Size Guide</p>
            </div>
            <div>

            </div>
          </div>
          <div className='text-center m-4'>
            <button className='w-full p-2 m-1 border text-white bg-black'>ADD TO BAG</button>
            <button className='w-full p-2 m-1 border'>FAVOURITE</button>
          </div>
        </div>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
};

export default ProductDetails;
