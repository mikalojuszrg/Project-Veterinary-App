import styles from "./DonateForm.module.scss";
import { GrClose } from "react-icons/gr";
import Button from "../Button/Button";
import { useContext } from "react";
import { DonationContext } from "../../contexts/DonationContext";

const DonateForm = ({
  onClick,
  donationName,
  setDonationName,
  donationSum,
  setDonationSum,
}) => {
  const donationInfo = {
    name: donationName,
    sum: donationSum,
  };

  const { toggleDonated, donated } = useContext(DonationContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleDonated(donationInfo);
    localStorage.setItem("Donation Info", JSON.stringify(donationInfo));
    console.log(donated);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <span className={styles.form__closeButton} onClick={onClick}>
        <GrClose />
      </span>
      <h2 className={styles.form__heading}>Donation Form</h2>
      <div className={styles.form__donateSelection}>
        <div
          onClick={() => setDonationSum("25 $")}
          className={
            donationSum === "25 $"
              ? styles.form__selectedDonation
              : styles.form__unselectedDonation
          }
        >
          25 $
        </div>
        <div
          onClick={() => setDonationSum("50 $")}
          className={
            donationSum === "50 $"
              ? styles.form__selectedDonation
              : styles.form__unselectedDonation
          }
        >
          50 $
        </div>
        <div
          onClick={() => setDonationSum("75 $")}
          className={
            donationSum === "75 $"
              ? styles.form__selectedDonation
              : styles.form__unselectedDonation
          }
        >
          75 $
        </div>
        <div
          onClick={() => setDonationSum("100 $")}
          className={
            donationSum === "100 $"
              ? styles.form__selectedDonation
              : styles.form__unselectedDonation
          }
        >
          100 $
        </div>
      </div>
      <input
        type="text"
        value={donationName}
        onChange={(e) => setDonationName(e.target.value)}
        placeholder="Insert your name"
      />
      <Button
        active={false}
        type="submit"
        className={styles.form__openButton}
        onClick={onClick}
      >
        DONATE
      </Button>
    </form>
  );
};

export default DonateForm;
