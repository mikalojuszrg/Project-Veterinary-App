import { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/Header/Header";
import PetInfoCard from "../../components/PetInfoCard/PetInfoCard";
import PetsForm from "../../components/PetsForm/PetsForm";

const PetListPage = () => {
  const [petInfo, setPetInfo] = useState([]);
  const [petName, setPetName] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petEmail, setPetEmail] = useState("");

  useEffect(() => {
    fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/pets")
      .then((resp) => resp.json())
      .then((response) => setPetInfo(response));
  }, []);

  const handleDelete = (deletedPet) => {
    setPetInfo(petInfo.filter((pet) => pet.id !== deletedPet));
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

  return (
    <main>
      <Header />
      <aside>
        <PetsForm
          handleSubmit={handleSubmit}
          petAge={petAge}
          setPetAge={setPetAge}
          petEmail={petEmail}
          setPetEmail={setPetEmail}
          petName={petName}
          setPetName={setPetName}
        />
      </aside>
      {petInfo &&
        petInfo.map((pet) => (
          <PetInfoCard key={pet.id} pet={pet} handleDelete={handleDelete} />
        ))}
    </main>
  );
};

export default PetListPage;
