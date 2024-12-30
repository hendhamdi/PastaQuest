import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/reservation">Reservation</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
