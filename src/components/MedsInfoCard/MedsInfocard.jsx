import styles from "./MedsInfocard.module.scss";

const MedsInfocard = ({ med }) => {
  return (
    <div className={styles.card}>
      <h2>{med.name}</h2>
      <p>{med.description}</p>
    </div>
  );
};

export default MedsInfocard;
