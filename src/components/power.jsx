import React from 'react';

const Power = ({power, setPower, setResult, setExpression, setCurrentOperation }) =>{
    const powerHandler = (event) => { 
        setPower(!power)
        if(power){
            setResult("|")
            setExpression([])
            setCurrentOperation("")
        } else {
            setResult("0")
            setExpression([])
            setCurrentOperation("")
        }
        return;
    }

    return (
        <button className="col btn btn-danger rounded-0 m-1" onClick={powerHandler}>On/Off</button>
    )
}

export default Power;