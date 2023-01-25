import { Route, Routes } from "react-router-dom";
import "./App.css";
import ThemeWrapper from "./components/ThemeWrapper/ThemeWrapper";
import MedsListPage from "./pages/MedicationListPage/MedsListPage";
import PetListPage from "./pages/PetlistPage/PetListPage";
import PetLogPage from "./pages/PetLogPage/PetLogPage";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ThemeWrapper>
              <PetListPage />
            </ThemeWrapper>
          }
        ></Route>
        <Route
          path="/pets/:id"
          element={
            <ThemeWrapper>
              <PetLogPage />
            </ThemeWrapper>
          }
        ></Route>
        <Route
          path="/meds"
          element={
            <ThemeWrapper>
              <MedsListPage />
            </ThemeWrapper>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
