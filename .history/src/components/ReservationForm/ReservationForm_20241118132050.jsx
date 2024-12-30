import React from 'react';
import './ReservationForm.css'; // Fichier CSS pour styliser le formulaire

const ReservationForm = () => {
  return (
    <div className="reservation-card">
      <form className="reservation-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">Nom </label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Prénom </label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Numéro de Téléphone </label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email </label>
            <input type="email" id="email" name="email" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Date de Réservation </label>
            <input type="date" id="date" name="date" required />
          </div>
          <div className="form-group">
            <label htmlFor="time">Heure de Réservation </label>
            <input type="time" id="time" name="time" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="guests">Nombre de Personnes </label>
            <input type="number" id="guests" name="guests" min="1" required />
          </div>
          <div className="form-group full-width">
            <label htmlFor="comments">Commentaires ou Demandes Spéciales </label>
            <textarea id="comments" name="comments"></textarea>
          </div>
        </div>
        <button type="submit" className="reservation-submit-button">Envoyer</button>
      </form>
    </div>
  );
};

export default ReservationForm;
