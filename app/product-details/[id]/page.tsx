// app/product-details/[id]/page.tsx

import React from 'react';
import { notFound } from 'next/navigation';
import ProductDetails from './ProductDetails';

interface CollectionItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const fetchItemDetails = async (id: number): Promise<CollectionItem | null> => {
  // Replace this with your actual fetch logic
  const items: CollectionItem[] = [
    { id: 1, title: 'Item 1', description: 'Description 1', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Item 2', description: 'Description 2', imageUrl: 'https://via.placeholder.com/150' },
    // Add more items as needed
  ];

  return items.find(item => item.id === id) || null;
};

const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
  const item = await fetchItemDetails(Number(params.id));

  if (!item) {
    notFound();
  }

  return (
    <div>
      <ProductDetails item={item} />
    </div>
  );
};

export default ProductDetailsPage;
