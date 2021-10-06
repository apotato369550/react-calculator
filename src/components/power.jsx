import React from 'react';

const Power = ({power, setPower, setResult}) =>{
    const powerHandler = (event) => { 
        setPower(!power)
        if(power){
            setResult("")
        } else {
            setResult("0")
        }
        return;
    }

    return (
        <button className="col btn btn-danger" onClick={powerHandler}>On/Off</button>
    )
}

export default Power;