import { useEffect, useState } from "react";

function TestInput() {
    const [number, setNumber] = useState('');

    useEffect(() => {
        console.log(number);
    });


    return <div>
        <div className="screen-div">
            <h1>{number}</h1>
        </div>
        <input placeholder="try some numbers" value={number} name="tryNumbers" type="text" onChange={(e) => {
            setNumber(e.target.value);
        }}></input>
    </div>
}

export default TestInput;