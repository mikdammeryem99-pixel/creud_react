import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Modifier({ taches, setTaches }) {
  const { id } = useParams();
  const navigate = useNavigate();

  
  const tacheAModifier = taches.find((tache) => tache.id === id);

  
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [statut, setStatut] = useState("non terminer");

  
  useEffect(() => {
    if (tacheAModifier) {
      setTitre(tacheAModifier.titre);
      setDescription(tacheAModifier.description);
      setStatut(tacheAModifier.completee ? "terminer" : "non terminer");
    }
  }, [tacheAModifier]);

  
  const modifierTache = (e) => {
    e.preventDefault();

   
    const tachesModifiees = taches.map((tache) =>
      tache.id === id
        ? { ...tache, titre, description, completee: statut === "terminer" }
        : tache
    );

    setTaches(tachesModifiees);
    navigate("/");
  };

  
  const annulerModification = () => {
    navigate("/"); 
  };

  if (!tacheAModifier) {
    return <p>Aucune tâche trouvée avec cet ID.</p>;
  }

  return (
    <div>
      <h2>Modifier la Tâche</h2>
      <form onSubmit={modifierTache}>
        <label>Titre</label><br/>
        <input
          type="text"
          placeholder="Titre"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          required
        /><br/>
        <label>Description</label><br/>
        <input
          type="text"
          placeholder="Description"
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
          <button type="submit">Modifier</button>
          <button type="button" onClick={annulerModification}>Annuler</button>
        </div>
      </form>
    </div>
  );
}

export default Modifier;
