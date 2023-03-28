import React from "react";
import './calculator.css';

const Calculator = () => {
    return (
    <div className="main">
        <div className="answer">0</div>
        <div className="firstbox">
            <button className="button1-1">AC</button>
            <button className="button1-2">+/-</button>
            <button className="button1-3">%</button>
            <button className="button1-4">÷</button>
        </div>
        <div className="secondbox">
            <button className="button1-1">7</button>
            <button className="button1-2">8</button>
            <button className="button1-3">9</button>
            <button className="button1-4">x</button>
        </div>
        <div className="thirdbox">
            <button className="button1-1">4</button>
            <button className="button1-2">5</button>
            <button className="button1-3">6</button>
            <button className="button1-4">-</button>
        </div>
        <div className="fourthbox">
            <button className="button1-1">1</button>
            <button className="button1-2">2</button>
            <button className="button1-3">3</button>
            <button className="button1-4">+</button>
        </div>
        <div className="fifthbox">
            <button className="button5-1">0</button>
            <button className="button5-2">.</button>
            <button className="button5-4">=</button>
        </div>
    </div>
    )
}

export default Calculator;