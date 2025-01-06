import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Closes the menu when a link is clicked
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/"><span className="text-white font-extrabold text-2xl">Postbin</span></a>
          </div>
          <div className="hidden md:block">
            <div className="ml-auto flex items-baseline space-x-6">
              <Link to="/" className="text-white font-bold hover:bg-white hover:text-blue-500 px-4 py-2 rounded-full text-lg font-sans transition-all duration-300 cursor-pointer" onClick={handleLinkClick}>Home</Link>
              <Link to="/post" className="text-white font-bold hover:bg-white hover:text-blue-500 px-4 py-2 rounded-full text-lg font-sans transition-all duration-300 cursor-pointer" onClick={handleLinkClick}>Post</Link>
              <Link to="/info" className="text-white font-bold hover:bg-white hover:text-blue-500 px-4 py-2 rounded-full text-lg font-sans transition-all duration-300 cursor-pointer" onClick={handleLinkClick}>About</Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-full text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed inset-0 flex z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="bg-blue-600 w-64 p-4 flex flex-col items-start space-y-4">
          <div className="flex items-center justify-between w-full">
            <Link to="/" className="text-white font-bold hover:bg-white hover:text-blue-500 block px-3 py-2 rounded-full text-lg font-sans transition-all duration-300 cursor-pointer" onClick={handleLinkClick}>Home</Link>
            <button onClick={toggleMenu} className="text-white">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <Link to="/post" className="text-white font-bold hover:bg-white hover:text-blue-500 block px-3 py-2 rounded-full text-lg font-sans transition-all duration-300 cursor-pointer" onClick={handleLinkClick}>Post</Link>
          <Link to="/info" className="text-white font-bold hover:bg-white hover:text-blue-500 block px-3 py-2 rounded-full text-lg font-sans transition-all duration-300 cursor-pointer" onClick={handleLinkClick}>Info</Link>
        </div>
      </div>

      {/* Dim Background Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 transition-opacity duration-300 ease-in-out z-40" 
          onClick={toggleMenu} 
        />
      )}
    </nav>
  );
};

export default NavBar;