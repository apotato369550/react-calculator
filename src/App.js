import './App.css';
import Digit from './components/digit';
import Result from './components/result';
import Delete from './components/delete';
import Decimal from './components/decimal';
import Operation from './components/operation';
import Equals from './components/equals';
import Reset from './components/reset';
import Power from './components/power';
import React, { useState, useEffect } from 'react';

function App() {
  const [result, setResult] = useState("0");
  const [currentOperation, setCurrentOperation] = useState("");
  const [expression, setExpression] = useState([])
  const [power, setPower] = useState(true)
  // test the things
  

  return (
    <div className="Container">
      
      <div className="row"><span className="col"> Current Operation: {currentOperation}</span> <span className="col"> Result: <Result result={result} /></span> </div>
      
      <div class="row">
        <Digit number={"7"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} expression={expression} setExpression={setExpression} power={power}/>
        <Digit number={"8"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} expression={expression} setExpression={setExpression} power={power}/>
        <Digit number={"9"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} expression={expression} setExpression={setExpression} power={power}/>
        <Operation operation={"/"} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} result={result} setResult={setResult} expression={expression} setExpression={setExpression} power={power}/>
        <Power power={power} setPower={setPower} setResult={setResult} /> 
      </div>

      <div class="row">
        <Digit number={"4"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} expression={expression} setExpression={setExpression} power={power}/>
        <Digit number={"5"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} expression={expression} setExpression={setExpression} power={power}/>
        <Digit number={"6"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} expression={expression} setExpression={setExpression} power={power}/>
        <Reset setExpression={setExpression} setCurrentOperation={setCurrentOperation} setResult={setResult} power={power}/>
        <Operation operation={"*"} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} result={result} setResult={setResult} expression={expression} setExpression={setExpression} power={power}/>
      </div>

      <div class="row">
        <Digit number={"1"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} expression={expression} setExpression={setExpression} power={power}/>
        <Digit number={"2"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} expression={expression} setExpression={setExpression} power={power}/>
        <Digit number={"3"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} expression={expression} setExpression={setExpression} power={power}/>
        <Operation operation={"-"} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} result={result} setResult={setResult} expression={expression} setExpression={setExpression} power={power}/>
        <Delete result={result} setResult={setResult} power={power}/>
      </div>

      <div class="row">
        <Digit number={"0"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} expression={expression} setExpression={setExpression} power={power}/>
        <Digit number={"00"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} expression={expression} setExpression={setExpression} power={power}/>
        <Decimal result={result} setResult={setResult}/>
        <Operation operation={"+"} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} result={result} setResult={setResult} expression={expression} setExpression={setExpression} power={power}/>
        <Equals result={result} setResult={setResult} expression={expression} setExpression={setExpression} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} power={power}/>
      </div>


      


    </div>
  );

  // add logic behind power button
}

export default App;
