import React from 'react';
import ReservationForm from '../../components/ReservationForm/ReservationForm';
import ReservationInfo from '../../components/ReservationInfo/ReservationInfo';
import './Reservation.css'; 

const Reservation = () => {
  return (
    <div className="reservation-page">
      <h1 className="reservation-title">Réservez Votre Table</h1>
      <h2 className="reservation-subtitle">
        Chez PastaQuest, nous sommes ravis de vous accueillir ! <br />
        Remplissez le formulaire ci-dessous pour réserver votre table <br />
        et profiter de nos délicieuses spécialités.
      </h2>
      <ReservationForm />
      <ReservationInfo />
    </div>
  );
};

export default Reservation;
