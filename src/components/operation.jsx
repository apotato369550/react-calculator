import React from 'react';

const Operation = ({operation, currentOperation, setCurrentOperation}) =>{
    const operationHandler = (event) => {
        console.log("Operation Handler has been pressed");
        setCurrentOperation(operation);
        return;
    }
    
    return (
        <button onClick={operationHandler}>{operation}</button>
    )
}

export default Operation;