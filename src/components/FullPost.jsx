import React from 'react';

const FullPost = ({ post }) => {
  return (
    <div className="bg-white rounded-lg max-w-2xl mx-auto relative p-6 z-0">
      <h1 className="-mt-6 text-2xl font-bold mb-2 text-gray-900">{post.title}</h1> {/* Adjusted title size */}
      {/* Line below the title */}
      <div className="border-b border-gray-300 mb-4"></div> {/* Horizontal line */}
      <img 
        className="h-full w-full object-cover rounded-lg mb-4 border-4 border-gray-700" 
        src={post.imageUrl || '#'} 
        alt={post.title} 
      />
      <div className="max-h-96 overflow-y-auto"> {/* Scrollable content area */}
        <p className="text-gray-700 mb-4 whitespace-pre-line">{post.content}</p> {/* Preserve spacing in content */}
      </div>
      <div className="flex justify-between items-center border-t mt-6 pt-4">
        <span className="text-sm text-gray-500">Posted on: {new Date(post.creationDate).toLocaleDateString()}</span> {/* Display post date */}
        <span className="text-sm text-gray-500">Author: Anonymous</span> {/* Display author name */}
      </div>
    </div>
  );
};

export default FullPost;