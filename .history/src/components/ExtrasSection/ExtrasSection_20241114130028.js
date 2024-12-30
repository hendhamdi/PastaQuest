import React from 'react';
import './ExtrasSection.css';
import image1 from '../../Images/Menu/extra1.png';
import image2 from '../../Images/Menu/extra2.png';
import image3 from '../../Images/Menu/extra3.png';

const ExtrasSection = () => {
  return (
    <section className="extras-section">
      {/* Partie gauche : Titre, description et texte supplémentaire */}
      <div className="extras-section-content">
        <h2 className="extras-section-title">Accompagnements,<br />Boissons et Extras :</h2>
        <p className="extras-section-description">
          Pain à l’Ail, Salade Verte et Parmesan Supplémentaire.<br />
          Eau Minérale, Sodas et Jus Frais.
        </p>
        <p className="extras-section-small-text">Bon Appétit !</p>
      </div>

     
      <div className="extras-section-images">
        <div className="extras-image-column">
          <img src={image3} alt="Accompagnement 3" className="extras-image1" />
          <img src={image1} alt="Accompagnement 1" className="extras-image2" />
        </div>
        <div className="extras-image-wrapper large-image">
          <img src={image2} alt="Accompagnement 2" className="extras-image" />
        </div>
      </div>
    </section>
  );
};

export default ExtrasSection;
