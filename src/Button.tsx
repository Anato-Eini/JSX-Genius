import { useState, useEffect } from "react";
export default function Button() {
    const [count, setCount] = useState(0);
    const [timeElapsed, setTimeElapsed] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeElapsed(timeElapsed + 0.1);
        }, 100);

        return () => clearInterval(timer);
    });

    const handleClick = () => {
        setCount(count + 1);
        setTimeElapsed(0);
    }

    return (
        <>
            <button onClick={handleClick}>Counter: {count}</button>
            <p>Time Elapsed: {timeElapsed.toFixed(1)}</p>
        </>
    );
}