import React from "react";

const Result = ({result, currentOperation}) => {
    return (
        <div>
            <div>Result: {result}</div>
            <div>Current Operation: {currentOperation}</div>
        </div>
    )
}

export default Result;