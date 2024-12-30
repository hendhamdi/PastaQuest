import React from 'react';
import './CardMenu.css'; 

const CardMenu = ({ image, name, price, description }) => {
  return (
    <div className="card-menu">
      <img src={image} alt={name} className="card-menu-image" />
      <div className="card-menu-details">
        <p className="card-menu-price">{price} TND</p>
        <h4 className="card-menu-name">{name}</h4>
        <p className="card-menu-description">{description}</p>
      </div>
    </div>
  );
};

export default CardMenu;
