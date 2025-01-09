// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="mt-8">
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="mb-2">&copy; {new Date().getFullYear()} Pragesh Bhandari. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://www.facebook.com/bhandari.pragesh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-500"
            >
              <FaFacebook size={24} />
            </a>
            <a 
              href="https://x.com/PrageshBhandari" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400"
            >
              <FaTwitter size={24} />
            </a>
            <a 
              href="https://instagram.com/pragesh_bhandari" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-pink-500"
            >
              <FaInstagram size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/prageshbhandari" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-600"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;