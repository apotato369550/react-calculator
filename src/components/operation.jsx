import React from 'react';

const Operation = ({operation, result, setResult, currentOperation, setCurrentOperation, digits, setDigits, operators, setOperators}) =>{
    
    const operationHandler = (event) => {
        console.log("Operation Handler has been pressed");
        setDigits([...digits, result])
        setCurrentOperation(operation);
    }
    
    return (
        <button onClick={operationHandler}>{operation}</button>
    )
}

export default Operation;