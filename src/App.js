import './App.css';
import Digit from './components/digit';
import Result from './components/result';
import Delete from './components/delete';
import Decimal from './components/decimal';
import Operation from './components/operation';
import Equals from './components/equals';
import Reset from './components/reset';
import React, { useState, useEffect } from 'react';

function App() {
  const [result, setResult] = useState("0");
  const [currentOperation, setCurrentOperation] = useState("");
  const [expression, setExpression] = useState([])
  // test the things
  

  return (
    <div>
      <p>Result: <Result result={result} /></p>
      
      <div>Current Operation: {currentOperation}</div>

      <Digit number={"1"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} expression={expression} setExpression={setExpression}/>
      <Digit number={"2"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} expression={expression} setExpression={setExpression}/>
      <Digit number={"3"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} expression={expression} setExpression={setExpression}/>
      <Digit number={"4"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} expression={expression} setExpression={setExpression}/>
      <Digit number={"5"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} expression={expression} setExpression={setExpression}/>
      <Digit number={"6"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} expression={expression} setExpression={setExpression}/>
      <Digit number={"7"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} expression={expression} setExpression={setExpression}/>
      <Digit number={"8"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} expression={expression} setExpression={setExpression}/>
      <Digit number={"9"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} expression={expression} setExpression={setExpression}/>
      <Digit number={"0"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} expression={expression} setExpression={setExpression}/>
      <Digit number={"00"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} expression={expression} setExpression={setExpression}/>

      <Decimal result={result} setResult={setResult}/>

      <Operation operation={"+"} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} result={result} setResult={setResult} expression={expression} setExpression={setExpression}/>
      <Operation operation={"-"} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} result={result} setResult={setResult} expression={expression} setExpression={setExpression}/>
      <Operation operation={"*"} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} result={result} setResult={setResult} expression={expression} setExpression={setExpression}/>
      <Operation operation={"/"} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} result={result} setResult={setResult} expression={expression} setExpression={setExpression}/>

      <Equals result={result} setResult={setResult} expression={expression} setExpression={setExpression} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation}/>
      
      <Delete result={result} setResult={setResult}/>
      <Reset setExpression={setExpression} setCurrentOperation={setCurrentOperation} setResult={setResult}/>


    </div>
  );

  // work on calculator logic
  /*
      <Digit number={1} setResult={setResult}/>
  */
}

export default App;
