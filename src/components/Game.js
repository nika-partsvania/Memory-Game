import React, { useState } from "react";

import GetReady from "./GetReady";
import UserInput from "./UserInput";
import ShuffledSequence from "./ShuffledSequence";
import Result from "./Result";

const Game = ({ sequence, level }) => {
  const [initialSequence, setInitialSequence] = useState(sequence);
  const [shuffledSequence, setShuffledSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [seconds, setSeconds] = useState(9);

  const [ready, setReady] = useState(false);
  const [showShuffled, setShowShuffled] = useState(false);
  const [result, setResult] = useState("");
  const [submitErrorNotification, setSubmitErrorNotification] = useState(false);

  const shuffle = (arr) => {
    let m = arr.length,
      t,
      i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = arr[m];
      arr[m] = arr[i];
      arr[i] = t;
    }
    return arr;
  };

  const compareSequences = (a, b) => {
    return a.length === b.length && a.every((val, index) => val === b[index]);
  };

  const startHandler = () => {
    const initialSeqCopy = [...initialSequence];
    const shuffled = shuffle(initialSeqCopy);
    setShuffledSequence(shuffled);
    setReady(true);
    setShowShuffled(true);
    setTimeout(() => setShowShuffled(false), 9000);
  };

  const handleInput = (num) => {
    setUserSequence([...userSequence, num]);
    setInitialSequence(initialSequence.filter((item) => item !== num));
  };

  const handleSubmit = () => {
    if (userSequence.length !== shuffledSequence.length) {
      setSubmitErrorNotification(true);
      setTimeout(() => setSubmitErrorNotification(false), 2000);
    } else if (compareSequences(shuffledSequence, userSequence)) {
      setResult("WIN");
    } else {
      setResult("LOSE");
    }
  };

  const resetKeyboard = () => {
    setUserSequence([]);
    setInitialSequence(sequence);
  };

  const undo = () => {
    if (initialSequence.length !== sequence.length) {
      const userSeqCopy = [...userSequence];
      const popped = userSeqCopy.pop();
      setUserSequence(userSeqCopy);
      setInitialSequence([...initialSequence, popped].sort((a, b) => a - b));
    }
  };

  return (
    <>
      {result ? (
        <Result result={result} />
      ) : ready ? (
        <div>
          {showShuffled ? (
            <ShuffledSequence sequence={shuffledSequence} seconds={seconds} />
          ) : (
            <UserInput
              sequence={initialSequence}
              handleInput={handleInput}
              handleSubmit={handleSubmit}
              userSequence={userSequence}
              resetKeyboard={resetKeyboard}
              undo={undo}
              notification={submitErrorNotification}
            />
          )}
        </div>
      ) : (
        <GetReady level={level} startHandler={startHandler} seconds={seconds} />
      )}
    </>
  );
};

export default Game;
