import React from "react";

const Digit = ({number, result, setResult}) => {
    const digitHandler = (event) => {
        console.log("digitHandler has been pressed")
        setResult(result + "" + event.target.value);
        return;
    }

    return (
        <button value={number} onClick={digitHandler}>{number}</button>
    )
}

export default Digit;