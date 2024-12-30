const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Reservation = require('./models/Reservation');  // Import du modèle Reservation
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/restauration', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connexion réussie à MongoDB'))
.catch(err => console.error('Erreur de connexion', err));


// Route pour récupérer toutes les réservations
app.get('/reservations', async (req, res) => {
  try {
    const reservations = await Reservation.find(); // Récupérer toutes les réservations de la base de données
    res.status(200).json(reservations); // Renvoyer les réservations au format JSON
  } catch (error) {
    // En cas d'erreur, renvoyer un message d'erreur avec le code 500
    res.status(500).json({
      message: 'Erreur interne du serveur',
      error: error.message
    });
  }
});

// Route pour créer une réservation
app.post('/reservations', async (req, res) => {
  const { nom, prenom, telephone, email, dateReservation, heureReservation, nombrePersonnes, commentaires } = req.body;

  if (!nom || !prenom || !telephone || !email || !dateReservation || !heureReservation || !nombrePersonnes) {
    return res.status(400).json({
      message: 'Tous les champs obligatoires doivent être remplis.'
    });
  }

  try {
    const reservation = new Reservation({
      nom,
      prenom,
      telephone,
      email,
      dateReservation,
      heureReservation,
      nombrePersonnes,
      commentaires
    });

    await reservation.save();

    // Envoi de l'email de confirmation
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'hamdihend857@gmail.com',
        pass: 'kaar nciz mvzf mvrx'
      }
    });

    const mailOptions = {
      from: 'hamdihend857@gmail.com',
      to: email,
      subject: 'Confirmation de votre réservation',
      text: `Bonjour ${prenom},\n\nVotre réservation pour le ${dateReservation} à ${heureReservation} a été confirmée !\n\nMerci de nous avoir choisis !\n\nCordialement,\nL’équipe PastaQuest`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Erreur d\'envoi de l\'email:', error);
      } else {
        console.log('Email envoyé:', info.response);
      }
    });

    res.status(201).json({
      message: 'Réservation réussie et email de confirmation envoyé.',
      reservation
    });
  } catch (error) {
    res.status(500).json({
      message: 'Erreur interne du serveur',
      error: error.message
    });
  }
});

// Route pour récupérer les réservations
app.get('/reservations', async (req, res) => {
  try {
    const reservations = await Reservation.find(); // Récupérer toutes les réservations
    res.status(200).json(reservations); // Envoyer les réservations au format JSON
  } catch (error) {
    res.status(500).json({
      message: 'Erreur interne du serveur',
      error: error.message
    });
  }
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
