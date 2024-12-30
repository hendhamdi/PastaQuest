import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Footer.css';
import twitterIcon from '../../Images/Footer/twitter.png';
import instagramIcon from '../../Images/Footer/video.png';
import facebookIcon from '../../Images/Footer/social.png';
import instaImage1 from '../../Images/Footer/1.jpg';
import instaImage2 from '../../Images/Footer/2.jpg';
import instaImage3 from '../../Images/Footer/3.jpg';
import instaImage4 from '../../Images/Footer/4.png';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigateToSection = (sectionId) => {
    if (location.pathname === '/') {
      // Si l'utilisateur est déjà sur la page d'accueil, faire défiler directement
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Rediriger vers la page d'accueil et ajouter le hash
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul className="footer-links">
            <li><a href="/">Accueil</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservation">Réservation</a></li>
            <li onClick={() => handleNavigateToSection('blog-section')}>Blog</li>
            <li onClick={() => handleNavigateToSection('chefs-section')}>Chefs</li>
            <li onClick={() => handleNavigateToSection('customer-reviews-section')}>Avis des clients</li>
          </ul>
        </div>
        {/* Autres sections du footer */}
      </div>
      <hr className="footer-divider" />
      <div className="footer-copyright">
        &copy; 2024 Mon Restaurant. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
