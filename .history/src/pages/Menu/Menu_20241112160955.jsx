import React, { useState } from 'react';
import './Menu.css';
import CardMenu from '../../components/CardMenu/CardMenu';

import allData from '../../Other/data/all.json';
import classiquesData from '../../Other/data/classiques-italiens.json';
import creationsData from '../../Other/data/creations-maison.json';
import ExtrasSection from '../../components/ExtrasSection/ExtrasSection';

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
          className={`menu-button ${selectedCategory === 'specialites' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('specialites')}
        >
          Spécialités
        </button>
        <button
          className={`menu-button ${selectedCategory === 'specialites' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('specialites')}
        >
          Spécialités
        </button>
      </div>

      <div className="menu-cards">
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
  
           <section id="">
       <ExtrasSection />
      </section>
      
    </div>
  );
};

export default Menu;
