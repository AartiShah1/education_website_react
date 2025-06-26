import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navbar */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/"
              className="text-2xl font-bold text-[#093FB4] hover:text-[#072D8C] transition-colors"
              aria-label="Home"
            >
              code_edu
            </Link>
          </div>

          {/* Desktop Navigation + Search */}
          <div className="hidden md:flex items-center justify-between flex-1 ml-6">
            {/* Navigation Links */}
            <div className="flex items-center space-x-8 px-2">
              <Link to="/courses" className="text-base font-medium text-gray-700 hover:text-[#093FB4] transition-colors">All Courses</Link>
              <Link to="/about" className="text-base font-medium text-gray-700 hover:text-[#093FB4] transition-colors">About Us</Link>
              <Link to="/contact" className="text-base font-medium text-gray-700 hover:text-[#093FB4] transition-colors">Contact</Link>
            </div>

            {/* Search Form */}
            <form 
              className="relative w-64"
              onSubmit={handleSearch}
              role="search"
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="search"
                placeholder="Search course"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#093FB4] focus:border-transparent transition-all text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search courses"
              />
            </form>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center ml-6">
            <button className="px-4 py-2 bg-[#093FB4] text-white text-sm font-medium rounded hover:bg-[#072D8C] transition-colors">
              Register
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center">
            <button
              className="p-1 text-gray-700 hover:text-[#093FB4] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden my-1 pb-4">
          <form onSubmit={handleSearch} role="search">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="search"
                placeholder="Search course by name"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#093FB4] focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search courses"
              />
            </div>
          </form>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="px-2 pt-2 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#093FB4] hover:bg-gray-50 transition-colors"
              >
                All Courses
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#093FB4] hover:bg-gray-50 transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#093FB4] hover:bg-gray-50 transition-colors"
              >
                Contact
              </a>
              <div className="border-t border-gray-200 pt-2">
                <button className="w-full px-4 py-2 bg-[#093FB4] text-white text-base font-medium rounded hover:bg-[#072D8C] transition-colors">
                  Register
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
