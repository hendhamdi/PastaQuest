// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import twitterIcon from '../../Images/Footer/twitter.png';
import instagramIcon from '../../Images/Footer/video.png';
import facebookIcon from '../../Images/Footer/social.png';
import instaImage1 from '../../Images/Footer/1.jpg';
import instaImage2 from '../../Images/Footer/2.jpg';
import instaImage3 from '../../Images/Footer/3.jpg';
import instaImage4 from '../../Images/Footer/4.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-section">
          <h3>Contactez-nous</h3>
          <p>Nous sommes à votre disposition pour toute question, demande d’information ou réservation. N’hésitez pas à nous contacter via les moyens suivants :</p>
          <div className="footer-social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul className="footer-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservation">Réservation</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/chefs">Chefs</Link></li>
            <li><Link to="/contact">Avis des clients </Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Informations</h3>
          <p>Horaires d'ouverture:</p>
          <p>Du lundi au vendredi : 11h00 - 22h00</p>
          <p>Le samedi et dimanche : 12h00 - 01h00</p>
          <p>Adresse: 123 Rue de la Gastronomie, Tunis</p>
          <p>Téléphone: +216 1 23 45 67 89</p>
          <p>Email: PastaQuestRestaurant@gmail.com</p>
        </div>
        <div className="footer-section">
          <h3>Suivez-nous sur Instagram</h3>
          <div className="footer-instagram-gallery">
            <img src={instaImage1} alt="Instagram 1" />
            <img src={instaImage2} alt="Instagram 2" />
            <img src={instaImage3} alt="Instagram 3" />
            <img src={instaImage4} alt="Instagram 4" />
          </div>
        </div>
      </div>
 <hr className="footer-divider" />      <div className="footer-copyright">
        &copy; 2024 Mon Restaurant. Tous droits réservés.
        
      </div>
    </footer>
  );
};

export default Footer;
