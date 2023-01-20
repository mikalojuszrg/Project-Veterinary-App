import styles from "./Button.module.scss";

const Button = ({ children, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={active ? styles.button__active : styles.button__inactive}
    >
      {children}
    </button>
  );
};

export default Button;
