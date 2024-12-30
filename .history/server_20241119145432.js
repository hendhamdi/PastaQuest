require('dotenv').config(); // Charger les variables d'environnement
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const Reservation = require('./models/Reservation'); // Import du modèle Reservation

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

// Route pour la page d'accueil
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


// Route pour créer une réservation
app.post('/reservation', async (req, res) => {
  const { nom, prenom, telephone, email, dateReservation, heureReservation, nombrePersonnes, commentaires } = req.body;

  // Vérification des champs obligatoires
  if (!nom || !prenom || !telephone || !email || !dateReservation || !heureReservation || !nombrePersonnes) {
    return res.status(400).json({ message: 'Tous les champs obligatoires doivent être remplis.' });
  }

  try {
    // Création de la réservation
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

    // Enregistrement dans la base de données
    await reservation.save();

    // Envoi de l'email de confirmation
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Confirmation de votre réservation',
      text: `Bonjour ${prenom},\n\nVotre réservation pour le ${dateReservation} à ${heureReservation} a été confirmée !\n\nMerci de nous avoir choisis !\n\nCordialement,\nL’équipe PastaQuest`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Erreur d\'envoi de l\'email:', error);
        res.status(500).json({ message: 'La réservation a été créée, mais l\'envoi de l\'email a échoué.' });
      } else {
        console.log('Email envoyé:', info.response);
        res.status(201).json({ message: 'Réservation réussie et email de confirmation envoyé.', reservation });
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Erreur interne du serveur', error: error.message });
  }
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
