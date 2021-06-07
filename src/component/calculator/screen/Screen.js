import React from "react";

import ComputationScreen from "./ComputationScreen";
import ResultScreen from "./ResultScreen";

const Screen = ({ result, equation }) => {
  return (
    <div className="screen">
      <ResultScreen>{result}</ResultScreen>
      <ComputationScreen>{equation}</ComputationScreen>
    </div>
  );
};

export default Screen;
