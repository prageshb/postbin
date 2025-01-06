// PostPromptCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const PostPromptCard = () => {
  return (
    <Link to="/post" className="block max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <div className="p-4 flex items-center">
        <img
          src="https://via.placeholder.com/40" //Anonymous Profile picture
          alt="Anonymous"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-800">What's on your mind?</h2>
          <p className="text-gray-500 mt-1">Share your thoughts, photos or confessions.</p>
        </div>
      </div>
      <div className="bg-blue-500 text-white py-2 text-center font-semibold">
        Start Posting
      </div>
    </Link>
  );
};

export default PostPromptCard;