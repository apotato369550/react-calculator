import logo from './logo.svg';
import './App.css';
import Digit from './components/digit';
import Result from './components/result';
import Delete from './components/delete';
import Decimal from './components/decimal';
import Operation from './components/operation';
import Equals from './components/equals';
import React, { useState, useEffect } from 'react';

function App() {
  const [result, setResult] = useState("0");
  const [digits, setDigits] = useState([]);
  const [operators, setOperators] = useState([]);
  const [currentOperation, setCurrentOperation] = useState("");
  const [expression, setExpression] = useState([])
  // this is good
  // bring back expresion thingy thingy

  return (
    <div>
      <p>Result: <Result result={result} /></p>
      
      <div>Current Operation: {currentOperation}</div>
      <div>Digits: {digits}</div>
      <div>Operators: {operators}</div>
      <div>Expression: {expression}</div>

      <Digit number={"1"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} operators={operators} setOperators={setOperators} expression={expression} setExpression={setExpression}/>
      <Digit number={"2"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} operators={operators} setOperators={setOperators} expression={expression} setExpression={setExpression}/>
      <Digit number={"3"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} operators={operators} setOperators={setOperators} expression={expression} setExpression={setExpression}/>
      <Digit number={"4"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} operators={operators} setOperators={setOperators} expression={expression} setExpression={setExpression}/>
      <Digit number={"5"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} operators={operators} setOperators={setOperators} expression={expression} setExpression={setExpression}/>
      <Digit number={"6"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} operators={operators} setOperators={setOperators} expression={expression} setExpression={setExpression}/>
      <Digit number={"7"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} operators={operators} setOperators={setOperators} expression={expression} setExpression={setExpression}/>
      <Digit number={"8"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} operators={operators} setOperators={setOperators} expression={expression} setExpression={setExpression}/>
      <Digit number={"9"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} operators={operators} setOperators={setOperators} expression={expression} setExpression={setExpression}/>
      <Digit number={"0"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} operators={operators} setOperators={setOperators} expression={expression} setExpression={setExpression}/>
      <Digit number={"00"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} operators={operators} setOperators={setOperators} expression={expression} setExpression={setExpression}/>

      <Decimal result={result} setResult={setResult}/>

      <Operation operation={"+"} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} result={result} setResult={setResult} digits={digits} setDigits={setDigits} operators={operators} setOperators={setOperators} expression={expression} setExpression={setExpression}/>
      <Operation operation={"-"} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} result={result} setResult={setResult} digits={digits} setDigits={setDigits} operators={operators} setOperators={setOperators} expression={expression} setExpression={setExpression}/>
      <Operation operation={"x"} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} result={result} setResult={setResult} digits={digits} setDigits={setDigits} operators={operators} setOperators={setOperators} expression={expression} setExpression={setExpression}/>
      <Operation operation={"/"} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} result={result} setResult={setResult} digits={digits} setDigits={setDigits} operators={operators} setOperators={setOperators} expression={expression} setExpression={setExpression}/>

      <Equals result={result} setResult={setResult} digits={digits} setDigits={setDigits} operators={operators} setOperators={setOperators} expression={expression} setExpression={setExpression} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation}/>
      
      <Delete result={result} setResult={setResult}/>


    </div>
  );

  // work on calculator logic
  /*
      <Digit number={1} setResult={setResult}/>
  */
}

export default App;
