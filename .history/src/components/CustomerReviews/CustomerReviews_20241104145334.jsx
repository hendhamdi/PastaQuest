import React, { useEffect, useState } from 'react';
import './CustomerReviews.css';
import reviewsData from '../data/reviews.json'; // Ajustez le chemin selon votre structure de dossier

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(reviewsData); // Charge les données du fichier JSON
  }, []);

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
