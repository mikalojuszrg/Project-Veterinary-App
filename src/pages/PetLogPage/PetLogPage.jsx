import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./PetLogPage.module.scss";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import PrescriptionForm from "../../components/PrescriptionForm/PrescriptionForm";
import LogForm from "../../components/LogForm/LogForm";
import PetHealthCard from "../../components/PetHealthCard/PetHealthCard";

const PetLogPage = () => {
  const { id } = useParams();
  const [logData, setLogData] = useState([]);
  const [comment, setComment] = useState("");
  const [meds, setMeds] = useState([]);
  const [show, setShow] = useState(false);
  const [prescription, setPrescription] = useState([]);

  const [logStatus, setLogStatus] = useState("");
  const [logDescription, setLogDescription] = useState("");

  const handleLogSubmit = (e) => {
    e.preventDefault();
    fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pet_id: id,
        description: logDescription,
        status: logStatus,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error("Some error occured");
      })
      .then((res) => {
        setLogDescription("");
        setLogStatus("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetch(`https://glittery-dull-snickerdoodle.glitch.me/v1/logs/${id}`)
      .then((resp) => resp.json())
      .then((response) => setLogData(response));
  }, [logStatus, logDescription]);

  useEffect(() => {
    fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/meds")
      .then((resp) => resp.json())
      .then((response) => setMeds(response));
  }, []);

  const handleSubmit = (value) => {
    setPrescription((prevArray) => [...prevArray, value]);
  };

  return (
    <div>
      <Header />
      <div className={styles.container__subheading}>
        {logData.length > 0 && <h1>{logData[0].name}: Health Records</h1>}
        <div className={styles.container__buttons}>
          <Button active={true} onClick={() => setShow(true)}>
            ADD LOG
          </Button>
          <Button>ADD PRESCRIPTION</Button>
        </div>
      </div>
      {/* <aside
        className={
          show ? styles.container__modalOn : styles.container__modalOff
        }
      >
        <PrescriptionForm
          handleSubmit={handleSubmit}
          logData={logData}
          meds={meds}
          id={id}
          comment={comment}
          setComment={setComment}
          onClick={() => setShow(false)}
        />
      </aside> */}
      <aside
        className={
          show ? styles.container__modalOn : styles.container__modalOff
        }
      >
        <LogForm
          handleLogSubmit={handleLogSubmit}
          logStatus={logStatus}
          logDescription={logDescription}
          setLogDescription={setLogDescription}
          setLogStatus={setLogStatus}
          onClick={() => setShow(false)}
        />
      </aside>
      <main className={styles.container__logs}>
        {logData.map((log) => {
          return (
            <PetHealthCard status={log.status} description={log.description} />
          );
        })}
      </main>
    </div>
  );
};

export default PetLogPage;
