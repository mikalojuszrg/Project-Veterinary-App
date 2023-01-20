import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PetHealthCard = ({ pet }) => {
  const { id } = useParams();
  const [logData, setLogData] = useState(undefined);

  useEffect(() => {
    fetch(`https://glittery-dull-snickerdoodle.glitch.me/v1/logs/${id}`)
      .then((resp) => resp.json())
      .then((response) => setLogData(response));
  }, []);

  console.log(logData);

  return <div>PetHealthCard</div>;
};

export default PetHealthCard;
