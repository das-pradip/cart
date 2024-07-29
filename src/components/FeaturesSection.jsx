import React from 'react';
import '../App.css'; // Import CSS for FeaturesSection

const features = [
  { icon: '🧘', title: 'Eco-Friendly Materials', description: 'Made from 100% recycled materials.' },
  { icon: '🛡️', title: 'Non-Slip Surface', description: 'Provides excellent grip even during intense workouts.' },
  { icon: '💪', title: 'Durable and Long-Lasting', description: 'Built to withstand daily use.' },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="features">
      <h2>Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
