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

interface ImageSearchProps {
  title: string;  // Add title as a prop
}

const ImageSearch: React.FC<ImageSearchProps> = ({ title }) => {
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
      <p className='font-bold text-5xl text-black'>{title}</p> {/* Use the passed title prop */}
      <div className="dropdown border px-4 my-4 mx-20 text-black flex justify-between">
        {/* Dropdown menu and options */}
      </div>

      <div className="flex flex-wrap justify-center text-start">
        {filteredResults.map((result) => (
          <Link href={`/product-detailz?id=${result.id}`} key={result.id} passHref>
            <div className="card card-compact w-96 m-2 bg-base-100 shadow-xl">
              {/* Content */}
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
