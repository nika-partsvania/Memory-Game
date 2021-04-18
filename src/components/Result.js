import React from "react";
import { Link } from "react-router-dom";

const Result = ({ result }) => {
  const fontColor = { color: result === "WIN" ? "green" : "red" };
  return (
    <div className="result-page">
      <div className="result-header">
        <h2>
          You <span style={fontColor}>{`${result}`}</span>
        </h2>
      </div>
      <div>
        <Link to="/">
          <div
            className="btn-rotate"
            data-back="Go"
            data-front="Play Again"
          />
        </Link>
      </div>
    </div>
  );
};

export default Result;
