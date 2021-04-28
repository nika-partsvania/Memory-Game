import React, { useState, useEffect } from "react";

const ShuffledSequence = ({ sequence, seconds }) => {
  const [secondsLeft, setSecondsLeft] = useState(seconds);

  useEffect(() => {
    if (!secondsLeft) return;

    const countdown = setInterval(() => setSecondsLeft(secondsLeft - 1), 1000);

    return () => clearInterval(countdown);
  });

  const fontColor = secondsLeft > 3 ? { color: "green" } : { color: "red" };

  return (
    <>
      <div className="timer">
        <span style={fontColor}>{secondsLeft}</span>s
      </div>
      <div className="shuffled-container">
        <div className="shuffled-nums">
          {sequence.map((num) => (
            <div key={num} className="nums">
              {num}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShuffledSequence;
