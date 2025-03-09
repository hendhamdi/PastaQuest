import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Navbar.css'; 
import logo from '../../Images/Logo/logo.png';

const Navbar = () => {
  const navigate = useNavigate(); 

  return (
    <nav className="navbar">
      
        <h1 className="restaurant-name">PastaQuest</h1>
      
    </nav>
  );
};

export default Navbar;
