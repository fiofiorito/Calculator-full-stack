import { useEffect, useState } from "react";

function Button(props) {
    const [button, setButton] = useState();

    useEffect(() => {
        console.log(button);
    });

    return <div className="num-button" onClick={(click) => {
        setButton(click.target.value);
    }}>{props.character}</div>
}

function Operator(props) {
    return <div className="operator-button">{props.character}</div>
}

function ResetButton(props) {
    return <div className=" reset-button">{props.character}</div>
}

export default Button;
export { Operator, ResetButton }