// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <div className="mt-8">
    <footer className="bg-gray-800 text-white py-4 bottom">
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} Pragesh Bhandari. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://www.facebook.com/bhandari.pragesh" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Facebook</a>
          <a href="https://x.com/PrageshBhandari" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">X</a>
          <a href="https://instagram.com/pragesh_bhandari" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">Instagram</a>
          <a href="https://linkedin.com/in/prageshbhandari" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LinkedIn</a>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;