import React from 'react';
import './ExtrasSection.css'; // Ajoutez un fichier CSS pour cette section

const ExtrasSection = () => {
  return (
    <div className="extras-section">
      <div className="extras-text">
        <h2>Accompagnements,<br />Boissons et Extras :</h2>
        <p>
          Pain à l’Ail, Salade Verte et Parmesan Supplémentaire.<br />
          Eau Minérale, Sodas et Jus Frais.
        </p>
      </div>
      <div className="extras-images">
        <img src="image1.jpg" alt="Image 1" className="extras-image" />
        <img src="image2.jpg" alt="Image 2" className="extras-image" />
        <img src="image3.jpg" alt="Image 3" className="extras-image single-image" />
      </div>
    </div>
  );
};

export default ExtrasSection;
