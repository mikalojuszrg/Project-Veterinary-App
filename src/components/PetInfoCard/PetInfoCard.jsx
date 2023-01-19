import moment from "moment";
import Button from "../Button/Button";

const PetInfoCard = ({ pet }) => {
  return (
    <div>
      <h2>{pet.name}</h2>
      <p>{moment(pet.dob).format("MMMM Do, YYYY")}</p>
      <p>{pet.client_email}</p>
      <div>
        <Button active={true}>VIEW LOG</Button>
        <Button active={false}>DELETE</Button>
      </div>
    </div>
  );
};

export default PetInfoCard;
