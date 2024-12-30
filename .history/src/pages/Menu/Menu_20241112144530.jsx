import React, { useState } from 'react';
import './Menu.css';
import CardMenu from '../../components/CardMenu/CardMenu'; // Assurez-vous que c'est correctement importé

// Importez les données JSON
import allData from '../../Other/data/all.json';
import classiquesData from '../../Other/data/classiques-italiens.json';
import creationsData from '../../Other/data/creations-maison.json';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const getCategoryData = () => {
    switch (selectedCategory) {
      case 'all':
        return allData;
      case 'classiques':
        return classiquesData;
      case 'creations':
        return creationsData;
      default:
        return allData;
    }
  };

  const categoryData = getCategoryData();

  return (
    <div className="menu-container">
      <h1>Notre Menu</h1>
      <p>Un Voyage au Cœur des Saveurs</p>

      <div className="menu-category-buttons">
        <button
          className={`category-button ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('all')}
        >
          Tous
        </button>
        <button
          className={`category-button ${selectedCategory === 'classiques' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('classiques')}
        >
          Classiques Italiens
        </button>
        <button
          className={`category-button ${selectedCategory === 'creations' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('creations')}
        >
          Créations Maison
        </button>
        <button
          className={`category-button ${selectedCategory === 'specialites' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('specialites')}
        >
          Spécialités
        </button>
      </div>

      <div className="menu-card-list">
        {categoryData.map((item, index) => (
          <div key={index} className="menu-card">
            <CardMenu
              image={item.image}
              name={item.name}
              price={item.price}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
