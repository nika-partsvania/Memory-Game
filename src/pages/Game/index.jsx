import React, { useState, useEffect, useCallback } from "react";

import GetReady from "../../components/GetReady";
import UserInput from "../../components/UserInput";
import ShuffledSequence from "../../components/ShuffledSequence";
import Result from "../../components/Result";

import { shuffle, compareSequences } from "../../helperFunctions";

const Game = ({ sequence, level, secondsToMemorize }) => {
  const [initialSequence, setInitialSequence] = useState([]);
  const [keyboard, setKeyboard] = useState(sequence);
  const [shuffledSequence, setShuffledSequence] = useState([]);
  const [usersChosenSequence, setUsersChosenSequence] = useState([]);
  const [seconds, setSeconds] = useState(0);

  const [isReady, setIsReady] = useState(false);
  const [showShuffled, setShowShuffled] = useState(false);
  const [showResult, setShowResult] = useState("");
  const [errorNotification, setErrorNotification] = useState(false);

  useEffect(() => {
    setInitialSequence(sequence);
    setSeconds(secondsToMemorize);
  }, [sequence, secondsToMemorize]);

  const handleStart = () => {
    const initialSeqCopy = [...initialSequence];
    const shuffled = shuffle(initialSeqCopy);
    setShuffledSequence(shuffled);
    setIsReady(true);
    setShowShuffled(true);
    setTimeout(() => setShowShuffled(false), seconds * 1000);
  };

  const handleInput = (num) => {
    setUsersChosenSequence([...usersChosenSequence, num]);
    setKeyboard(keyboard.filter((item) => item !== num));
  };

  const handleSubmit = useCallback(() => {
    if (usersChosenSequence.length !== shuffledSequence.length) {
      setErrorNotification(true);
      setTimeout(() => setErrorNotification(false), 2000);
    } else if (compareSequences(shuffledSequence, usersChosenSequence)) {
      setShowResult("WIN");
    } else {
      setShowResult("LOSE");
    }
  }, [usersChosenSequence, shuffledSequence]);

  const undo = () => {
    if (keyboard.length !== initialSequence.length) {
      const lastChosenNum = usersChosenSequence[usersChosenSequence.length - 1];
      const updatedChosenSequence = usersChosenSequence.filter(
        (num) => num !== lastChosenNum
      );
      const updatedKeyboard = [...keyboard, lastChosenNum].sort(
        (a, b) => a - b
      );

      setUsersChosenSequence(updatedChosenSequence);
      setKeyboard(updatedKeyboard);
    }
  };

  return (
    <>
      {!isReady && (
        <GetReady level={level} startHandler={handleStart} seconds={seconds} />
      )}
      {showShuffled && isReady && (
        <ShuffledSequence sequence={shuffledSequence} seconds={seconds} />
      )}
      {isReady && !showShuffled && !showResult && (
        <UserInput
          keyboard={keyboard}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          userSequence={usersChosenSequence}
          undo={undo}
          notification={errorNotification}
        />
      )}
      {showResult && <Result result={showResult} />}
    </>
  );
};

export default Game;
