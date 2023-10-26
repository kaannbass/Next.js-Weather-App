import React, { ChangeEvent } from 'react';

interface SearchProps {
  handleSubmit: () => void;
  text: string;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Search({ handleSubmit, text, handleOnChange }: SearchProps) {
  return (
    <div className="w-full sm:w-1/2">
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="flex items-center justify-center">
        <input
          type="search"
          value={text}
          onChange={handleOnChange}
          id="default-search"
          className="w-full sm:w-[30rem] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="City"
          required
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-square ml-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </div>
    </div>

  );
}

export default Search;
