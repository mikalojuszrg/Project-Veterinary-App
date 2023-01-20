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
    fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/meds")
      .then((resp) => resp.json())
      .then((response) => setMeds(response));
  }, [medsName, medsDescription]);

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("JSON object sent in request body: ", {
      name: medsName,
      description: medsDescription,
    });
    fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/meds", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: medsName,
        description: medsDescription,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error("Some error occured");
      })
      .then((res) => {
        console.log("User created successfully");
        setMedsName("");
        setMedsDescription("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main>
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
      <div className={styles.container__medications}>
        {meds && meds.map((med) => <MedsInfocard key={med.id} med={med} />)}
      </div>
    </main>
  );
};

export default MedicationListPage;
