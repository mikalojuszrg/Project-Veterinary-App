import { useEffect } from "react";
import { useState } from "react";
import PetInfoCard from "../../components/PetInfoCard/PetInfoCard";

const PetListPage = () => {
  const [petInfo, setPetInfo] = useState([]);

  useEffect(() => {
    fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/pets")
      .then((resp) => resp.json())
      .then((response) => setPetInfo(response));
  }, []);

  const handleDelete = (deletedPet) => {
    setPetInfo(petInfo.filter((pet) => pet.id !== deletedPet.id));
  };

  return (
    <div>
      {petInfo &&
        petInfo.map((pet) => (
          <PetInfoCard key={pet.id} pet={pet} handleDelete={handleDelete} />
        ))}
    </div>
  );
};

export default PetListPage;
