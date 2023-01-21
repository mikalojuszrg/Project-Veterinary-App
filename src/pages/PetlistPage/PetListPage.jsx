import styles from "./PetListPage.module.scss";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/Header/Header";
import PetInfoCard from "../../components/PetInfoCard/PetInfoCard";
import PetsForm from "../../components/PetsForm/PetsForm";
import Button from "../../components/Button/Button";

const PetListPage = () => {
  const [petInfo, setPetInfo] = useState([]);
  const [petName, setPetName] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petEmail, setPetEmail] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/pets")
      .then((resp) => resp.json())
      .then((response) => setPetInfo(response));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://glittery-dull-snickerdoodle.glitch.me/v1/pets/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error("Some error occured");
      })
      .then((res) => {
        console.log("Pet deleted successfully");
        setPetInfo(petInfo.filter((pet) => pet.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: petName,
        dob: new Date(petAge).toISOString(),
        client_email: petEmail,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error("Some error occured");
      })
      .then((res) => {
        console.log("Pet created successfully");
        setPetName("");
        setPetAge("");
        setPetEmail("");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(show);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.container__subheading}>
        <h1>Pet List</h1>
        <Button
          active={true}
          onClick={() => setShow((prevValue) => !prevValue)}
        >
          ADD PET
        </Button>
      </div>
      <aside
        className={
          show ? styles.container__modalOn : styles.container__modalOff
        }
      >
        <PetsForm
          handleSubmit={handleSubmit}
          petAge={petAge}
          setPetAge={setPetAge}
          petEmail={petEmail}
          setPetEmail={setPetEmail}
          petName={petName}
          setPetName={setPetName}
          onClick={() => setShow(false)}
        />
      </aside>
      <main className={styles.container__pets}>
        {petInfo &&
          petInfo.map((pet) => (
            <PetInfoCard key={pet.id} pet={pet} handleDelete={handleDelete} />
          ))}
      </main>
    </div>
  );
};

export default PetListPage;
