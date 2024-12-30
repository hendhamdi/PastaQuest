import React, { useState, useEffect } from 'react';
import './Menu.css';
import Card from '../../components/CardMenu/CardMenu';

// Importez les données JSON
import allData from '../../Other/data/all.json';
import classiquesData from '../../Other/data/classiques-italiens.json';
import creationsData from '../../Other/data/creations-maison.json';
// Importez d'autres catégories si nécessaire

const Menu = () => {
  // État pour gérer la catégorie sélectionnée
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Fonction pour gérer le changement de catégorie
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Fonction pour obtenir les données de la catégorie sélectionnée
  const getCategoryData = () => {
    switch (selectedCategory) {
      case 'all':
        return allData;
      case 'classiques':
        return classiquesData;
      case 'creations':
        return creationsData;
    
      // Ajoutez d'autres cas si vous avez d'autres catégories
      default:
        return allData;
    }
  };

  const categoryData = getCategoryData();

  return (
    <div className="menu">
      <h1>Notre Menu</h1>
      <p>Un Voyage au Cœur des Saveurs</p>

      {/* Boutons de navigation pour les catégories */}
      <div className="menu-buttons">
        <button
          className={`menu-button ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('all')}
        >
          Tous
        </button>
        <button
          className={`menu-button ${selectedCategory === 'classiques' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('classiques')}
        >
          Classiques Italiens
        </button>
        <button
          className={`menu-button ${selectedCategory === 'creations' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('creations')}
        >
          Créations Maison
        </button>
        <button
          className={`menu-button ${selectedCategory === 'specialites' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('specialites')}
        >
          Spécialités
        </button>
        {/* Ajoutez d'autres boutons si nécessaire */}
      </div>

      {/* Affichage des cartes de plats */}
      <div className="menu-cards">
        {categoryData.map((item, index) => (
          <CardMenu
            key={index}
            image={item.image}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;