import React from "react";

const Digit = ({number, result, setResult, currentOperation, setCurrentOperation, expression, setExpression, power}) => {
    const digitHandler = (event) => {
        if(!power){
            return;
        }
        console.log("digitHandler has been pressed")

        if(currentOperation != ""){
            setExpression([...expression, currentOperation])
            setCurrentOperation("")
        }

        if(result === "0" ){
            if(event.target.value === "00" || event.target.value == "0"){
                setResult("0")
            } else {
                setResult(event.target.value)
            }
        } else {
            setResult(result + "" + event.target.value);
        }

        return;
    }

    return (
        <button value={number} onClick={digitHandler}>{number}</button>
    )
}

export default Digit;