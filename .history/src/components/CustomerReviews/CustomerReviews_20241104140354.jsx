import React from 'react';
import './CustomerReviews.css';

const CustomerReviews = () => {
  const reviews = [
    {
      title: "Une expérience culinaire incroyable !",
      description: "Les pâtes étaient tout simplement divines, parfaitement cuites et pleines de saveurs. Le cadre est chaleureux et l'accueil très agréable. Je recommande vivement !",
      clientImage: "/path/to/client1.jpg",
      clientName: "Alex Dupont",
      clientLocation: "Paris, France"
    },
    {
      title: "Service impeccable et plats savoureux",
      description: "Un moment exceptionnel. Les saveurs étaient au rendez-vous et le personnel aux petits soins. Un endroit parfait pour passer une soirée entre amis.",
      clientImage: "/path/to/client2.jpg",
      clientName: "Marie Curie",
      clientLocation: "Lyon, France"
    },
    {
      title: "Ambiance chaleureuse et cuisine exquise",
      description: "Les plats étaient de grande qualité avec des saveurs subtiles. L’ambiance conviviale m’a tout de suite charmée.",
      clientImage: "/path/to/client3.jpg",
      clientName: "Jean Martin",
      clientLocation: "Nice, France"
    }
  ];

  return (
    <div className="customer-reviews">
      <h2 className="reviews-title">Ce Que Nos Clients Disent de Nous</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3 className="review-title">“{review.title}”</h3>
            <p className="review-description">{review.description}</p>
            <hr className="divider" />
            <div className="client-info">
              <img src={review.clientImage} alt={review.clientName} className="client-image" />
              <div className="client-details">
                <p className="client-name">{review.clientName}</p>
                <p className="client-location">{review.clientLocation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
