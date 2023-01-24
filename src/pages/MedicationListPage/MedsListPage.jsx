import { useEffect, useState } from "react";
import styles from "./MedsListPage.module.scss";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import MedsForm from "../../components/MedsForm/MedsForm";
import MedsInfocard from "../../components/MedsInfoCard/MedsInfocard";

const MedicationListPage = () => {
  const [meds, setMeds] = useState(undefined);
  const [medsName, setMedsName] = useState("");
  const [medsDescription, setMedsDescription] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/meds?limit=100")
      .then((resp) => resp.json())
      .then((response) => setMeds(response));
  }, [medsName, medsDescription]);

  // useEffect(() => {
  //   fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/meds")
  //     .then((resp) => resp.json())
  //     .then((response) => setMeds(response));
  // }, [medsName, medsDescription]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: medsName,
      description: medsDescription,
    };
    fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/meds", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.err) {
          console.log(data.err);
        } else {
          console.log("Medication created successfully");
          setMedsName("");
          setMedsDescription("");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header className={styles.container} />
      <div className={styles.container__subheading}>
        <h1>Medication List</h1>
        <Button
          active={true}
          onClick={() => setShow((prevValue) => !prevValue)}
        >
          ADD MEDICATION
        </Button>
      </div>
      <aside
        className={
          show ? styles.container__modalOn : styles.container__modalOff
        }
      >
        <MedsForm
          handleSubmit={handleSubmit}
          medsName={medsName}
          setMedsName={setMedsName}
          medsDescription={medsDescription}
          setMedsDescription={setMedsDescription}
          onClick={() => setShow(false)}
        />
      </aside>
      <main className={styles.container__medications}>
        {meds && meds.map((med) => <MedsInfocard key={med.id} med={med} />)}
      </main>
    </div>
  );
};

export default MedicationListPage;
