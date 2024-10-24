import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-gray-200 shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Branding */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-400 flex items-center"
        >
          <span className="sr-only">Nidhikosh</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-6 h-6 mr-2 text-blue-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 17h.01"
            />
          </svg>
          Nidhikosh
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/categories"
            className="hover:text-blue-400 transition duration-300"
          >
            Categories
          </Link>
          <Link
            to="/cart"
            className="hover:text-blue-400 transition duration-300"
          >
            Cart
          </Link>
          <Link
            to="/login"
            className="hover:text-blue-400 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="hover:text-blue-400 transition duration-300"
          >
            Signup
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-6 h-6 text-blue-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Side Navbar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-gray-200 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={closeMenu} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-6 h-6 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          <Link
            to="/categories"
            className="hover:text-blue-400 transition duration-300"
            onClick={closeMenu}
          >
            Categories
          </Link>
          <Link
            to="/cart"
            className="hover:text-blue-400 transition duration-300"
            onClick={closeMenu}
          >
            Cart
          </Link>
          <Link
            to="/login"
            className="hover:text-blue-400 transition duration-300"
            onClick={closeMenu}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="hover:text-blue-400 transition duration-300"
            onClick={closeMenu}
          >
            Signup
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
