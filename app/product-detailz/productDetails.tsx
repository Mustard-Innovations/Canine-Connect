// app/product-detailz/ProductDetails.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const apiKey = "3aHkxAeszwU6Y7rCyFXHWknFOpU6zcqymSnG-x8NJEk";

interface ImageDetails {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  description: string;
  user: {
    name: string;
    portfolio_url: string;
  };
}

const fetchImageDetails = async (id: string): Promise<ImageDetails | null> => {
  const res = await fetch(`https://api.unsplash.com/photos/${id}?client_id=${apiKey}`);
  if (!res.ok) {
    return null;
  }
  const image = await res.json();
  return image;
};

const ProductDetails: React.FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [image, setImage] = useState<ImageDetails | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (id) {
      fetchImageDetails(id).then((image) => {
        if (image) {
          setImage(image);
        } else {
          router.push('/404'); // Navigate to a 404 page if not found
        }
      });
    }
  }, [id, router]);

  if (!image) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <button onClick={() => router.back()} className="mb-4 p-2 bg-gray-300 rounded">Back</button>
      <div className="flex flex-col items-center">
        <img src={image.urls.regular} alt={image.alt_description} className="max-w-full h-auto" />
        <h1 className="text-2xl font-bold my-4">{image.alt_description}</h1>
        <p className="mb-4">{image.description}</p>
        <p className="text-lg">Photo by <a href={image.user.portfolio_url} className="text-blue-500" target="_blank" rel="noopener noreferrer">{image.user.name}</a></p>
      </div>
    </div>
  );
};

export default ProductDetails;
