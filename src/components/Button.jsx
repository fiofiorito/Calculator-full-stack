import { useEffect, useState } from "react";


function Button(props) {

    function handleClick() {
        console.log(props.character);
    }

    return <div className="num-button" onClick={handleClick}>{props.character}</div>
}

function Operator(props) {
    function handleClick() {
        console.log(props.character);
    }
    return <div className="operator-button" onClick={handleClick}>{props.character}</div>
}

function ResetButton(props) {
    function handleClick() {
        console.log(props.character);
    }
    return <div className=" reset-button" onClick={handleClick}>{props.character}</div>
}

export default Button;
export { Operator, ResetButton }