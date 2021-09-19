import logo from './logo.svg';
import './App.css';
import Digit from './components/digit';
import Result from './components/result';
import React, { useState } from 'react';

function App() {
  const [result, setResult] = useState(0);
  // this aint showing anything...
  // this is like learning how html and javascript interacted all over again tbh...

  return (
    <div>
      <Result result={result} />
      <Digit number={1} setResult={setResult}/>

    </div>
  );

  /*
      <Digit number={1} setResult={setResult}/>
  */
}

export default App;
