// Counter.js
import React, { useState } from "react";

const Counter = ({ onCountChange }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        const newCount = count + 1;
        setCount(newCount);
        onCountChange(newCount); // Notify the parent about the count change
    };

    const decrement = () => {
        const newCount = count - 1;
        setCount(newCount);
        onCountChange(newCount); // Notify the parent about the count change
    };

    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;