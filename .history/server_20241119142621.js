const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Reservation = require('./models/Reservation');  // Le modèle de réservation
const nodemailer = require('nodemailer');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connexion MongoDB
mongoose.connect('mongodb://localhost:27017/monRestaurant', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie'))
  .catch((err) => console.log('Erreur de connexion à MongoDB:', err));

// Route POST /reservations
app.post('/reservations', async (req, res) => {
  try {
    const reservation = new Reservation(req.body); // Créer une nouvelle réservation avec les données envoyées
    await reservation.save(); // Sauvegarder dans la base de données MongoDB
    res.status(201).json({ message: 'Réservation réussie', reservation }); // Répondre avec un statut 201 et la réservation

    // Envoyer un email de confirmation
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ton-email@gmail.com',
        pass: 'ton-mot-de-passe',
      },
    });

    const mailOptions = {
      from: 'ton-email@gmail.com',
      to: req.body.email, // L'email du client
      subject: 'Confirmation de Réservation',
      text: `Votre réservation est confirmée pour le ${req.body.date}.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Erreur lors de l\'envoi de l\'email:', error);
      } else {
        console.log('Email envoyé: ' + info.response);
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de la réservation', error: error.message });
  }
});

// Route GET /reservations pour récupérer les réservations
app.get('/reservations', async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des réservations', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
