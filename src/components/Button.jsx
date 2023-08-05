
function Button(props) {
    // function handleClick() {
    //     console.log(props.character);
    // }
    return <div className="num-button" onClick={() => { props.onButtonPress(props.character) }}>{props.character}</div>
}

function Operator(props) {
    // function handleClick() {
    //     console.log(props.character);
    // }
    return <div className="operator-button" onClick={() => { props.onButtonPress(props.character) }}>{props.character}</div>
}

function ResetButton(props) {
    // function handleClick() {
    //     console.log(props.character);
    // }
    return <div className=" reset-button" onClick={() => { props.onButtonPress(props.character) }}>{props.character}</div>
}

export default Button;
export { Operator, ResetButton }