import { Link } from "react-router-dom";
import Button from "../Button";

import styles from "./Result.module.scss";

const Result = ({ result }) => {
  const fontColor = { color: result === "WIN" ? "green" : "red" };
  return (
    <div className={styles.resultContainer}>
      <h2 className={styles.result}>
        You <span style={fontColor}>{`${result}`}</span>
      </h2>
      <Link to="/">
        <Button txtFront="Play Again" txtBack="Go" />
      </Link>
    </div>
  );
};

export default Result;
