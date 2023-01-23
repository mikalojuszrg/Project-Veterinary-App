import styles from "./MedsForm.module.scss";
import { GrClose } from "react-icons/gr";
import Button from "../Button/Button";

const MedsForm = ({
  handleSubmit,
  medsName,
  medsDescription,
  setMedsDescription,
  setMedsName,
  onClick,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <span className={styles.form__closeButton} onClick={onClick}>
          <GrClose />
        </span>
        <h2 className={styles.form__heading}>Medication form</h2>
        <input
          type="text"
          value={medsName}
          placeholder="Name"
          onChange={(e) => setMedsName(e.target.value)}
        />
        <input
          type="text"
          value={medsDescription}
          placeholder="Description"
          onChange={(e) => setMedsDescription(e.target.value)}
        />
        <Button
          active={false}
          type="submit"
          className={styles.form__openButton}
        >
          ADD MEDICATION
        </Button>
      </form>
    </div>
  );
};

export default MedsForm;
