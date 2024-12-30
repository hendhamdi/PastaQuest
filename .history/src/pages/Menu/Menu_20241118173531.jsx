import React, { useState } from 'react';
import './Menu.css';
import CardMenu from '../../components/CardMenu/CardMenu';

import allData from '../../other/data/all.json';
import classiquesData from '../../other/data/classiques-italiens.json';
import creationsData from '../../other/data/creations-maison.json';
import vegansData from '../../other/data/pates-veganes.json';
import ExtrasSection from '../../components/ExtrasSection/ExtrasSection';
import EpicesData from '../../other/data/plats-epices.json';

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
      case 'veganes':
        return vegansData;
      case 'Epices':
        return EpicesData;

      default:
        return allData;
    }
  };

  const categoryData = getCategoryData();

  return (
    <div className="menu-section">
      <h1>Notre Menu</h1>
      <p>Un Voyage au Cœur des Saveurs</p>

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
          className={`menu-button ${selectedCategory === 'veganes' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('veganes')}
        >
          Pâtes Véganes
        </button>
        <button
          className={`menu-button ${selectedCategory === 'Epices' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('Epices')}
        >
          Plats Épicés
        </button>
      </div>

      <div className="menu-cards">
        {categoryData.map((item, index) => (
          <div key={index} className="menu-card">
            <CardMenu
              image={item.image}
              price={item.price}
              name={item.name}
              description={item.description}
            />
          </div>
        ))}
      </div>
  
       <section id="">
       <ExtrasSection />
      </section>
      
    </div>
  );
};

export default Menu;
