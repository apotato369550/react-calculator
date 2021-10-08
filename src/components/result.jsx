import React from "react";

const Result = ({result, currentOperation}) => {
    return (
        <div className="row">
            <span className="col m-2">{result}</span>
            <span className="col m-2">{currentOperation}</span>
        </div>
    )
}

export default Result;