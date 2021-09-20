import React from 'react';

const Delete = ({result, setResult}) =>{
    const deleteHandler = (event) => { 
        console.log("Delete handler has been pressed");
        // result/newresult is not a string
        setResult(result.substr(0, result.length - 1));
        return;
    }

    return (
        <button onClick={deleteHandler}>Delete</button>
    )
}

export default Delete;