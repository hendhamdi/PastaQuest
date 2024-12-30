import React from 'react';
import './EventPage.css'; // Assurez-vous que ce fichier CSS est bien créé pour styliser l'EventPage.

const EventPage = () => {
  return (
    <div className="event-page-container">
      <h1 className="event-page-title">Événements à Venir</h1>
      
      {/* Section principale des événements */}
      <div className="event-page-details">
        <p className="event-page-description">
          Rejoignez-nous pour nos événements exclusifs qui célèbrent la cuisine italienne et d'autres moments inoubliables. 
          Découvrez nos soirées à thème, ateliers de cuisine et concerts !
        </p>

        {/* Liste des événements */}
        <div className="event-page-events-list">
          <div className="event-card">
            <h2 className="event-card-title">Soirée Italienne</h2>
            <p className="event-card-date">Le 1er samedi de chaque mois</p>
            <p className="event-card-description">
              Participez à une soirée inoubliable avec des dégustations de plats et de vins italiens.
            </p>
            <p className="event-card-price">50 DT par personne</p>
          </div>

          <div className="event-card">
            <h2 className="event-card-title">Atelier Cuisine Italienne</h2>
            <p className="event-card-date">Le 2ème samedi de chaque mois</p>
            <p className="event-card-description">
              Apprenez à préparer des plats italiens authentiques avec notre chef spécialisé.
            </p>
            <p className="event-card-price">30 DT par personne</p>
          </div>

          <div className="event-card">
            <h2 className="event-card-title">Concert Jazz en Live</h2>
            <p className="event-card-date">Dimanche 20 Octobre 2024</p>
            <p className="event-card-description">
              Profitez d'un concert jazz en live tout en dégustant vos plats préférés.
            </p>
            <p className="event-card-price">Entrée gratuite</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
