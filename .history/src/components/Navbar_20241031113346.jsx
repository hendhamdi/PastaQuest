import React from 'react';
import { Link } from 'react-router-dom'; // Importer Link
import './Navbar.css'; // Assurez-vous d'importer le fichier CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/path/to/logo.png" alt="Logo" className="logo" />
        <h1 className="restaurant-name">PastaQuest</h1>
      </div>
      <div className="navbar-right">
        <Link to="/" className="nav-button">Accueil</Link>
        <Link to="/menu" className="nav-button">Menu</Link>
        <Link to="/evenements" className="nav-button">Événements</Link>
        <div className="reservation-button">
          <Link to="/reservation" className="reservation-button-link">Réservation</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
