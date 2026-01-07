import React, { useState } from "react";
import { Link } from "react-router-dom";

function Produit({ taches, setTaches }) {
  const [filtreStatut, setFiltreStatut] = useState("toutes");

  const supprimerTache = (id) => {
    setTaches((prevTaches) => prevTaches.filter((tache) => tache.id !== id));
  };

  const tachesFiltrees = taches.filter((tache) => {
    if (filtreStatut === "toutes") return true;
    return filtreStatut === "terminer" ? tache.completee : !tache.completee;
  });

  return (
    <div>
      <h1>Liste des Tâches</h1>

      <select value={filtreStatut} onChange={(e) => setFiltreStatut(e.target.value)}>
        <option value="toutes">Toutes</option>
        <option value="terminer">Terminées</option>
        <option value="non terminer">Non terminées</option>
      </select><br/>
      <Link to="/ajouter">
        <button>Ajouter une tâche</button>
      </Link>

      {tachesFiltrees.length === 0 ? (
        <p>Aucune tâche disponible.</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>Titre</th>
              <th>Description</th>
              <th>Statut</th>
              <th>Detail</th>
              <th>Supprimer</th>
              <th>Modifier</th>
            </tr>
          </thead>
          <tbody>
            {tachesFiltrees.map((tache) => (
              <tr key={tache.id}>
                <td>{tache.titre}</td>
                <td>{tache.description}</td>
                <td>{tache.completee ? "Terminée" : "Non terminée"}</td>
                <td>
                  <Link to={`/detail/${tache.id}`}>
                    <button> Détails</button>
                  </Link>
                </td>
                <td>
                   <button onClick={() => supprimerTache(tache.id)}>Supprimer</button>
                </td>
                <td>
                <Link to={`/modifier/${tache.id}`}>
                    <button>Modifier</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Produit;
