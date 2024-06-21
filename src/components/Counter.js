import { useState } from "react"
import React from "react"
import "./Counter.css"

const Counter = () => {
    const [count, setCount] = useState(0)
    
    const addCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    const lessCount = () => {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div className="counter-area">
            <div className="container">
                <h1>Stopwatch</h1>
                <button className="less-btn" onClick={()=>lessCount()}>-</button>
                <span>{count}</span>
                <button className="add-btn" onClick={() => addCount()}>+</button>
            </div>
        </div>
    )

}

export default Counter