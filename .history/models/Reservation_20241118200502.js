const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  telephone: { type: String, required: true },
  email: { type: String, required: true },
  dateReservation: { type: String, required: true },  // Ou utilisez un type Date si vous préférez
  heureReservation: { type: String, required: true },  // Ou utilisez un type Date si vous préférez
  nombrePersonnes: { type: Number, required: true },
  commentaires: { type: String, required: false }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
