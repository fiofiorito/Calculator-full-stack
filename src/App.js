import React from "react";
import { useState, useEffect } from "react";
import Button from './components/Button';
import { Operator, ResetButton } from './components/Button';
import Screen from './components/Screen';
import './style.css'

const buttonsData = [
  { type: "button", character: "1" },
  { type: "button", character: "2" },
  { type: "button", character: "3" },
  { type: "operator", character: " + " },
  { type: "button", character: "4" },
  { type: "button", character: "5" },
  { type: "button", character: "6" },
  { type: "operator", character: " - " },
  { type: "button", character: "7" },
  { type: "button", character: "8" },
  { type: "button", character: "9" },
  { type: "operator", character: " x " },
  { type: "reset", character: "=" },
  { type: "button", character: "0" },
  { type: "operator", character: " ÷ " }
]

function App() {
  // eslint-disable-next-line
  const [backendData, setBackendData] = useState();
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    )
  }, []);

  // const [result, setResult] = useState("Hello");

  const [inputExpression, setInputExpression] = useState("");
  const handleButtonPress = (character) => {
    setInputExpression((prevExpression) => prevExpression + character);
  }

  return <div className='layout-div'>
    <Screen expression={inputExpression} />
    <div className='calculator-div'>
      {buttonsData.map((button, index) => {
        switch (button.type) {
          case "button":
            return <Button onButtonPress={handleButtonPress} key={index} character={button.character} />
          case "operator":
            return <Operator onButtonPress={handleButtonPress} key={index} character={button.character} />
          case "reset":
            return <ResetButton onButtonPress={handleButtonPress} key={index} character={button.character} />
          default: return null;
        }
      })}
    </div>
  </div>
}

export default App;