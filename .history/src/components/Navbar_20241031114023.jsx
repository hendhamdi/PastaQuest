import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import './Navbar.css'; // Assurez-vous d'importer le fichier CSS

const Navbar = () => {
  const navigate = useNavigate(); // Créer une instance de useNavigate

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/Images/Logo/logo.png" alt="Logo" className="logo" />
        <h1 className="restaurant-name">PastaQuest</h1>
      </div>
      <div className="navbar-right">
        <button className="nav-button" onClick={() => navigate('/')}>Accueil</button>
        <button className="nav-button" onClick={() => navigate('/menu')}>Menu</button>
        <button className="nav-button" onClick={() => navigate('/evenements')}>Événements</button>
        <div className="reservation-button">
          <button className="reservation-button-link" onClick={() => navigate('/reservation')}>Réservation</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
