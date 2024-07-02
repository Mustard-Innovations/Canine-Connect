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
    <div className="relative">
      <div
        className={`flex items-center border rounded ${isExpanded ? 'p-1' : 'p-0'}`}
        onClick={handleIconClick}
      >
        <MagnifyingGlassIcon className="h-5 w-5 mx-6 cursor-pointer" />
        {isExpanded && (
          <input
            type="text"
            ref={inputRef}
            className="border-none focus:ring-0 outline-none ml-2"
            placeholder="Search..."
          />
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
