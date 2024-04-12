'use client'
import React, { FormEvent, useState } from 'react';

interface SearchProps {
    onSubmit: (query: string) => void; // Callback function for form submission
    placeholder?: string; // Placeholder text for the input field
}

const Search: React.FC<SearchProps> = ({ onSubmit, placeholder = 'Search Images' }) => {
    const [isInputVisible, setIsInputVisible] = useState(false);
    const [inputData, setInputData] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        onSubmit(inputData); // Invoke the onSubmit callback with the input data
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {isInputVisible ? (
                    <input
                        id="search-input"
                        type="text"
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)}
                        placeholder={placeholder}
                    />
                ) : (
                    <button type="button" onClick={() => setIsInputVisible(true)}>
                        {/* Use the magnifying glass icon for the search button */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                    </button>
                )}
                {isInputVisible && (
                    <button type="submit">Search</button>
                )}
            </form>
        </div>
    );
};

export default Search;
