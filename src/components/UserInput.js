import React from "react";
import { Link } from "react-router-dom";

const UserInput = ({
  sequence,
  handleInput,
  handleSubmit,
  userSequence,
  resetKeyboard,
  undo,
  notification,
}) => {
  return (
    <div className="user-input-container">
      <div className="show-input">
        {notification ? (
          <div className="notification">Please Create Full Sequence</div>
        ) : (
          userSequence.map((num) => (
            <div key={num} className="chosen-nums">
              {num}
            </div>
          ))
        )}
      </div>
      <div className="user-keyboard">
        {sequence.map((num) => (
          <button
            key={num}
            onClick={() => handleInput(num)}
            className="input-btn"
          >
            {num}
          </button>
        ))}
      </div>
      <div className="submit-btn-container">
        <div
          className="btn-rotate"
          data-back="Go"
          data-front="Submit"
          onClick={handleSubmit}
        />
      </div>
      <div className="reset-and-level-btn-container">
        <div
          className="btn-rotate btns-margin"
          data-back="undo"
          data-front="undo last <<"
          onClick={undo}
        />
        <div
          className="btn-rotate btns-margin"
          data-back="Reset"
          data-front="Reset Keyboard"
          onClick={resetKeyboard}
        />
        <Link to="/">
          <div
            className="btn-rotate btns-margin"
            data-back="Lets Change"
            data-front="Change Level"
            onClick={resetKeyboard}
          />
        </Link>
      </div>
    </div>
  );
};

export default UserInput;
