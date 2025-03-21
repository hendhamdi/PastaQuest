import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventPage.css'; 

const EventPage = () => {
  const navigate = useNavigate(); 

  const handleReservationClick = () => {
    navigate('/reservation'); 
  };


  return (
    <div className="event-page-container">
      <h1 className="event-page-title">
        Événements à Venir : <br /> Rejoignez-nous pour des Moments Inoubliables !
      </h1>

      <div className="event-page-image">
        <img src="https://i.pinimg.com/736x/a8/56/e1/a856e113f127e77b2392f6020236d409.jpg" alt="Événements PastaQuest" />
      </div>

      <div className="event-page-description">
        <p>
          Chez PastaQuest, nous croyons que la bonne cuisine se savoure mieux en bonne compagnie. 
          Découvrez nos événements à venir et ne manquez pas l’occasion de vivre des moments mémorables 
          autour de nos plats délicieux.
        </p>
      </div>

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

      

      <div className="event-images">
        <img src="https://i.pinimg.com/736x/b0/63/57/b06357758f4225099b1f9d046c8dc642.jpg" alt="Événement 1" className="event-image" />
        <img src="https://i.pinimg.com/736x/2d/8b/95/2d8b957bfd9f782e6c196ab170583e7a.jpg" alt="Événement 2" className="event-image" />
        <img src="https://i.pinimg.com/736x/f6/04/77/f60477b3b4198a21f8c89d2549518221.jpg" alt="Événement 3" className="event-image" />
      </div>
      <div className="reservation-section">
        <button className="reservation-button-event"onClick={handleReservationClick}>Réservez votre Place !</button>
      </div>
    </div>
  );
};

export default EventPage;
