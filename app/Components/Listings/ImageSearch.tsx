'use client'
import React, { useState } from 'react';
import Search from './Search';

const apiKey = "3aHkxAeszwU6Y7rCyFXHWknFOpU6zcqymSnG-x8NJEk";

const ImageSearch = () => {
  // const [isInputVisible, setIsInputVisible] = useState(false);
  const [inputData, setInputData] = useState("");
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const searchImages = async (query: string) => {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      
      if (page === 1) {
        setResults([]);
      }
      
      setResults(prevResults => [...prevResults, ...data.results]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setPage(1);
    searchImages(inputData);
  };

  const handleShowMore = () => {
    searchImages(inputData);
  };

  const handleOptionSelect = (option: React.SetStateAction<string> | React.SetStateAction<null>) => {
    setSelectedOption(option);
    setInputData(option);
    // Search for images related to the selected option
    searchImages(option);
  };

  const addToFavorites = (imageUrl: any) => {
    // Here you can implement the logic to add the image to favorites
    console.log('Added to favorites:', imageUrl);
  };

  return (
    <div className="text-center justify-center">
      <div className="text-center text-black items-center">
        <button className='m-2 p-1' onClick={() => handleOptionSelect('clothing brand')}>Brand</button>
        <button className='m-2 p-1' onClick={() => handleOptionSelect('men clothing')}>Men</button>
        <button className='m-2 p-1' onClick={() => handleOptionSelect('women clothing')}>Women</button>
        <button className='m-2 p-1' onClick={() => handleOptionSelect('children clothing')}>Kids</button>
        <button className='m-2 p-1' onClick={() => handleOptionSelect('favorite')}>Favorite</button>
      </div>

      <form onSubmit={handleSubmit}>
        <Search 
          onSubmit={handleSubmit} 
          placeholder="Custom Placeholder"
        />
      </form>

      <div className="flex flex-wrap justify-center">
        {results.map((result, index) => (
          <div className="card card-compact w-96 m-2 bg-base-100 shadow-xl" key={index}>
            <img src={result.urls.small} alt={result.alt_description} className='w-100 p-5 m-2'  />
            <div className="card-body">
              <p className='card-title'>{result.alt_description}</p>
              {/* Use the love icon for the "Add to Favorites" button */}
              <button onClick={() => addToFavorites(result.urls.small)}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  stroke="currentColor" 
                  className="w-6 h-6 bg-black">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {page > 1 && <button id="show-more" className='bg-black' onClick={handleShowMore}>Show More</button>}
    </div>
  );
};

export default ImageSearch;

