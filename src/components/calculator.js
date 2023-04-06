import React from "react";
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        total: 0,
        next: null,
        operator: null
      };
    }

    handleClick = (e) => {
        const totalresult = calculate(this.state, e.target.innerHTML);
        this.setState(totalresult);
      };
  
      displaycalculator = (e) => {
        this.setState({
            total: e.target.innerHTML,
        });
      };

    render () {
    const {total, next, operation} = this.state;
    return (
    <div className="bodyhtml">
    <div className="titlecalculator">
        <h1 className="titlecalc">Let´s do Some Math!</h1>
    </div>
    <div className="main">
        <div className="answer" onChange={this.displaycalculator}>
        {total}
        {operation}
        {next}
        </div>
        <div className="firstbox">
            <button type="button" className="button1-1" onClick={this.handleClick}>AC</button>
            <button type="button" className="button1-2 plusminus" onClick={this.handleClick}>+/-</button>
            <button type="button" className="button1-3 percentage" onClick={this.handleClick}>%</button>
            <button type="button" className="button1-4 divide" onClick={this.handleClick}>÷</button>
        </div>
        <div className="secondbox">
            <button type="button" className="button1-1" onClick={this.handleClick}>7</button>
            <button type="button" className="button1-2" onClick={this.handleClick}>8</button>
            <button type="button" className="button1-3" onClick={this.handleClick}>9</button>
            <button type="button" className="button1-4 multiply" onClick={this.handleClick}>x</button>
        </div>
        <div className="thirdbox">
            <button type="button" className="button1-1" onClick={this.handleClick}>4</button>
            <button type="button" className="button1-2" onClick={this.handleClick}>5</button>
            <button type="button" className="button1-3" onClick={this.handleClick}>6</button>
            <button type="button" className="button1-4 minus" onClick={this.handleClick}>-</button>
        </div>
        <div className="fourthbox">
            <button type="button" className="button1-1" onClick={this.handleClick}>1</button>
            <button type="button" className="button1-2" onClick={this.handleClick}>2</button>
            <button type="button" className="button1-3" onClick={this.handleClick}>3</button>
            <button type="button" className="button1-4 plus" onClick={this.handleClick}>+</button>
        </div>
        <div className="fifthbox">
            <button type="button" className="button5-1" onClick={this.handleClick}>0</button>
            <button type="button" className="button5-2" onClick={this.handleClick}>.</button>
            <button type="button" className="button5-4 equal" onClick={this.handleClick}>=</button>
        </div>
    </div>
    </div>
    )}
}

export default Calculator;