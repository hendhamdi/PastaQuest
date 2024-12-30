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
app.post('/', async (req, res) => {
  const { nom, prenom, telephone, email, dateReservation, heureReservation, nombrePersonnes, commentaires } = req.body;

  // Vérifier que tous les champs nécessaires sont présents
  if (!nom || !prenom || !telephone || !email || !dateReservation || !heureReservation || !nombrePersonnes) {
    return res.status(400).json({
      message: 'Tous les champs obligatoires doivent être remplis.'
    });
  }

  try {
    // Création d'une nouvelle réservation
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

    app.get('/', (req, res) => {
  res.send('Bienvenue sur la page d\'accueil!');
});


    // Enregistrement de la réservation dans la base de données
    await reservation.save();

    // Envoi de l'email de confirmation
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Ou un autre service de ton choix (par exemple, Outlook, SendGrid, etc.)
      auth: {
        user: 'hamdihend857@gmail.com', // Ton email
        pass: 'kaar nciz mvzf mvrx' // Ton mot de passe (ou un mot de passe d'application)
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

    // Réponse de confirmation
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

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
