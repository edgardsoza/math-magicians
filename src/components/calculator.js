import React from "react";
import './calculator.css';

const Calculator = () => {
    return (
    <div className="bodyhtml">
    <div className="main">
        <div className="answer">0</div>
        <div className="firstbox">
            <button className="button1-1 clearall">AC</button>
            <button className="button1-2 plusminus">+/-</button>
            <button className="button1-3 percentage">%</button>
            <button className="button1-4 divide">÷</button>
        </div>
        <div className="secondbox">
            <button className="button1-1">7</button>
            <button className="button1-2">8</button>
            <button className="button1-3">9</button>
            <button className="button1-4 multiply">x</button>
        </div>
        <div className="thirdbox">
            <button className="button1-1">4</button>
            <button className="button1-2">5</button>
            <button className="button1-3">6</button>
            <button className="button1-4 minus">-</button>
        </div>
        <div className="fourthbox">
            <button className="button1-1">1</button>
            <button className="button1-2">2</button>
            <button className="button1-3">3</button>
            <button className="button1-4 plus">+</button>
        </div>
        <Childcomponent/>
    </div>
    </div>
    )
}

const Childcomponent = () => {
    return (
    <div className="fifthbox">
    <button className="button5-1">0</button>
    <button className="button5-2">.</button>
    <button className="button5-4 equal">=</button>
    </div>
    )
}

export default Calculator;