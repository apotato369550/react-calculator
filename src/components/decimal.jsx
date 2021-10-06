import React from 'react';

const Decimal = ({result, setResult, power}) =>{
    const addDecimal = (event) => {
        if(!power){
            return;
        }
        console.log("Decimal handler has been pressed")
        if(!result.includes(".")){
            console.log("TRue")
            setResult(result + ".");
        }
    }
    
    // figure out why bootstrap aint working on my react application

    return (
        <button className="col btn btn-primary" onClick={addDecimal}>.</button>
    )
}

export default Decimal;