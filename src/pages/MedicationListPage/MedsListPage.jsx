import { useEffect, useState } from "react";
import MedsForm from "../../components/MedsForm/MedsForm";
import MedsInfocard from "../../components/MedsInfoCard/MedsInfocard";

const MedicationListPage = () => {
  const [meds, setMeds] = useState(undefined);
  const [medsName, setMedsName] = useState("");
  const [medsDescription, setMedsDescription] = useState("");

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
    <div>
      <MedsForm
        handleSubmit={handleSubmit}
        medsName={medsName}
        setMedsName={setMedsName}
        medsDescription={medsDescription}
        setMedsDescription={setMedsDescription}
      />

      {meds && meds.map((med) => <MedsInfocard key={med.id} med={med} />)}
    </div>
  );
};

export default MedicationListPage;
