import { Route, Routes } from "react-router-dom";
import { Characte } from "./pages/Characte/Characte";
import { Episode } from "./pages/Episode/Episode";
import "./App.css";
import { Headers } from "./components/Header/Headers";
import { Location } from "./pages/Location/Location";

function App() {
  return (
    <>
      <Headers />
      <div className="container">
        <Routes>
          <Route path="/location" element={<Location />} />
          <Route path="/episode" element={<Episode />} />
          <Route path="/" element={<Characte />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
