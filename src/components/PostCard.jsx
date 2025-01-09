import React, { useState } from "react";
import FullPost from './FullPost'; // Import the FullPost component

const PostCard = ({ post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const handleOpenClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="inline-flex flex-col pt-20 ml-20">
      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <a href="#">
          <img 
            className="rounded-t-lg h-64 w-64 object-cover" 
            src={post.imageUrl || '#'} 
            alt={post.title} 
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
              {post.title.slice(0, 25)}..
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {post.content.slice(0, 25)}...
          </p>
          <button 
            onClick={handleOpenClick} // Open modal on button click
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Open
            <svg 
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2" 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 14 10"
            >
              <path 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal for FullPost */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white rounded-lg p-5 max-w-3xl w-full h-auto max-h-[80%] overflow-auto relative"> {/* Increased size and scrollable */}
            <button 
              onClick={handleCloseModal} 
              className="absolute top-0 right-3 text-gray-600 hover:text-gray-900 text-4xl z-50"
            >
              &times; {/* Close button */}
            </button>
            <FullPost post={post} /> {/*Sending post to FullPost which will render inside the Modal */}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;