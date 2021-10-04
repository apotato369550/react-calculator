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

    return (
        <button className="row" onClick={addDecimal}>.</button>
    )
}

export default Decimal;