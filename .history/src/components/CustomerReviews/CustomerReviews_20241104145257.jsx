import React, { useState } from 'react';
import reviewsData from '../../Other/reviews.json';
import './CustomerReviews.css';

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(reviewsData); // Charge les données du fichier JSON
  }, []);

  return (
    <div className="customer-reviews">
      <h2 className="reviews-title">Ce Que Nos Clients Disent de Nous</h2>
      <div className="reviews-navigation">
        <button onClick={handlePrev} className="nav-button">←</button>
        <div className="reviews-container">
          {visibleReviews.map((review, index) => (
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
        <button onClick={handleNext} className="nav-button">→</button>
      </div>
    </div>
  );
};

export default CustomerReviews;
