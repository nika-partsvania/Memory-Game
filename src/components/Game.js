import React, { useState } from "react";

import GetReady from "./GetReady";
import UserInput from "./UserInput";
import ShuffledSequence from "./ShuffledSequence";
import Result from "./Result";

import { shuffle, compareSequences } from "../helperFunctions";

const Game = ({ sequence, level }) => {
  const [initialSequence, setInitialSequence] = useState(sequence);
  const [userKeyboard, setUserKeyboard] = useState(sequence);
  const [shuffledSequence, setShuffledSequence] = useState([]);
  const [usersChosenSequence, setUsersChosenSequence] = useState([]);
  const [seconds, setSeconds] = useState(9);

  const [ready, setReady] = useState(false);
  const [showShuffled, setShowShuffled] = useState(false);
  const [result, setResult] = useState("");
  const [errorNotification, setErrorNotification] = useState(false);

  const handleStart = () => {
    const initialSeqCopy = [...initialSequence];
    const shuffled = shuffle(initialSeqCopy);
    setShuffledSequence(shuffled);
    setReady(true);
    setShowShuffled(true);
    setTimeout(() => setShowShuffled(false), seconds * 1000);
  };

  const handleInput = (num) => {
    setUsersChosenSequence([...usersChosenSequence, num]);
    setUserKeyboard(userKeyboard.filter((item) => item !== num));
  };

  const handleSubmit = () => {
    if (usersChosenSequence.length !== shuffledSequence.length) {
      setErrorNotification(true);
      setTimeout(() => setErrorNotification(false), 2000);
    } else if (compareSequences(shuffledSequence, usersChosenSequence)) {
      setResult("WIN");
    } else {
      setResult("LOSE");
    }
  };

  const resetKeyboard = () => {
    setUsersChosenSequence([]);
    setUserKeyboard(sequence);
  };

  const undo = () => {
    if (userKeyboard.length !== sequence.length) {
      const userSeqCopy = [...usersChosenSequence];
      const popped = userSeqCopy.pop();
      setUsersChosenSequence(userSeqCopy);
      setUserKeyboard([...userKeyboard, popped].sort((a, b) => a - b));
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
              keyboard={userKeyboard}
              handleInput={handleInput}
              handleSubmit={handleSubmit}
              userSequence={usersChosenSequence}
              resetKeyboard={resetKeyboard}
              undo={undo}
              notification={errorNotification}
            />
          )}
        </div>
      ) : (
        <GetReady level={level} startHandler={handleStart} seconds={seconds} />
      )}
    </>
  );
};

export default Game;
