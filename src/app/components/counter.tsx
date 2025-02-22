//defining a react component
"use client";
import {useState} from "react"

export const Counter = () => {
    console.log ("Counter component");
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>Cliked {count} times </button>
    );
}