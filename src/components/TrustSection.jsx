import React from 'react';
import '../App.css'; // Import CSS for TrustSection

const TrustSection = () => {
  return (
    <section className="trust">
      <h2>Trust & Security</h2>
      <p>We take your privacy and security seriously. Our website is SSL secured, and we offer a 30-day return policy.</p>
      <div className="security-badges">
        {/* Add actual badge images or icons here */}
        <img src="/path-to-secure-badge.png" alt="Secure Payment" />
        <img src="/path-to-return-policy-badge.png" alt="Return Policy" />
      </div>
    </section>
  );
};

export default TrustSection;
