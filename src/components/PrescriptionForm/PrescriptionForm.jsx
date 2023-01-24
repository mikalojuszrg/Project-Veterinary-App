import styles from "./PrescriptionForm.module.scss";
import { GrClose } from "react-icons/gr";
import Button from "../Button/Button";

const PrescriptionForm = ({
  setSelectedMed,
  meds,
  onClick,
  comment,
  setComment,
}) => {
  return (
    <form className={styles.form}>
      <span className={styles.form__closeButton} onClick={onClick}>
        <GrClose />
      </span>
      <h2 className={styles.form__heading}>Prescription form</h2>
      <select onChange={(e) => setSelectedMed(e.target.value)}>
        {meds.map((med) => {
          return (
            <option key={med.id} value={med.name}>
              {med.name}
            </option>
          );
        })}
      </select>

      <textarea
        type="text"
        name="comment"
        placeholder="Enter your comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <p className={styles.form__warning}>
        <strong>WARNING: ADDING PRESCRIPTION IS CURRENTLY UNAVAILABLE</strong>
      </p>
      <Button
        disabled={true}
        active={false}
        type="submit"
        className={styles.form__openButton}
      >
        ADD PRESCRIPTION
      </Button>
    </form>
  );
};

export default PrescriptionForm;
