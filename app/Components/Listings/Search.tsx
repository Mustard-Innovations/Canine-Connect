'use client';
import React, { useState, useRef, useEffect } from 'react';
import { MagnifyingGlassIcon, XCircleIcon } from '@heroicons/react/24/outline';
import ShowCollection from '../Parts/ShowCollection';

const SearchComponent: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>(''); // State for search query
  const [showResults, setShowResults] = useState(false); // State to control showing search results
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle opening and closing the search modal
  const handleIconClick = () => {
    setIsExpanded((prev) => !prev);
    if (!isExpanded) {
      setShowResults(false); // Hide results when closing modal
      setTimeout(() => inputRef.current?.focus(), 100); // Delay for smooth transition
    }
  };

  // Handle clicking outside of the modal to close
  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setIsExpanded(false);
      setShowResults(false); // Hide results when clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle popular search click
  const handlePopularSearchClick = (query: string) => {
    setSearchQuery(query);
    setIsExpanded(false); // Close modal after selecting popular search
    setShowResults(true); // Show results after search is selected
  };

  // Handle manual search submission
  const handleSearchSubmit = () => {
    if (searchQuery.trim() !== '') {
      setShowResults(true); // Show results if there is a valid query
      setIsExpanded(false); // Close modal after search
    }
  };

  return (
    <>
      {isExpanded && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div> // Background overlay
      )}

      <div className="relative z-50">
        {isExpanded ? (
          <div className="fixed top-0 left-0 w-full max-w-lg mx-auto bg-white p-6 rounded-b-lg shadow-lg z-50"> {/* Positioned at the top */}
            <div className="text-start">
              <p className="text-xl mb-4">Canine Connect</p>
              <div className="flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  className="w-full p-2 bg-slate-300 rounded-md border-none focus:outline-none"
                  placeholder="Search..."
                  value={searchQuery} // Bind the input to the search query state
                  onChange={(e) => setSearchQuery(e.target.value)} // Update query on input change
                />
                <XCircleIcon
                  className="h-6 w-6 ml-2 cursor-pointer"
                  onClick={handleIconClick} // Close modal on click
                />
              </div>

              {/* Popular Search Links */}
              <div className="mt-4">
                <p className="text-lg font-semibold">Popular Searches</p>
                <p className="mt-2 cursor-pointer" onClick={() => handlePopularSearchClick("Men's clothing")}>
                  Men's clothing
                </p>
                <p className="mt-2 cursor-pointer" onClick={() => handlePopularSearchClick("Women's clothing")}>
                  Women's clothing
                </p>
                <p className="mt-2 cursor-pointer" onClick={() => handlePopularSearchClick("Kids' clothing")}>
                  Kids' clothing
                </p>
              </div>
            </div>

            <div className="mt-4">
              <button className="btn w-full" onClick={handleSearchSubmit}>
                Search
              </button>
            </div>
          </div>
        ) : (
          <MagnifyingGlassIcon
            className="h-6 w-6 m-2 cursor-pointer"
            onClick={handleIconClick}
          />
        )}
      </div>

      {/* Centered result display */}
      {showResults && (
        <div className="fixed inset-0 flex items-center justify-center z-40">
          <div className="w-screen max-w-lg bg-white p-6 rounded-lg shadow-lg">
            {/* Show the query and search results */}
            <div className="text-center">
              <p className="text-xl font-semibold">Search Results for "{searchQuery}"</p>
            </div>
            <ShowCollection title={searchQuery} description={`Explore the best ${searchQuery}`} />
            <div className="mt-4">
              <button className="btn w-full" onClick={() => setShowResults(false)}>
                Close Results
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchComponent;
