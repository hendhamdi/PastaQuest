import React from 'react';
import './Navbar.css'; // Assurez-vous d'importer le fichier CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="nav-button">Accueil</button>
        <button className="nav-button">Menu</button>
        <button className="nav-button">Événements</button>
        <div className="reservation-button">
          <button>Réservation</button>
        </div>
      </div>
      <div className="navbar-right">
        <img src="/path/to/logo.png" alt="Logo" className="logo" />
        <h1 className="restaurant-name">Nom du Restaurant</h1>
      </div>
    </nav>
  );
};

export default Navbar;
