import { Link } from "react-router-dom";
import Button from "../Button";

import styles from "./GetReady.module.scss";

const GetReady = ({ level, startHandler, seconds }) => {
  return (
    <div className={styles.getReadyContainer}>
      <div className={styles.header}>
        <h1>
          Level: <span style={{ color: "red" }}>{level}</span>
        </h1>
        <Link to="/">
          <div className={styles.lvlChangeBtn}>Change Level</div>
        </Link>
      </div>
      <div className={styles.instructionsContainer}>
        <p className={styles.instruction}>
          You Have <span className={styles.seconds}>{seconds} Seconds</span> To
          Memorize The Sequence
        </p>
        <p className={styles.instruction}>Are You Ready?!</p>
        <Button onClick={startHandler} txtBack="Start" txtFront="Ready" />
      </div>
    </div>
  );
};

export default GetReady;
