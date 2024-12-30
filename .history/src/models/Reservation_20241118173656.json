const mongoose = require('mongoose');

// Schéma de réservation
const reservationSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  prenom: {
    type: String,
    required: true
  },
  telephone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: [/\S+@\S+\.\S+/, 'Email est invalide']
  },
  dateReservation: {
    type: Date,
    required: true
  },
  heureReservation: {
    type: String,
    required: true
  },
  nombrePersonnes: {
    type: Number,
    required: true
  },
  commentaires: {
    type: String
  }
});

// Création du modèle Reservation
const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
