import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount, onSearch }) => {
  return (
    <nav className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-2xl">Asian Bites</Link>
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-gray-200 transition duration-300">Home</Link>
          <Link to="/indian" className="text-white hover:text-gray-200 transition duration-300">Indian</Link>
          <Link to="/japanese" className="text-white hover:text-gray-200 transition duration-300">Japanese</Link>
          <Link to="/italian" className="text-white hover:text-gray-200 transition duration-300">Italian</Link>
          <Link to="/reviews" className="text-white hover:text-gray-200 transition duration-300">Reviews</Link>
          <Link to="/about" className="text-white hover:text-gray-200 transition duration-300">About</Link>
          <div className="relative">
            <input
              type="text"
              placeholder="Search food..."
              className="p-2 rounded-md focus:outline-none w-48"
              onChange={(e) => onSearch(e.target.value)}
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <Link to="/cart" className="bg-white text-orange-500 p-2 rounded-md flex items-center hover:bg-gray-100 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="ml-1 font-semibold">{cartCount}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;