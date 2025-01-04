import React from 'react';


const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
      <img
        src={post.image || 'https://via.placeholder.com/400'} // Placeholder image if none provided
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-gray-700 mb-4">{post.content.slice(0, 100)}...</p> {/* Show first 100 chars */}
        <a href={`/post/${post.id}`} className="text-blue-500 hover:underline">Read More</a>
      </div>
    </div>
  ); 
};

export default PostCard;