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
  const [favorites, setFavorites] = useState<string[]>([]);

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

  const toggleFavorite = (imageUrl: string) => {
    if (favorites.includes(imageUrl)) {
      setFavorites(favorites.filter(fav => fav !== imageUrl));
    } else {
      setFavorites([...favorites, imageUrl]);
    }
  };

  const scrollLeft = () => {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      carousel.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      carousel.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className='md:flex mx-4 p-5'>
      <div className='text-black my-3'>
        <h1 className='text-4xl my-2 font-bold'>{title}</h1>
        <p>{description}</p>
        <div className='flex'>
          <ArrowLeftCircleIcon className='w-6 h-6 m-2 cursor-pointer' onClick={scrollLeft} />
          <ArrowRightCircleIcon className='w-6 h-6 m-2 cursor-pointer' onClick={scrollRight} />
        </div>
      </div>
      <div className='carousel carousel-center rounded-box max-w-md md:max-w-full space-x-4 p-6'>
        {items.map(item => (
          <Link key={item.id} href={`/product-details/${item.id}`} passHref>
            <div className="carousel-item card card-compact bg-base-100 w-full md:m-3 shadow-xl">
              <div className='flex justify-between p-3'>
                <div className='h-6 w-6 bg-slate-200'></div>
                <button onClick={() => toggleFavorite(item.imageUrl)}>
                  <HeartIcon 
                    fill={favorites.includes(item.imageUrl) ? "red" : "none"} 
                    className="w-6 h-6 bg-black" 
                  />
                </button>
              </div>
              <figure className='w-96'>
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  onError={(e) => e.currentTarget.src = '/fallback-image.png'}
                />
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
