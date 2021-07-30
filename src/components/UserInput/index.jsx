import Button from "../Button";

import styles from "./UserInput.module.scss";

const UserInput = ({
  keyboard,
  handleInput,
  handleSubmit,
  userSequence,
  undo,
  notification,
}) => {
  return (
    <div className={styles.userInputContainer}>
      <div className={styles.inputContainer}>
        {notification ? (
          <div className={styles.notification}>Please Create Full Sequence</div>
        ) : (
          userSequence.map((num) => (
            <div key={num} className={styles.chosenNums}>
              {num}
            </div>
          ))
        )}
      </div>
      <div className={styles.keyboard}>
        {keyboard.map((num) => (
          <button
            key={num}
            onClick={() => handleInput(num)}
            className={styles.key}
          >
            {num}
          </button>
        ))}
      </div>
      <div className={styles.btnContainer}>
        <div className={styles.btnMargin}>
          <Button txtFront="undo last <<" txtBack="undo" onClick={undo} />
        </div>
        <div className={styles.btnMargin}>
          <Button txtFront="Submit" txtBack="Go" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default UserInput;
