import moment from "moment";
import styles from "./PetInfoCard.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const PetInfoCard = ({ pet, handleDelete }) => {
  const { id } = pet;

  const deletePetData = () => {
    handleDelete(id);
  };

  return (
    <div className={styles.card}>
      <h2>{pet.name}</h2>
      <p>{moment(pet.dob).format("MMMM Do, YYYY")}</p>
      <p>{pet.client_email}</p>
      <div className={styles.card__buttons}>
        <Link to={`/pets/${pet.id}`}>
          <Button active={true}>VIEW LOG</Button>
        </Link>
        <Button onClick={deletePetData} active={false}>
          DELETE
        </Button>
      </div>
    </div>
  );
};

export default PetInfoCard;
