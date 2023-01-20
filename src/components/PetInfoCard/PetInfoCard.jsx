import moment from "moment";
import styles from "./PetInfoCard.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const PetInfoCard = ({ pet, handleDelete }) => {
  const { id } = pet;

  const deletePetData = () => {
    fetch(`https://glittery-dull-snickerdoodle.glitch.me/v1/pets/${id}`, {
      method: "PUT", // update to PUT
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        archived: 1, // send the archived field with value 1
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete pet data");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          handleDelete(pet);
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
