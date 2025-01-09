import React, { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import PostCar from "../components/PostCar";

const API_URL = "http://localhost:8080/journi"; 

const ApiConfig = () => {
    const [data, setData] = useState([]);
    console.log({data})
    

    const fetchData = async () => {
        try {
            // Fetching data
            const response = await fetch(API_URL); 
            console.log({response})
            const postsData =await response.json();
            
          
            

            setData(postsData);
            console.log(data);
            
        } catch (error) {
            console.error('Error fetching data:`', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const sortedPosts = [...data].sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));

    return ( 
        <div>
            
            {/* <PostCard post={data} /> */}

            {/* Calling postcard component with post argument  */}
            {sortedPosts.map(post => (
        <PostCard
          key={post.id} // Use a unique identifier
          post={post} // Pass the entire post object
        />
      ))}
      <div className="h-8"></div>
                {/* <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.title}</li> // Adjust based on your data structure
                    ))}
                </ul>
            */}
        </div>
    );
};



export default ApiConfig;