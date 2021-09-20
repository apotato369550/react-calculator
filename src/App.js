import logo from './logo.svg';
import './App.css';
import Digit from './components/digit';
import Result from './components/result';
import Delete from './components/delete';
import React, { useState } from 'react';

function App() {
  const [result, setResult] = useState("0");
  // this aint showing anything...
  // this is like learning how html and javascript interacted all over again tbh...

  return (
    <div>
      <Result result={result} />

      <Digit number={"1"} result={result} setResult={setResult}/>
      <Digit number={"2"} result={result} setResult={setResult}/>
      <Digit number={"3"} result={result} setResult={setResult}/>
      <Digit number={"4"} result={result} setResult={setResult}/>
      <Digit number={"5"} result={result} setResult={setResult}/>
      <Digit number={"6"} result={result} setResult={setResult}/>
      <Digit number={"7"} result={result} setResult={setResult}/>
      <Digit number={"8"} result={result} setResult={setResult}/>
      <Digit number={"9"} result={result} setResult={setResult}/>
      <Digit number={"0"} result={result} setResult={setResult}/>
      <Digit number={"00"} result={result} setResult={setResult}/>

      <Delete result={result} setResult={setResult}/>

    </div>
  );

  /*
      <Digit number={1} setResult={setResult}/>
  */
}

export default App;
