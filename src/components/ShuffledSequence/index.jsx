import React, { useState, useEffect } from "react";

import styles from "./ShuffledSequence.module.scss";

const ShuffledSequence = ({ sequence, seconds }) => {
  const [secondsLeft, setSecondsLeft] = useState(seconds);

  useEffect(() => setSecondsLeft(seconds), [seconds]);

  useEffect(() => {
    if (!secondsLeft) return;

    const countdown = setInterval(() => setSecondsLeft(secondsLeft - 1), 1000);

    return () => clearInterval(countdown);
  }, [secondsLeft]);

  const fontColor = secondsLeft > 3 ? { color: "green" } : { color: "red" };

  return (
    <>
      <div className={styles.timer}>
        <span style={fontColor}>{secondsLeft}</span>s
      </div>
      <div className={styles.shuffledContainer}>
        <div className={styles.shuffledNums}>
          {sequence.map((num) => (
            <div key={num} className={styles.num}>
              {num}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShuffledSequence;
