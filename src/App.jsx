import { Route, Routes } from "react-router-dom";
import MedsListPage from "./pages/MedicationListPage/MedsListPage";
import PetListPage from "./pages/PetlistPage/PetListPage";
import PetLogPage from "./pages/PetLogPage/PetLogPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PetListPage />}></Route>
        <Route path="/pets/:id" element={<PetLogPage />}></Route>
        <Route path="/meds" element={<MedsListPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
