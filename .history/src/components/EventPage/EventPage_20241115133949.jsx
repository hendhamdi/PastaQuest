import React from 'react';
import './EventPage.css'; // Assurez-vous d'avoir un fichier CSS pour styliser ce composant.

const EventPage = () => {
  return (
    <div className="event-page-container">
      {/* Titre Principal */}
      <h1 className="event-page-title">
        Événements à Venir : <br /> Rejoignez-nous pour des Moments Inoubliables !
      </h1>

      {/* Image principale */}
      <div className="event-page-image">
        <img src="https://i.pinimg.com/736x/a8/56/e1/a856e113f127e77b2392f6020236d409.jpg" alt="Événements PastaQuest" />
      </div>

      {/* Paragraphe descriptif */}
      <div className="event-page-description">
        <p>
          Chez PastaQuest, nous croyons que la bonne cuisine se savoure mieux en bonne compagnie. 
          Découvrez nos événements à venir et ne manquez pas l’occasion de vivre des moments mémorables 
          autour de nos plats délicieux.
        </p>
      </div>

      {/* Liste des événements */}
      <div className="event-list">
        <div className="event-item">
          <h2 className="event-item-title">Soirées à Thème : Soirée Italienne</h2>
          <p><strong>Date :</strong> Le 1er samedi de chaque mois</p>
          <p><strong>Heure :</strong> 18h00 - 21h00</p>
          <p><strong>Description :</strong> Participez à notre soirée de dégustation de vins, accompagnée de plats de pâtes spécialement sélectionnés pour mettre en valeur les saveurs.</p>
          <p><strong>Prix :</strong> 50 DT par personne</p>
        </div>

        <div className="event-item">
          <h2 className="event-item-title">Ateliers de Cuisine : Atelier de Cuisine Italienne</h2>
          <p><strong>Date :</strong> Le 2ème samedi de chaque mois</p>
          <p><strong>Heure :</strong> 15h00 - 18h00</p>
          <p><strong>Description :</strong> Apprenez à préparer vos propres plats de pâtes avec notre chef ! Profitez d’une expérience interactive et repartez avec vos créations.</p>
          <p><strong>Prix :</strong> 30 DT par personne</p>
        </div>

        <div className="event-item">
          <h2 className="event-item-title">Concerts Live : Concert de Jazz</h2>
          <p><strong>Date :</strong> Dimanche 20 Octobre 2024</p>
          <p><strong>Heure :</strong> 20h00 - 22h00</p>
          <p><strong>Description :</strong> Détendez-vous avec un concert de jazz en direct dans notre espace extérieur. Profitez de notre menu tout en écoutant de la belle musique !</p>
          <p><strong>Prix :</strong> Entrée gratuite</p>
        </div>
      </div>

      {/* Réservation Button */}
      <div className="reservation-section">
        <button className="reservation-button-event">Réservez votre Place !</button>
      </div>

      {/* Images horizontales */}
      <div className="event-images">
        <img src="image1.jpg" alt="Événement 1" className="event-image" />
        <img src="image2.jpg" alt="Événement 2" className="event-image" />
        <img src="image3.jpg" alt="Événement 3" className="event-image" />
        {/* Ajoutez d'autres images selon le besoin */}
      </div>
    </div>
  );
};

export default EventPage;
