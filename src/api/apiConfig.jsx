import React, { useState, useEffect } from "react";
import PostCard from "../components/PostCard";

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

    return ( 
        <div>
            
            {/* <PostCard post={data} /> */}

            {/* Calling postcard component with post argument  */}
            {data.map(post => (
        <PostCard
          key={post.id} // Use a unique identifier
          post={post} // Pass the entire post object
        />
      ))}
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