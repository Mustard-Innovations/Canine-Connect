// app/components/ShowCollection.tsx

'use client';

import React, { useEffect, useState } from 'react';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, HeartIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { fetchUnsplashData } from '@/app/utils/fetchUnsplashData';

interface CollectionItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface ShowCollectionProps {
  title: string;
  description: string;
}

const ShowCollection: React.FC<ShowCollectionProps> = ({ title, description }) => {
  const [items, setItems] = useState<CollectionItem[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await fetchUnsplashData('clothing items', 5);
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className='md:flex mx-4 p-5'>
      <div className='text-black my-3 md:w-48'>
        <h1 className='text-4xl my-2 font-bold'>{title}</h1>
        <p>{description}</p>
        <div className='flex'>
          <ArrowLeftCircleIcon className='w-6 h-6 m-2' />
          <ArrowRightCircleIcon className='w-6 h-6 m-2' />
        </div>
      </div>
      <div className='flex flex-wrap'>
        {items.map(item => (
          <Link key={item.id} href={`/product-details/${item.id}`} passHref>
            <div className="my-4 card card-compact bg-base-100 md:w-48 md:m-3 shadow-xl">
              <HeartIcon className='w-5 h-5 m-5' />
              <figure className=''>
                <img src={item.imageUrl} alt={item.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShowCollection;
