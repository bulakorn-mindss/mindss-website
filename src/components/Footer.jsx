import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <a href="#" className="logo">
            <img src="/logo.png" alt="Mind Solution and Service Logo" height="40" />
          </a>
          <p className="footer-desc">
            Mind Solution and Service Co., Ltd.<br/>
            Your trusted IT and telecommunication partner in Thailand.
          </p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Din Daeng, Bangkok, Thailand</p>
          <a href="https://www.facebook.com/profile.php?id=100063491202700" target="_blank" rel="noopener noreferrer" className="social-link">
            Facebook Page
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mind Solution and Service Co., Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
