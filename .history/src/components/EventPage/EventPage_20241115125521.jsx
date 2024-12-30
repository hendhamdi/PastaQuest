import React from 'react';
import './EventPage.css'; // Assurez-vous de créer un fichier CSS correspondant

const EventPage = () => {
  return (
    <div className="event-page">
      {/* Titre */}
      <h1 className="event-title">
        Événements à Venir : <br /> Rejoignez-nous pour des Moments Inoubliables !
      </h1>
      
      {/* Grande image */}
      <div className="event-image-container">
        <img src="path/to/your-image.jpg" alt="Événement principal" className="event-image" />
      </div>
      
      {/* Paragraphe de description */}
      <div className="event-description">
        <p>
          Chez PastaQuest, nous croyons que la bonne cuisine se savoure mieux en bonne compagnie. Découvrez nos événements à venir et ne manquez pas l’occasion de vivre des moments mémorables autour de nos plats délicieux.
        </p>
        <ul className="event-details">
          <li>
            <strong>Soirées à Thème : Soirée Italienne</strong><br />
            Date : Le 1ere samedi de chaque mois<br />
            Heure : 18h00 - 21h00<br />
            Description : Participez à notre soirée de dégustation de vins, accompagnée de plats de pâtes spécialement sélectionnés pour mettre en valeur les saveurs.<br />
            Prix : 50 DT par personne
          </li>
          <li>
            <strong>Ateliers de Cuisine : Atelier de Cuisine Italienne</strong><br />
            Date : Le 2eme samedi de chaque mois<br />
            Heure : 15h00 - 18h00<br />
            Description : Apprenez à préparer vos propres plats de pâtes avec notre chef ! Profitez d’une expérience interactive et repartez avec vos créations.<br />
            Prix : 30 DT par personne
          </li>
          <li>
            <strong>Concerts Live : Concert de Jazz</strong><br />
            Date : Dimanche 20 Octobre 2024<br />
            Heure : 20h00 - 22h00<br />
            Description : Détendez-vous avec un concert de jazz en direct dans notre espace extérieur. Profitez de notre menu tout en écoutant de la belle musique !<br />
            Prix : Entrée gratuite
          </li>
        </ul>
      </div>

      {/* Galerie d'images */}
      <div className="event-gallery">
        <img src="path/to/image1.jpg" alt="Événement 1" className="gallery-image" />
        <img src="path/to/image2.jpg" alt="Événement 2" className="gallery-image" />
        <img src="path/to/image3.jpg" alt="Événement 3" className="gallery-image" />
        {/* Ajoutez plus d'images selon le besoin */}
      </div>
    </div>
  );
};

export default EventPage;
