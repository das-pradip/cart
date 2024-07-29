import React from 'react';
import '../App.css'; // Import CSS for PricingSection

const PricingSection = () => {
  return (
    <section id="pricing" className="pricing">
      <h2>Pricing</h2>
      <div className="pricing-card">
        <h3>$39.99</h3>
        <p>Regular Price</p>
        <button className="cta-button">Buy Now</button>
      </div>
    </section>
  );
};

export default PricingSection;
