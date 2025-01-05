import React, { useState, useEffect } from "react";

const API_URL = "http://localhost:8080/journi"; // Added http:// for valid URL

const ApiConfig = () => {
    const [data, setData] = useState([]);
    console.log({data})
    

    const fetchData = async () => {
        try {
            // Fetching data directly without setTimeout
            const response = await fetch(API_URL); // Corrected fetch syntax
            console.log({response})
            const result =await response.json();
            setData(response);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return ( // Added return statement to render JSX
        <div>
            
        
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.title}</li> // Adjust based on your data structure
                    ))}
                </ul>
           
        </div>
    );
};

export default ApiConfig;