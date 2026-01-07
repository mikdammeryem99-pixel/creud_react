import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Produit from "./creud/Produit.jsx";
import Ajouter from "./creud/Ajouter.jsx";
import Detail from "./creud/Detail.jsx";
import Modifier from "./creud/Modifier.jsx";

function App() {
  const [taches, setTaches] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Produit taches={taches} setTaches={setTaches} />} />
        <Route path="/ajouter" element={<Ajouter setTaches={setTaches} />} />
        <Route path="/detail/:id" element={<Detail taches={taches} />} />
        <Route path="/modifier/:id" element={<Modifier taches={taches} setTaches={setTaches} />} />
      </Routes>
    </Router>
  );
}

export default App;
