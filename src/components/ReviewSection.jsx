import React from 'react';
import '../App.css'; // Import CSS for ReviewsSection

const reviews = [
  { name: 'Jane Doe', text: 'Absolutely love this yoga mat! Great quality and eco-friendly.' },
  { name: 'John Smith', text: 'Fantastic mat, highly recommend for any yoga enthusiast.' },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="reviews">
      <h2>Customer Reviews</h2>
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <p>"{review.text}"</p>
            <h4>- {review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
