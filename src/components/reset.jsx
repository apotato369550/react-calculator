import React from 'react';

const Reset = ({setExpression, setResult, setCurrentOperation, power}) =>{
    const resetHandler = (event) => { 
        if(!power){
            return;
        }
        console.log("Remove handler has been pressed");
        // pop two elements from expression
        // set it as that new array
        setExpression([])
        setResult("0")
        setCurrentOperation("")
        // i should probably test this out
        // do further testing
        // figure out what it does to the operands and operatorsgi
        return;
    }

    return (
        <button onClick={resetHandler}>Reset</button>
    )
}

export default Reset;