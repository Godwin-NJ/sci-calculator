import React, { useState, useEffect } from "react";
import Screen from "./screen/Screen";
import Keypad from "../calculator/keypad/Keypad";

const Calculator = () => {
  const [equation, setEquation] = useState("");
  const [result, setResult] = useState(0);

  const onButtonPress = (e) => {
    let equations = equation;
    // console.log(equations);
    const pressedBtn = e.target.innerHTML;
    // console.log(pressedBtn);
    if (pressedBtn === "C") {
      return clear();
    } else if ((pressedBtn >= "0" && pressedBtn <= "9") || pressedBtn === ".") {
      // return (equations += pressedBtn);
      return setEquation((equations += pressedBtn));
    } else if (["+", "-", "*", "/", "%", "←"].indexOf(pressedBtn) !== -1) {
      return setEquation((equations += " " + pressedBtn + " "));
    } else if (pressedBtn === "=") {
      try {
        const evalResult = eval(equations);
        const results = Number.isInteger(evalResult)
          ? evalResult
          : evalResult.toFixed(2);
        return setResult(results);
        // return setEquation("");
      } catch (error) {
        alert("Invalid Mathematical equation ");
        return setResult(0);
      }
    } else {
      equations = equations.trim();
      equations = equations.substr(0, equations.length - 1);
    }
    setEquation({ equation: equations });
  };

  const clear = () => {
    setEquation("");
    setResult(0);
  };
  // const removeNum = (e) => {
  //   let num = { equation };
  //   let soln = num.slice(0, -1);
  //   return setEquation(soln);
  // };

  useEffect(() => {
    setEquation("");
    setResult(0);
  }, []);

  return (
    <div className="calculator">
      <Screen equation={equation} result={result} />
      <Keypad onButtonPress={onButtonPress} />
    </div>
  );
};

export default Calculator;
