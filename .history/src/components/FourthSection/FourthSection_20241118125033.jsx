// src/components/FourthSection/FourthSection.jsx
import React from 'react';
import './FourthSection.css';
import eventImage1 from '../../Images/Home/event1.jpg';
import eventImage2 from '../../Images/Home/event2.jpg';
import eventImage3 from '../../Images/Home/event3.jpg';
import eventImage4 from '../../Images/Home/event4.jpg';

const FourthSection = () => {
  return (
    <div className="fourth-section">
      <div className="fourth-section-content">
        <h2 className="fourth-section-title">Événements Spéciaux<br />et Soirées à Thème</h2>
        <p className="fourth-section-description">
          Chez PastaQuest, nous aimons créer des moments inoubliables pour nos clients en organisant des  événements spéciaux tout au long de l'année.<br/>
          Que vous soyez amateur de musique live, de soirées  à thème ou à la recherche de promotions exclusives, <br/>notre restaurant vous offre des
          expériences  uniques dans une ambiance conviviale.
        </p>
      </div>
      
      <div className="fourth-section-events-home">
        <div className="event-card-home">
          <img src={eventImage1} alt="Soirée Jazz" className="event-image-home" />
          <h3 className="event-title-home">Soirées à thème</h3>
          <p className="event-description-home">Découvrez des soirées spéciales autour <br/>d'un thème culinaire ou festif.</p>
        </div>
        <div className="event-card-home">
          <img src={eventImage2} alt="Soirée Italienne" className="event-image-home" />
          <h3 className="event-title-home">Promotions exclusives</h3>
          <p className="event-description-home">Bénéficiez de réductions et d'offres <br/>spéciales lors de nos événements.</p>
        </div>
        <div className="event-card-home">
          <img src={eventImage3} alt="Happy Hour" className="event-image-home" />
          <h3 className="event-title-home">Dîners privés</h3>
          <p className="event-description-home">Réservez une salle pour vos événements <br/>privés,qu'il s'agisse de fêtes d'anniversaire, <br/>de réunions d'affaires, ou de célébrations familiales.</p>
        </div>
        <div className="event-card-home">
          <img src={eventImage4} alt="Soirée à Thème" className="event-image-home" />
          <h3 className="event-title-home">Concerts live</h3>
          <p className="event-description-home">Profitez de groupes et artistes locaux <br/>pendant votre dîner.</p>
        </div>
      </div>
      
      <p className="fourth-section-footer">
        Ne manquez pas nos prochains événements ! Consultez notre calendrier et
        réservez votre table pour profiter d'une soirée mémorable.
      </p>
    </div>
  );
};

export default FourthSection;
