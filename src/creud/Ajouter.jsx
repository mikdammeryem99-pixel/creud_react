import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Ajouter({ setTaches }) { 
  const [id, setId] = useState(""); 
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [statut, setStatut] = useState("non terminer");
  const navigate = useNavigate();

  const ajouterTache = (e) => {
    e.preventDefault();

    const nouvelleTache = {
      id,
      titre,
      description,
      completee: statut === "terminer",
      dateCreation: new Date().toLocaleString(),  
    };

    setTaches((prevTaches) => [...prevTaches, nouvelleTache]);
    navigate("/"); 
  };

  const annulerAjout = () => {
    navigate("/"); 
  };

  return (
    <div>
      <h2>Ajouter une Tâche</h2>
      <form onSubmit={ajouterTache}>
        <label>ID</label><br/>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        /><br/>
        <label>Titre</label><br/>
        <input
          type="text"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          required
        /><br/>
        <label>Description</label><br/>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        /><br/>
        <label>Statut</label><br/>
        <select value={statut} onChange={(e) => setStatut(e.target.value)}>
          <option value="terminer">Terminée</option>
          <option value="non terminer">Non terminée</option>
        </select><br/><br/>

        <div>
          <button type="submit">Valider</button>
          <button type="button" onClick={annulerAjout}>Annuler</button>
        </div>
      </form>
    </div>
  );
}

export default Ajouter;
