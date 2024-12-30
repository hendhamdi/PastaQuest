// src/components/ThirdSection/ThirdSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import minivid from '../../Images/Home/sec3.gif';
import './ThirdSection.css';

const ThirdSection = () => {
  return (
    <div className="third-section">
      <div className="third-section-image-container">
        <img src={minivid} alt="Animation" className="third-section-image" />
        <div className="contact-card">
          <h4>Venez nous voir</h4>
          <p>Téléphone : +33 1 23 45 67 89</p>
          <p>Email : contact@restaurant.com</p>
          <p>Adresse : 123 Rue de la Gastronomie, Paris</p>
        </div>
      </div>
      <div className="third-section-content">
        <h2 className="third-section-title">
          Nous Offrons une<br />  Grande Diversité de<br /> Pâtes pour Tous les<br />  Goûts
        </h2>
        <p className="third-section-description">
          Chez PastaQuest, nous sommes passionnés par l'art de la cuisine italienne et les saveurs authentiques des pâtes.
          Nous vous offrons une sélection unique de plats préparés avec soin et des ingrédients de qualité, pour satisfaire tous les goûts.
        </p>
        <p className="third-section-description">
          Chaque plat est un voyage culinaire, alliant fraîcheur et créativité. Que vous soyez à la recherche d'un repas rapide ou
          d'une soirée gourmande entre amis, nous avons ce qu'il vous faut. Profitez de nos pâtes avec une ambiance
           chaleureuse et conviviale,
          dans un cadre moderne et accueillant.
        </p>
        <Link to="/reservation" className="third-section-button">Réservez maintenant</Link>
      </div>
    </div>
  );
};

export default ThirdSection;
