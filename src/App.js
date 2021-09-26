import logo from './logo.svg';
import './App.css';
import Digit from './components/digit';
import Result from './components/result';
import Delete from './components/delete';
import Decimal from './components/decimal';
import Operation from './components/operation';
import Equals from './components/equals';
import React, { useState } from 'react';

function App() {
  const [result, setResult] = useState("0");
  const [digits, setDigits] = useState([]);
  const [operators, setOperators] = useState([]);
  const [currentOperation, setCurrentOperation] = useState("");
  const [answer, setAnswer] = useState(0);
  // this aint showing anything...
  // this is like learning how html and javascript interacted all over again tbh...

  return (
    <div>
      <p>Result: <Result result={result} /></p>
      
      <div>Current Operation: {currentOperation}</div>
      <div>Digits: {digits}</div>
      <div>Operators: {operators}</div>

      <Digit number={"1"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} operators={operators} setOperators={setOperators}/>
      <Digit number={"2"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} operators={operators} setOperators={setOperators}/>
      <Digit number={"3"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} operators={operators} setOperators={setOperators}/>
      <Digit number={"4"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} operators={operators} setOperators={setOperators}/>
      <Digit number={"5"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} operators={operators} setOperators={setOperators}/>
      <Digit number={"6"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} operators={operators} setOperators={setOperators}/>
      <Digit number={"7"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} operators={operators} setOperators={setOperators}/>
      <Digit number={"8"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} operators={operators} setOperators={setOperators}/>
      <Digit number={"9"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} operators={operators} setOperators={setOperators}/>
      <Digit number={"0"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} operators={operators} setOperators={setOperators}/>
      <Digit number={"00"} result={result} setResult={setResult} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} operators={operators} setOperators={setOperators}/>

      <Decimal result={result} setResult={setResult}/>

      <Operation operation={"+"} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} result={result} setResult={setResult} digits={digits} setDigits={setDigits} operators={operators} setOperators={setOperators} />
      <Operation operation={"-"} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} result={result} setResult={setResult} digits={digits} setDigits={setDigits} operators={operators} setOperators={setOperators}   />
      <Operation operation={"x"} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} result={result} setResult={setResult} digits={digits} setDigits={setDigits} operators={operators} setOperators={setOperators}   />
      <Operation operation={"/"} currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} result={result} setResult={setResult} digits={digits} setDigits={setDigits} operators={operators} setOperators={setOperators}   />

      <Equals result={result} setResult={setResult} answer={answer}/>
      
      <Delete result={result} setResult={setResult}/>


    </div>
  );

  // work on calculator logic
  /*
      <Digit number={1} setResult={setResult}/>
  */
}

export default App;
