import styles from "./PrescriptionForm.module.scss";
import { GrClose } from "react-icons/gr";
import Button from "../Button/Button";
import { useState } from "react";

const PrescriptionForm = ({
  comment,
  setComment,
  logData,
  meds,
  onClick,
  handleSubmit,
  id,
}) => {
  const [formValues, setFormValues] = useState({
    med: "",
    comment: "",
    description: "",
    status: "",
    pet_id: id,
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e) => {
    setFormValues({ ...formValues, med: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formValues);
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <span className={styles.form__closeButton} onClick={onClick}>
        <GrClose />
      </span>
      <h2 className={styles.form__heading}>Prescription form</h2>
      <select onChange={handleSelectChange} value={formValues.med}>
        {meds.map((med) => {
          return (
            <option key={med.id} value={med.name}>
              {med.name}
            </option>
          );
        })}
      </select>
      <textarea
        onChange={handleChange}
        type="text"
        name="status"
        value={formValues.status}
        placeholder="What's the status?"
      />
      <textarea
        onChange={handleChange}
        type="text"
        value={formValues.description}
        name="description"
        placeholder="Describe the symptoms"
      />
      <textarea
        onChange={handleChange}
        type="text"
        name="comment"
        value={formValues.comment}
        placeholder="Enter your comment..."
      />
      <Button active={false} type="submit" className={styles.form__openButton}>
        ADD PRESCRIPTION
      </Button>
    </form>
  );
};

export default PrescriptionForm;
