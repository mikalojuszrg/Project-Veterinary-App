import styles from "./PetHealthCard.module.scss";

const PetHealthCard = ({ status, description }) => {
  return (
    <div className={styles.card}>
      <h2>{status}</h2>
      <p>{description}</p>
    </div>
  );
};

export default PetHealthCard;
