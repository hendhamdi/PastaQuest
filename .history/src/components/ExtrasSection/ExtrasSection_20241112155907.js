import React from 'react';
import './ExtrasSection.css';
import image1 from '../../Images/Home/extra1.jpg';
import image2 from '../../Images/Home/extra2.jpg';
import image3 from '../../Images/Home/extra3.jpg';

const ExtrasSection = () => {
  return (
    <section className="extras-section">
      {/* Partie gauche : Titre et description */}
      <div className="extras-section-content">
        <h2 className="extras-section-title">Accompagnements,<br />Boissons et Extras :</h2>
        <p className="extras-section-description">
          Pain à l’Ail, Salade Verte et Parmesan Supplémentaire.<br />
          Eau Minérale, Sodas et Jus Frais.
        </p>
      </div>

      {/* Partie droite : Images */}
      <div className="extras-section-images">
        <div className="extras-image-wrapper">
          <img src={image1} alt="Accompagnement 1" className="extras-image" />
        </div>
        <div className="extras-image-wrapper">
          <img src={image2} alt="Accompagnement 2" className="extras-image" />
        </div>
        <div className="extras-image-wrapper large-image">
          <img src={image3} alt="Accompagnement 3" className="extras-image" />
        </div>
      </div>
    </section>
  );
};

export default ExtrasSection;
