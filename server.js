const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Reservation = require('./models/Reservation');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));
app.use(bodyParser.json());

// Connection to MongoDB (Azure / Atlas)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Logs détaillés de connexion MongoDB
mongoose.connection.on('connected', () => console.log('✅ MongoDB connecté'));
mongoose.connection.on('error', (err) => console.error('❌ MongoDB erreur', err));

// Test rolling update
console.log("Rolling update test v2");

// Route GET pour toutes les réservations
app.get('/reservations', async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({
      message: 'Erreur interne du serveur',
      error: error.message
    });
  }
});

// Route POST pour créer une réservation
app.post('/reservations', async (req, res) => {
  const { nom, prenom, telephone, email, dateReservation, heureReservation, nombrePersonnes, commentaires } = req.body;

  // Validation des champs obligatoires
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
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS  // App Password
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Confirmation de votre réservation PastaQuest',
      text: `Bonjour ${prenom},\n\n` +
            `Votre réservation chez PastaQuest a été confirmée.\n\n` +
            `Détails :\n` +
            `- Nom : ${nom}\n` +
            `- Date : ${dateReservation}\n` +
            `- Heure : ${heureReservation}\n` +
            `- Nombre de personnes : ${nombrePersonnes}\n\n` +
            `Merci et à bientôt !`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Erreur envoi email :', error);
      } else {
        console.log('Email envoyé :', info.response);
      }
    });

    res.status(201).json({
      message: 'Réservation créée et email de confirmation envoyé.',
      reservation
    });
  } catch (error) {
    res.status(500).json({
      message: 'Erreur interne du serveur',
      error: error.message
    });
  }
});

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur le port ${PORT}`);
});
