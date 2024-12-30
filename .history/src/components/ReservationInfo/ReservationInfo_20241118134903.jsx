import React from 'react';
import './ReservationInfo.css'; // Assurez-vous de créer un fichier CSS pour styliser ce composant.

const ReservationInfo = () => {
  return (
    <div className="reservation-info-container">
      <div className="info-section">
        <h2>Contactez-nous :</h2>
        <p className='num-tel'>+1-234-567-8900</p>
      </div>
      <div className="info-section">
        <h2>Heures d'ouverture :</h2>
        <p>
          Du lundi au vendredi :<br/> 11h00 - 22h00 <br />
          Le samedi et dimanche : <br/>12h00 - 01h00
        </p>
      </div>
      <div className="info-section">
        <h2>Notre Localisation :</h2>
        <p>123 Lac 2,<br/> Tunis</p>
      </div>
    </div>
  );
};

export default ReservationInfo;
