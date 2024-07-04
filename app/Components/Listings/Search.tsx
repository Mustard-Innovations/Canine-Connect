'use client'
import React, { useState, useRef, useEffect } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchComponent: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    setIsExpanded(true);
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
    <div className="">
      <div
        className='relative flex'
        onClick={handleIconClick}
      >
        <MagnifyingGlassIcon className=" h-6 w-6 m-2 cursor-pointer" />
        {isExpanded && (
          <label className="relative bg-white input input-bordered flex items-center">
            <input type="text" className="grow" placeholder="Search" />
            <MagnifyingGlassIcon className='h-4 w-4' />
          </label>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
