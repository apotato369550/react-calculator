import React from 'react';

const Operation = ({operation, result, setResult, setCurrentOperation, expression, setExpression, power}) =>{
    
    const operationHandler = (event) => {
        if(!power){
            return;
        }
        console.log("Operation Handler has been pressed");
        setExpression([...expression, result])
        setCurrentOperation(operation);
        setResult("0")
    }
    
    return (
        <button className="col btn btn-primary rounded-0 m-1" onClick={operationHandler}>{operation}</button>
    )
}

export default Operation;