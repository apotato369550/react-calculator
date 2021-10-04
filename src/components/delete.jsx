import React from 'react';

const Delete = ({result, setResult, power}) =>{
    const deleteHandler = (event) => { 
        if(!power){
            return;
        }
        console.log("Delete handler has been pressed");
        // result/newresult is not a string
        if(result.length > 1 && result !== "0"){
            setResult(result.substr(0, result.length - 1));
        } 

        if(result.length === 1){
            setResult("0")
        }
        return;
    }

    return (
        <button className="row" onClick={deleteHandler}>Delete Digit</button>
    )
}

export default Delete;