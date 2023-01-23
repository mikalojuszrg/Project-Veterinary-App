import styles from "./LogForm.module.scss";
import { GrClose } from "react-icons/gr";
import Button from "../Button/Button";

const LogForm = ({
  handleLogSubmit,
  logStatus,
  logDescription,
  setLogDescription,
  setLogStatus,
  onClick,
}) => {
  return (
    <form onSubmit={handleLogSubmit} className={styles.form}>
      <span className={styles.form__closeButton} onClick={onClick}>
        <GrClose />
      </span>
      <h2 className={styles.form__heading}>Log form</h2>
      <textarea
        type="text"
        value={logStatus}
        onChange={(e) => setLogStatus(e.target.value)}
        placeholder="What's the status?"
      />
      <textarea
        type="text"
        value={logDescription}
        onChange={(e) => setLogDescription(e.target.value)}
        placeholder="Describe the symptoms"
      />
      <Button
        active={false}
        type="submit"
        className={styles.form__openButton}
        onClick={onClick}
      >
        ADD LOG
      </Button>
    </form>
  );
};

export default LogForm;
