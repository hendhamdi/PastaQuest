// src/components/FifthSection/FifthSection.jsx
import React from 'react';
import './FifthSection.css';
import chefImage from '../../Images/Home/chef.jpg';
import sideImage1 from '../../Images/Home/chefimage1.jpg';
import sideImage2 from '../../Images/Home/chefimage2.jpg';

const FifthSection = () => {
  return (
    <section className="fifth-section">
      <div className="fifth-section-image-container">
        <img src={chefImage} alt="Grande présentation" className="fifth-section-main-image" />
      </div>
      
      <div className="fifth-section-side-images">
        <img src={sideImage1} alt="Chef en action" className="side-image1" />
        <img src={sideImage2} alt="Plat de pâtes" className="side-image2" />
      </div>
      
      <div className="fifth-section-content">
        <h2 className="fifth-section-title">Maîtres de l'Art<br/> Culinaire</h2>
        <p className="fifth-section-description">
          Chez PastaQuest, nos chefs mettent tout leur talent au service de votre plaisir, 
          pour que chaque repas devienne un moment d’exception. Qu’il s’agisse de plats 
          classiques ou de créations originales, ils sont toujours à la recherche de nouvelles 
          inspirations pour enrichir notre carte et satisfaire vos envies.
        </p>
        <ul className="fifth-section-points">
          <li> Maîtrise des techniques culinaires</li>
          <li> Créativité sans limites</li>
          <li> Sélection d’ingrédients de qualité</li>
          <li> Perfectionnisme et souci du détail</li>
        </ul>
      </div>
    </section>
  );
};

export default FifthSection;
