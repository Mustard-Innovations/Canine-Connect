import React from 'react';
import { Metadata } from 'next';
import Navigation from '@/app/Components/Parts/Navigation';

interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface ProductDetailsProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const products = [
    { id: 1, title: 'Product 1', description: 'Description of Product 1', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Product 2', description: 'Description of Product 2', imageUrl: 'https://via.placeholder.com/150' },
    // Add more products as needed
  ];

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({ params }: ProductDetailsProps): Promise<Metadata> {
  const products = [
    { id: 1, title: 'Product 1', description: 'Description of Product 1', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Product 2', description: 'Description of Product 2', imageUrl: 'https://via.placeholder.com/150' },
    // Add more products as needed
  ];

  const product = products.find((product) => product.id.toString() === params.id);

  if (!product) {
    return {
      title: 'Product not found',
    };
  }

  return {
    title: product.title,
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ params }) => {
  const products = [
    { id: 1, title: 'Product 1', description: 'Description of Product 1', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Product 2', description: 'Description of Product 2', imageUrl: 'https://via.placeholder.com/150' },
    // Add more products as needed
  ];

  const product = products.find((product) => product.id.toString() === params.id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <Navigation />
      <div className="container mx-auto p-5">
        <div className="flex flex-col md:flex-row items-center">
          <img src={product.imageUrl} alt={product.title} className="md:w-1/2 w-full" />
          <div className="md:w-1/2 w-full md:ml-5">
            <h1 className="text-3xl font-bold my-2">{product.title}</h1>
            <p className="my-2">{product.description}</p>
            <button className="btn btn-primary mt-5">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
