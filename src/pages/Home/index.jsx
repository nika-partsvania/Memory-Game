import { Link } from "react-router-dom";
import Button from "../../components/Button";

import styles from "./Home.module.scss";

const HomePage = () => {
  const levels = ["easy", "medium", "hard", "legendary"];
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>
        <span style={{ color: "red" }}>MEMORY</span> GAME
      </h1>
      <h2 className={styles.subTitle}>Choose Level!</h2>
      <div className={styles.levels}>
        {levels.map((level) => (
          <div className={styles.btn} key={level}>
            <Link to={`/${level}`}>
              <Button txtBack="Start" txtFront={`${level}`} />
            </Link>
          </div>
        ))}
      </div>
      <span className={styles.author}>Made By Nika P.</span>
    </div>
  );
};

export default HomePage;
