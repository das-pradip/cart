import React from 'react';
import '../App.css'; // Import CSS for Footer

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 EcoYogaMat. All rights reserved.</p>
      <div className="footer-links">
        <a href="#contact">Contact Us</a>
        <a href="#privacy-policy">Privacy Policy</a>
      </div>
      <div className="social-media">
        {/* Add social media icons or links here */}
        <a href="#"><i className="icon-facebook"></i> Facebook</a>
        <a href="#"><i className="icon-twitter"></i> Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
