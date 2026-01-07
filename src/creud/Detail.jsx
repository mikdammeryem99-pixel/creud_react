import React from "react";
import { useParams, Link } from "react-router-dom";

function Detail({ taches }) {
  const { id } = useParams();
  const tache = taches.find((t) => t.id === id);

  if (!tache) {
    return <h2>Tâche non trouvée</h2>;
  }

  return (
    <div>
      <h2>Détails de la Tâche</h2>
      <p><strong>ID:</strong> {tache.id}</p>
      <p><strong>Titre:</strong> {tache.titre}</p>
      <p><strong>Description:</strong> {tache.description}</p>
      <p><strong>Date de Création:</strong> {tache.dateCreation}</p>
      <p><strong>Statut:</strong> {tache.completee ? "Terminée" : "Non terminée"}</p>

      <Link to="/">
        <button>Retour</button>
      </Link>
    </div>
  );
}

export default Detail;
