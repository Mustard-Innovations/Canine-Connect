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
    
    <div className="relative flex items-center">
      {isExpanded ? (
        <div className="relative flex items-center bg-slate-300 input input-bordered">
          <input 
            ref={inputRef} 
            type="text" 
            className="grow p-2" 
            placeholder="Search" 
          />
          <XCircleIcon 
            className="h-6 w-6 m-2 cursor-pointer" 
            onClick={handleIconClick} 
          />
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
