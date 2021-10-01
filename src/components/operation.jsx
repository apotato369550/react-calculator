import React from 'react';

const Operation = ({operation, result, setResult, setCurrentOperation,  expression, setExpression}) =>{
    
    const operationHandler = (event) => {
        console.log("Operation Handler has been pressed");
        setExpression([...expression, result])
        setCurrentOperation(operation);
        setResult("0")
    }
    
    return (
        <button onClick={operationHandler}>{operation}</button>
    )
}

export default Operation;