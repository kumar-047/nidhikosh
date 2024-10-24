import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-lg font-bold text-gray-800">
          <span className="sr-only">Nidhikosh</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 17h.01"
            />
          </svg>
          Nidhikosh
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/categories" className="text-gray-600 hover:text-gray-900">
            Categories
          </Link>
          <Link to="/cart" className="text-gray-600 hover:text-gray-900">
            Cart
          </Link>
          <Link to="/login" className="text-gray-600 hover:text-gray-900">
            Login
          </Link>
          <Link to="/signup" className="text-gray-600 hover:text-gray-900">
            Signup
          </Link>
        </div>
        <div className="relative w-full md:w-auto">
          <input
            type="search"
            placeholder="Search products"
            className="w-full pl-10 text-sm text-gray-700"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;