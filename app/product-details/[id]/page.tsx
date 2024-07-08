'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Navigation from '@/app/Components/Parts/Navigation';

interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const fetchProduct = async (id: string): Promise<Product | null> => {
  const products = [
    { id: 1, title: 'Product 1', description: 'Description of Product 1', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Product 2', description: 'Description of Product 2', imageUrl: 'https://via.placeholder.com/150' },
    // Add more products as needed
  ];

  const product = products.find((product) => product.id.toString() === id);
  return product || null;
};

const ProductDetails: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id'); // Get the id from query parameters

  useEffect(() => {
    const fetchAndSetProduct = async () => {
      if (id) {
        try {
          const productData = await fetchProduct(id);
          if (productData) {
            setProduct(productData);
          } else {
            setError('Product not found');
          }
        } catch (err) {
          setError('Failed to fetch product');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchAndSetProduct();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Navigation />
      <div className="container mx-auto p-5">
        <div className="flex flex-col md:flex-row items-center">
          <img src={product?.imageUrl} alt={product?.title} className="md:w-1/2 w-full" />
          <div className="md:w-1/2 w-full md:ml-5">
            <h1 className="text-3xl font-bold my-2">{product?.title}</h1>
            <p className="my-2">{product?.description}</p>
            <button className="btn btn-primary mt-5">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
