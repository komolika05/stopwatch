import { useState , useEffect } from "react"
import React from "react"
import "./Counter.css"

const Counter = () => {
    const [count, setCount] = useState(0)
    const [isRunning, setIsRunning] = useState(false);
    
    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setCount(prevTime => prevTime + 1);
            },1000)
        } else if (!isRunning && count !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval)
    }, [isRunning])
    
    const startStopwatch = () => {
        setIsRunning(true);
    };

    const stopStopwatch = () => {
        setIsRunning(false);
    };

    const resetStopwatch = () => {
        setIsRunning(false);
        setCount(0);
    };


    return (
        <div className="counter-area">
            <div className="container">
                <h1>Stopwatch</h1>
                <span>{count}</span>
                <div className="btns">
                    <button onClick={startStopwatch} className="btn">Start</button>
                <button onClick={stopStopwatch} className="btn">Stop</button>
                <button onClick={resetStopwatch} className="btn">Reset</button>
                </div>
            </div>
        </div>
    )

}

export default Counter