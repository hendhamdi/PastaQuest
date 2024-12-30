import React, { useState, useEffect } from 'react';
import './Menu.css';
import Card from '../../components/Card/Card';

// Importez les données JSON
import allData from '../../data/all.json';
import classiquesData from '../../data/classiques-italiens.json';
import creationsData from '../../data/creations-maison.json';
// Importez d'autres catégories si nécessaire

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPlats, setFilteredPlats] = useState(allData);

  const categories = ['All', 'Classiques Italiens', 'Créations Maison', 'Pâtes Végétariennes', 'Pâtes de Mer'];

  // Mettez à jour les plats affichés en fonction de la catégorie sélectionnée
  useEffect(() => {
    switch (selectedCategory) {
      case 'Classiques Italiens':
        setFilteredPlats(classiquesData);
        break;
      case 'Créations Maison':
        setFilteredPlats(creationsData);
        break;
      // Ajoutez d'autres cas pour les autres catégories
      default:
        setFilteredPlats(allData);
    }
  }, [selectedCategory]);

  return (
    <div className="menu">
      <h1>Notre Menu</h1>
      <p>Un Voyage au Cœur des Saveurs</p>

      <div className="menu-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`menu-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="menu-cards">
        {filteredPlats.map((plat, index) => (
          <Card
            key={index}
            image={plat.image}
            name={plat.name}
            price={plat.price}
            description={plat.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
