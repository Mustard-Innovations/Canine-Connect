'use client'
import React, { useState, useRef, useEffect } from 'react';
import { MagnifyingGlassIcon, XCircleIcon } from '@heroicons/react/24/outline';

const SearchComponent: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    setIsExpanded((prev) => !prev);
    if (!isExpanded) {
      inputRef.current?.focus();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {isExpanded ? (
        <div className="Absolute">
          <div className="">
            <p className="text-xl">Cannine Connect</p>
            <div className='flex flex-col p-4'>
              <div className="w-full max-w-md relative flex bg-slate-300 rounded-md shadow-lg">
                <input 
                  ref={inputRef} 
                  type="text" 
                  className="grow p-2 bg-transparent border-none focus:outline-none" 
                  placeholder="Search" 
                />
                <XCircleIcon 
                  className="h-6 w-6 m-2 cursor-pointer" 
                  onClick={handleIconClick} 
                /> 
              </div>
            </div>
          </div>
          {/* Add any other content you want within the expanded area */}
          <div className="">
            <p className="text-lg">Popular Search</p>
            <p className=''>Mens clothing</p>
            <p className=''>womens clothing</p>
            <p className=''>kids clothing</p>
          </div>
        </div>
      ) : (
        <MagnifyingGlassIcon 
          className="h-6 w-6 m-2 cursor-pointer" 
          onClick={handleIconClick} 
        />
      )}
    </div>
  );
};

export default SearchComponent;
