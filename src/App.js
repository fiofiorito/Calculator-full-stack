import React from "react";
import { useState, useEffect } from "react";
import Button from './components/Button';
import { Operator, ResetButton } from './components/Button';
import TestInput from "./components/TestInput";
import Screen from './components/Screen';
import './style.css'

const buttonsData = [
  { type: "button", character: "1" },
  { type: "button", character: "2" },
  { type: "button", character: "3" },
  { type: "operator", character: "+" },
  { type: "button", character: "4" },
  { type: "button", character: "5" },
  { type: "button", character: "6" },
  { type: "operator", character: "-" },
  { type: "button", character: "7" },
  { type: "button", character: "8" },
  { type: "button", character: "9" },
  { type: "operator", character: "x" },
  { type: "reset", character: "=" },
  { type: "button", character: "0" },
  { type: "operator", character: "÷" }
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

  const [result, setResult] = useState("Hello");


  return <div className='layout-div'>
    <Screen result={() => {
      const logged = buttonsData.character;
      setResult(logged);
    }} />
    <div className='calculator-div'>
      {buttonsData.map((button, index) => {
        switch (button.type) {
          case "button":
            return <Button key={index} character={button.character} />
          case "operator":
            return <Operator key={index} character={button.character} />
          case "reset":
            return <ResetButton key={index} character={button.character} />
          default: return null;
        }
      })}
    </div>
  </div>
}

export default App;