// app/product-details/[id]/ProductDetails.tsx

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';

interface CollectionItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface ProductDetailProps {
  item: CollectionItem;
}

const ProductDetails: React.FC<ProductDetailProps> = ({ item }) => {
  const router = useRouter();

  return (
    <div className="p-8">
      <button onClick={() => router.back()} className="mb-4 p-2 bg-gray-300 rounded flex items-center">
        <ArrowLeftCircleIcon className='w-6 h-6 mr-2' />
        Back
      </button>
      <div className="flex flex-col items-center">
        <img src={item.imageUrl} alt={item.title} className="max-w-full h-auto" />
        <h1 className="text-2xl font-bold my-4">{item.title}</h1>
        <p className="mb-4">{item.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
