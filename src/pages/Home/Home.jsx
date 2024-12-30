import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import './Home.css';
import image from '../../Images/Home/image.png';
import classicPasta from '../../Images/Home/classique.jpg';
import premiumPasta from '../../Images/Home/vig.jpg';
import veganPasta from '../../Images/Home/mer.jpg';
import seasonalPasta from '../../Images/Home/gig.jpg';
import Card from '../../components/Card/Card';
import ThirdSection from '../../components/ThirdSection/ThirdSection';
import FourthSection from '../../components/FourthSection/FourthSection';
import FifthSection from '../../components/FifthSection/FifthSection';
import CustomerReviews from '../../components/CustomerReviews/CustomerReviews';
import BlogSection from '../../components/BlogSection/BlogSection';


const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <section className="home">
        <div className="home-content">
          <h1 className="home-title">
            Un Voyage<br /> à Travers<br /> le Goût
          </h1>
          <div className="home-buttons">
            <Link to="/reservation" className="home-button reservation">Réservez maintenant</Link>
            <Link to="/menu" className="home-button menu">Découvrir le menu</Link>
          </div>
        </div>
        <div className="home-image">
          <img src={image} alt="Pasta" className="image-right" />
        </div>
      </section>

      <section className="offers-section">
        <h2 className="offers-title">Nous offrons une expérience culinaire authentique <br/>Avec des recettes traditionnelles et des ingrédients frais</h2>
        <div className="offers-cards">
          <Card 
            image={classicPasta} 
            title="Pâtes Classiques" 
            description="Spaghetti Bolognese, Penne Arrabbiata, Tagliatelle Alfredo, Lasagne, Fettuccine Carbonara" 
          />
          <Card 
            image={premiumPasta} 
            title="Pâtes Végétariennes" 
            description="Pâtes aux Légumes Grillés Pesto de Basilic et Pâtes Raviolis aux Épinards et Ricotta Linguine aux Champignons  Pâtes à la Sauce Tomate et Basilic" 
          />
          <Card 
            image={veganPasta} 
            title="Pâtes de Mer" 
            description="Spaghetti aux Fruits de Mer Linguine au Saumon Fumé Penne aux Crevettes et Ail Tagliatelle aux Coquilles Saint-Jacques Fettuccine à la Sauce de Crabe" 
          />
          <Card 
            image={seasonalPasta} 
            title="Pâtes Signature" 
            description="Plat spécial du chef Pâtes du jour Spécialités régionales Pâtes inspirées des cuisines du monde" 
          />
        </div>
      </section>

      <ThirdSection />

      <FourthSection />

      <section id="chefs-section">
        <FifthSection />
      </section>

      <section id="customer-reviews-section">
        <CustomerReviews />
      </section>

      <section id="blog-section">
        <BlogSection />
      </section>
    </div>
  );
};

export default Home;
