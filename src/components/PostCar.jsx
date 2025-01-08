import React from "react";


const PostCar = ({ post }) => {
  
  return (
    <>
    <div className="inline-flex">
   
<div class="w-96 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <img class="w-full h-40 object-cover rounded-t-lg"  src={post.imageUrl || '#'}
          alt={post.title}/>
        <div class="p-4">
            <h2 class="text-xl  font-semibold">{post.title}</h2>
            <p class="text-gray-600">{post.content.slice(0, 100)}...</p>
            <div class="flex justify-between items-center mt-4">
                <button //onClick={()} 
                class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Read More</button>
            </div>
        </div>
    </div>
    </div>
    </>
  );
};



export default PostCar;
