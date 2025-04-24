import React from 'react';
import './ReservationInfo.css'; 

const ReservationInfo = () => {
  return (
    <div className="reservation-info-container">
      <div className="info-section">
        <h2>Contactez-nous :</h2>
        <p className='num-tel'>+216-234-567-8900</p>
      </div>
      <div className="info-section">
        <h2>Heures d'ouverture :</h2>
        <p>
          Du lundi au vendredi :<br/> 11:00h - 00:00h <br />
          Le samedi et dimanche : <br/>10:00 - 01:00
        </p>
      </div>
      <div className="info-section">
        <h2>Notre Localisation :</h2>
        <p>123 Rue de la Gastronomie<br/> Tunis</p>
      </div>
    </div>
  );
};

export default ReservationInfo;
