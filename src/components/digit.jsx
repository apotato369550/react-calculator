import React from "react";

const Digit = ({number, result, setResult, currentOperation, setCurrentOperation, operators, setOperators, expression, setExpression}) => {
    const digitHandler = (event) => {
        console.log("digitHandler has been pressed")

        if(currentOperation != ""){
            setOperators([...operators, currentOperation])
            setExpression([...expression, currentOperation])
            setCurrentOperation("")
        }

        if(result === "0" && event.target.value !== "00"){
            setResult(event.target.value)
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