import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Mon Restaurant. Tous droits réservés.</p>
      <div className="footer-links">
        <a href="/privacy">Politique de confidentialité</a>
        <a href="/terms">Conditions d'utilisation</a>
      </div>
    </footer>
  );
};

export default Footer;