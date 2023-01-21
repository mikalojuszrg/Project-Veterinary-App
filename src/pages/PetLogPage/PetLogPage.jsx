import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./PetLogPage.module.scss";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";

const PetLogPage = () => {
  const { id } = useParams();
  const [logData, setLogData] = useState([]);

  useEffect(() => {
    fetch(`https://glittery-dull-snickerdoodle.glitch.me/v1/logs/${id}`)
      .then((resp) => resp.json())
      .then((response) => setLogData(response));
  }, []);

  console.log(logData);

  return (
    <div>
      <Header />
      <div className={styles.container__subheading}>
        {logData.length > 0 && <h1>{logData[0].name}: Health Records</h1>}
        <Button
          active={true}
          onClick={() => setShow((prevValue) => !prevValue)}
        >
          ADD PET
        </Button>
      </div>
    </div>
  );
};

export default PetLogPage;
