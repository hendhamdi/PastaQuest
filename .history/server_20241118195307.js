const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Reservation = require('./models/Reservation');  // Import du modèle Reservation
const nodemailer = require('nodemailer');  // Pour l'envoi de l'email

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

// Route pour créer une réservation
app.post('/reservations', async (req, res) => {
  try {
    const { nom, prenom, telephone, email, dateReservation, heureReservation, nombrePersonnes, commentaires } = req.body;
 // Création et enregistrement de la réservation...
  } catch (error) {
    res.status(400).json({
      message: 'Erreur lors de la réservation',
      error: error.message
    });
    //

    // Enregistrement de la réservation dans la base de données
    await reservation.save();

    // Envoi d'un email de confirmation
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Utilisation de Gmail pour l'exemple
      auth: {
        user: 'hamdihend857@gmail.com',  // Ton adresse email
        pass: 'Hhh0123456'        // Ton mot de passe
      }
    });

    const mailOptions = {
      from: 'tonemail@gmail.com',
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

    // Répondre avec une confirmation
    res.status(201).json({
      message: 'Réservation réussie et email de confirmation envoyé.',
      reservation: reservation
    });
  } catch (error) {
    res.status(400).json({
      message: 'Erreur lors de la réservation',
      error: error.message
    });
  }
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
