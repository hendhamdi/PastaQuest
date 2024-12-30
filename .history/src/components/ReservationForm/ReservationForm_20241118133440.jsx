import React from 'react';
import './ReservationForm.css'; // Fichier CSS pour styliser le formulaire

const ReservationForm = () => {
  return (
    <div className="reservation-card">
      <form className="reservation-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">Nom </label>
            <input type="text" id="firstName" name="firstName" required placeholder='Entrez votre nom' />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Prénom </label>
            <input type="text" id="lastName" name="lastName" required placeholder='Entrez votre prenom'/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Numéro de Téléphone </label>
            <input type="tel" id="phone" name="phone" required placeholder='Entrez votre numéro de téléphone' />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email </label>
            <input type="email" id="email" name="email" required placeholder='Entrez votre e-mail'/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Date de Réservation </label>
            <input type="date" id="date" name="date" required placeholder='Choisisez une date'/>
          </div>
          <div className="form-group">
            <label htmlFor="time">Heure de Réservation </label>
            <input type="time" id="time" name="time" required placeholder='CHoisisez lheure '  />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="guests">Nombre de Personnes </label>
            <input type="number" id="guests" name="guests" min="1" required />
          </div>
          <div className="form-group ">
            <label htmlFor="comments">Commentaires ou Demandes Spéciales </label>
            <textarea id="comments" name="comments" placeholder='Demandes Spéciales ou Commentaires '></textarea>
          </div>
        </div>
        <button type="submit" className="reservation-submit-button">Envoyer</button>
      </form>
    </div>
  );
};

export default ReservationForm;
