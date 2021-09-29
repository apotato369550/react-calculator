import React, { useEffect } from "react";

const Equals = ({result, setResult, digits, setDigits, expression, setExpression, operator, setOperator, currentOperation, setCurrentOperation}) => {

    const precedence = (operator) => {
        if(operator == "+" || operator == "-"){
            return 1;
        } else if(operator == "*" || operator == "/"){
            return 2;
        }
    
        return -1;
    }

    const solve = () => {
        console.log("SOLVING RIGHT NOW")
        console.log("EXPRESSION FROM SOLVE: " + expression)
        let postFix = [];
        let stack = [];
        for(let i = 0; i < expression.length; i++){
            let scanned = expression[i];
            if(!isNaN(parseFloat(scanned))){
                postFix.push(scanned);
            } else {
                while(stack.length > 0 && precedence(scanned) <= precedence(stack[stack.length - 1])){
                    postFix.push(stack[stack.length - 1])
                    stack.pop();
                }
                stack.push(scanned)
            }
        }

        stack = []; // stack
        for(let i = 0; i < postFix.length; i++){
            let e = postFix[i];
            if(!isNaN(parseFloat(e))){
                console.log("Operand: " + e);
                stack.push(e)
            } else {
                let operand2 = parseFloat(stack.pop());
                let operand1 = parseFloat(stack.pop());
                console.log("Operand1: " + operand1);
                // operand 2 is undefined
                // it's not registering the 3
                console.log("Operand2: " + operand2);

                console.log("OperatOR: " + e);
                
                let value;
                if(e === "+"){
                    value = operand1 + operand2;
                } else if(e === "-"){
                    value = operand1 - operand2;
                } else if(e === "*"){
                    value = operand1 * operand2;
                } else if(e === "/"){
                    value = operand1 / operand2;
                }
                stack.push(value)
            }
        }
        const finalResult = stack.pop();
        setResult(finalResult)
        console.log(finalResult)

        console.log("POSTFIX MOTHERFUCKER: " + postFix)
    }


    const equalsHandler = (event) => {
        setDigits([...digits, result, "="])
        setExpression([...expression, result, "="])
        setCurrentOperation("");

        console.log("EXPRESSION: " + expression)

        // solve expresion, digits, and operators below
        // figure out logic for doing pemdas here
        // convert to postfix first
        /*
        let postFix = [];
        let stack = [];

        // test this
        for(let i = 0; i < expression.length; i++){
            let scanned = expression[i];
            if(!isNaN(parseFloat(scanned))){
                postFix.push(scanned);
            } else {
                while(stack.length > 0 && precedence(scanned) <= precedence(stack[stack.length - 1])){
                    postFix.push(stack[stack.length - 1])
                    stack.pop();
                }
                stack.push(scanned)
            }
        }

        console.log("POSTFIX MOTHERFUCKER: " + postFix)

        stack = []; // stack
        for(let i = 0; i < expression.length; i++){
            let e = expression[i];
            if(!isNaN(parseFloat(e))){
                console.log("Operand: " + e);
                stack.push(e)
            } else {
                let operand2 = parseFloat(stack.pop());
                let operand1 = parseFloat(stack.pop());
                console.log("Operand1: " + operand1);
                // operand 2 is undefined
                // it's not registering the 3
                console.log("Operand2: " + operand2);

                console.log("OperatOR: " + e);
                
                let value;
                if(e === "+"){
                    value = operand1 + operand2;
                } else if(e === "-"){
                    value = operand1 - operand2;
                } else if(e === "*"){
                    value = operand1 * operand2;
                } else if(e === "/"){
                    value = operand1 / operand2;
                }
                stack.push(value)
            }
        }
        const finalResult = stack.pop();
        setResult(finalResult)
        console.log(finalResult)
        */


        // why is this nan?
        // test out program if it doesn't crash react
        // print this to test it out:))))
    }

    useEffect(() => {
        console.log("UseEffect EXPRESSION: " + expression);
        if(expression.includes("=")){
            solve();
        }
    }, [expression]);

    return (
        <button onClick={equalsHandler}>=</button>
    )
}

export default Equals;