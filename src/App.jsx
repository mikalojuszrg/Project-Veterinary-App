import { Route, Routes } from "react-router-dom";
import PetListPage from "./pages/PetlistPage/PetListPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PetListPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
