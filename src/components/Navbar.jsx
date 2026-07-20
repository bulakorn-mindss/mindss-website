import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar glass-panel">
      <div className="container nav-container">
        <a href="#" className="logo">
          <img src="/logo.png" alt="Mind Solution and Service Logo" height="30" />
        </a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="btn btn-primary">Get in Touch</a>
      </div>
    </nav>
  );
};

export default Navbar;
