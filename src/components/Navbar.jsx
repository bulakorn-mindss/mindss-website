import React from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'th' ? 'en' : 'th';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="navbar glass-panel">
      <div className="container nav-container">
        <a href="#" className="logo">
          <img src="/logo.png" alt="Mind Solution and Service Logo" height="30" />
        </a>
        <ul className="nav-links">
          <li><a href="#home">{t('navbar.home')}</a></li>
          <li><a href="#services">{t('navbar.services')}</a></li>
          <li><a href="#about">{t('navbar.about')}</a></li>
          <li><a href="#contact">{t('navbar.contact')}</a></li>
        </ul>
        <div className="nav-actions">
          <button className="lang-toggle" onClick={toggleLanguage}>
            {i18n.language === 'th' ? 'EN' : 'TH'}
          </button>
          <a href="#contact" className="btn btn-primary">{t('navbar.get_in_touch')}</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
