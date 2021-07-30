import styles from "./Button.module.scss";

const Button = ({ txtFront, txtBack, ...args }) => {
  return (
    <div
      className={styles.btnRotate}
      data-back={txtBack}
      data-front={txtFront}
      {...args}
    />
  );
};

export default Button;
