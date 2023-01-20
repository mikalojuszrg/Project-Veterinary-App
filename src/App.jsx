import { Route, Routes } from "react-router-dom";
import PetHealthCard from "./components/PetHealthCard/PetHealthCard";
import MedsListPage from "./pages/MedicationListPage/MedsListPage";
import PetListPage from "./pages/PetlistPage/PetListPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PetListPage />}></Route>
        <Route path="/pets/:id" element={<PetHealthCard />}></Route>
        <Route path="/meds" element={<MedsListPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
