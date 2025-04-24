import React from 'react';
import './ReservationInfo.css'; 

const ReservationInfo = () => {
  return (
    <div className="reservation-info-container">
      <div className="info-section">
        <h2>Contactez-nous :</h2>
        <p className='num-tel'>+216 1 23 45 67 89</p>
      </div>
      <div className="info-section">
        <h2>Heures d'ouverture :</h2>
        <p>
          Du lundi au vendredi :<br/> 11h00 - 00h00 <br />
          Le samedi et dimanche : <br/>10h00 - 01h00
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
