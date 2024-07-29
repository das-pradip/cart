import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import CSS for Header

const Header = () => {
  return (
    <header className="header">
      <div className="logo">EcoYogaMat</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="#features">Features</Link></li>
          <li><Link to="#pricing">Pricing</Link></li>
          <li><Link to="#reviews">Reviews</Link></li>
          <li><Link to="#contact">Contact Us</Link></li>
        </ul>
      </nav>
      <button className="cta-button">Buy Now</button>
    </header>
  );
};

export default Header;
