import React from "react";
import { Link } from "react-router-dom";

const GetReady = ({ level, startHandler, seconds }) => {
  return (
    <div className="ready-page">
      <div className="ready-page-header">
        <h1>{`Level: ${level}`}</h1>
        <Link to="/">
          <p className="change-level">Change Level</p>
        </Link>
      </div>
      <div className="ready-page-instruction">
        <p>
          You Have <span className="time">{seconds} Seconds</span> To Memorize
          The Sequence
        </p>
        <p>Are You Ready?!</p>
        <div
          onClick={startHandler}
          className="btn-rotate"
          data-back="Start"
          data-front="Ready"
        />
      </div>
    </div>
  );
};

export default GetReady;
