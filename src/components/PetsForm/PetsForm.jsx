import styles from "./PetsForm.module.scss";
import { GrClose } from "react-icons/gr";
import Button from "../Button/Button";

const PetsForm = ({
  petName,
  setPetName,
  petAge,
  setPetAge,
  petEmail,
  setPetEmail,
  handleSubmit,
  onClick,
}) => {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <button className={styles.form__closeButton} onClick={onClick}>
        <GrClose />
      </button>
      <h2 className={styles.form__heading}>Pet form</h2>
      <input
        type="text"
        value={petName}
        onChange={(e) => setPetName(e.target.value)}
        placeholder="Pet name"
      />
      <input
        type="text"
        value={petAge}
        onChange={(e) => setPetAge(e.target.value)}
        placeholder="Pet age"
      />
      <input
        type="email"
        value={petEmail}
        onChange={(e) => setPetEmail(e.target.value)}
        placeholder="Email"
      />
      <Button active={false} type="submit" className={styles.form__openButton}>
        ADD PET
      </Button>
    </form>
  );
};

export default PetsForm;
