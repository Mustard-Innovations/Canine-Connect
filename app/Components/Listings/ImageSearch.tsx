'use client';

import React, { useState, useEffect } from 'react';
import { MagnifyingGlassIcon, ChevronDownIcon, HeartIcon, StarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { getFavorites, addFavorite, removeFavorite } from '../SmartComp/localStorageUtils';

const apiKey = "3aHkxAeszwU6Y7rCyFXHWknFOpU6zcqymSnG-x8NJEk";

interface ImageResult {
  id: string;
  urls: {
    small: string;
  };
  alt_description: string;
}

const ImageSearch: React.FC = () => {
  const [inputData, setInputData] = useState<string>("clothing brand");
  const [page, setPage] = useState<number>(1);
  const [results, setResults] = useState<ImageResult[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>("clothing brand");
  const [favorites, setFavorites] = useState<string[]>(getFavorites());
  const [showFavorites, setShowFavorites] = useState<boolean>(false);

  useEffect(() => {
    if (!showFavorites) {
      searchImages(currentCategory);
    }
  }, [currentCategory, showFavorites]);

  const searchImages = async (query: string) => {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (page === 1) {
        setResults(data.results);
      } else {
        setResults(prevResults => [...prevResults, ...data.results]);
      }

      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPage(1);
    searchImages(inputData);
  };

  const handleShowMore = () => {
    searchImages(currentCategory);
  };

  const handleOptionSelect = (option: string) => {
    if (option === 'favorite') {
      setShowFavorites(true);
    } else {
      setShowFavorites(false);
      setCurrentCategory(option);
      setInputData(option);
      setPage(1);
      setResults([]); // Clear previous results
      searchImages(option);
    }
  };

  const toggleFavorite = (imageUrl: string) => {
    if (favorites.includes(imageUrl)) {
      removeFavorite(imageUrl);
      setFavorites(getFavorites());
    } else {
      addFavorite(imageUrl);
      setFavorites(getFavorites());
    }
  };

  const filteredResults = showFavorites ? results.filter(result => favorites.includes(result.urls.small)) : results;

  return (
    <div className="text-center justify-center">
      <p className='font-bold text-5xl text-black'>Popular For You</p>
      <div className="dropdown border px-4 my-4 mx-20 text-black flex justify-between">
        <div className='md:hidden'>
          <div tabIndex={0} role="button" className="btn m-1">
            Filter <ChevronDownIcon className='w-4 h-6' />
          </div>
          <ul tabIndex={0} className="md:hidden menu dropdown-content bg-white z-[1]">
            <li className='m-2 p-1 flex' onClick={() => handleOptionSelect('clothing brand')}>
              Price <ChevronDownIcon className='w-4 h-6' />
            </li>
            <li className='m-2 flex p-1' onClick={() => handleOptionSelect('men clothing')}>
              Color <ChevronDownIcon className='w-4 h-6' />
            </li>
            <li className='m-2 flex p-1' onClick={() => handleOptionSelect('women clothing')}>
              Size <ChevronDownIcon className='w-4 h-6' />
            </li>
            <li className='m-2 flex p-1' onClick={() => handleOptionSelect('children clothing')}>
              Gender <ChevronDownIcon className='w-4 h-6' />
            </li>
            <li className='m-2 flex p-1' onClick={() => handleOptionSelect('favorite')}>
              Brand <ChevronDownIcon className='w-4 h-6' />
            </li>
            <li className='m-2 flex p-1' onClick={() => handleOptionSelect('favorite')}>
              Type <ChevronDownIcon className='w-4 h-6' />
            </li>
          </ul>
        </div>
        <div>
          {/* For larger screen display */}
          <ul className='hidden md:flex'>
            <li className='m-2 p-1 flex' onClick={() => handleOptionSelect('clothing brand')}>
              Price <ChevronDownIcon className='w-4 h-6' />
            </li>
            <li className='m-2 flex p-1' onClick={() => handleOptionSelect('men clothing')}>
              Color <ChevronDownIcon className='w-4 h-6' />
            </li>
            <li className='m-2 flex p-1' onClick={() => handleOptionSelect('women clothing')}>
              Size <ChevronDownIcon className='w-4 h-6' />
            </li>
            <li className='m-2 flex p-1' onClick={() => handleOptionSelect('children clothing')}>
              Gender <ChevronDownIcon className='w-4 h-6' />
            </li>
            <li className='m-2 flex p-1' onClick={() => handleOptionSelect('favorite')}>
              Brand <ChevronDownIcon className='w-4 h-6' />
            </li>
            <li className='m-2 flex p-1' onClick={() => handleOptionSelect('favorite')}>
              Type <ChevronDownIcon className='w-4 h-6' />
            </li>
          </ul>
        </div>

        <div className=''>
          <button className='m-2 flex p-1' onClick={() => handleOptionSelect('favorite')}>
            Sort By <ChevronDownIcon className='w-4 h-6' />
          </button>
        </div>
      </div>

      {/* <form onSubmit={handleSubmit}>
        <div className="relative flex items-center">
          <MagnifyingGlassIcon className="h-6 w-6 m-2 cursor-pointer" onClick={handleSubmit} />
          <input 
            type="text" 
            className="grow p-2 bg-slate-300 input input-bordered flex items-center mr-12" 
            placeholder="Search" 
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
        </div>
      </form> */}

      <div className="flex flex-wrap justify-center text-start">
        {filteredResults.map((result, index) => (
          <Link href={`/product-detailz?id=${result.id}`} key={result.id} passHref>
            <div className="card card-compact w-96 m-2 bg-base-100 shadow-xl">
              <div className='flex justify-between p-3'>
                <div className='h-6 w-6 bg-slate-200'></div>
                <button onClick={() => toggleFavorite(result.urls.small)}>
                  <HeartIcon 
                    fill={favorites.includes(result.urls.small) ? "red" : "none"} 
                    className="w-6 h-6 bg-black" 
                  />
                </button>
              </div>
              
              <a>
                <img src={result.urls.small} alt={result.alt_description} className='h-96 w-full p-5 m-2' />
              </a>
              <div className="card-body">
                <p className='card-title'>{result.alt_description}</p>
              </div>
              <div className='flex justify-between px-4'>
                <p>Football shirt</p>
                <div className='flex'>
                  <StarIcon className='w-4 h-4 m-1' fill='gold'/> 
                  <p>4.5</p>
                </div>
              </div>
              <p className='text-lg font-bold px-4'>$59.66</p>
            </div>
          </Link>
        ))}
      </div>

      {!showFavorites && results.length > 0 && (
        <button id="show-more" className='text-sm bg-black text-white p-2 mt-5' onClick={handleShowMore}>
          SEE ALL POPULAR PRODUCT
        </button>
      )}
    </div>
  );
};

export default ImageSearch;
