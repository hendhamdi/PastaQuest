import React, { useState } from 'react';
import './ReservationForm.css'; // Fichier CSS pour styliser le formulaire

const ReservationForm = () => {
  // État pour gérer les données du formulaire
  const [formData, setFormData] = useState({
  nom: '',
  prenom: '',
  telephone: '',
  email: '',
  dateReservation: '',
  heureReservation: '',
  nombrePersonnes: 1,
  commentaires: ''
});


  // Fonction pour gérer le changement des champs du formulaire
 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};


  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envoyer les données au backend (adresse du serveur backend à ajuster)
      const handleSubmit = async (event) => {
  event.preventDefault();

  const response = await fetch('http://localhost:5000/reservations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nom: formData.nom,
      prenom: formData.prenom,
      telephone: formData.telephone,
      email: formData.email,
      dateReservation: formData.dateReservation,
      heureReservation: formData.heureReservation,
      nombrePersonnes: formData.nombrePersonnes,
      commentaires: formData.commentaires,
    }),
  });

  const data = await response.json();
  if (response.ok) {
    alert(data.message);
  } else {
    alert('Erreur : ' + data.message);
  }
};

    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire :', error);
      alert('Une erreur est survenue lors de la soumission.');
    }
  };

  return (
    <div className="reservation-card">
      <form className="reservation-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">Nom </label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder="Entrez votre nom"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Prénom </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder="Entrez votre prénom"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Numéro de Téléphone </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Entrez votre numéro de téléphone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Entrez votre e-mail"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Date de Réservation </label>
            <input
              type="date"
              id="dateReservation"
              name="dateReservation"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Heure de Réservation </label>
            <input
              type="time"
              id="heureReservation
"
              name="heureReservation
"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="guests">Nombre de Personnes </label>
            <input
              type="number"
              id="nombrePersonnes"
              name="nombrePersonnes"
              min="1"
              value={formData.guests}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="comments">Commentaires ou Demandes Spéciales </label>
            <textarea
              id="commentaires"
              name="commentaires"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Demandes Spéciales ou Commentaires"
            ></textarea>
          </div>
        </div>
        <button type="submit" className="reservation-submit-button">Envoyer</button>
      </form>
    </div>
  );
};

export default ReservationForm;
