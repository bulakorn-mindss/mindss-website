import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <a href="#" className="logo">
            <img src="/logo.png" alt="Mind Solution and Service Logo" height="40" />
          </a>
          <p className="footer-desc">
            {t('footer.desc1')}<br/>
            {t('footer.desc2')}
          </p>
        </div>
        <div className="footer-links">
          <h3>{t('footer.quick_links')}</h3>
          <ul>
            <li><a href="#home">{t('footer.home')}</a></li>
            <li><a href="#services">{t('footer.services')}</a></li>
            <li><a href="#about">{t('footer.about_us')}</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>{t('footer.contact_us')}</h3>
          <p>{t('footer.address')}</p>
          <a href="https://www.facebook.com/profile.php?id=100063491202700" target="_blank" rel="noopener noreferrer" className="social-link">
            {t('footer.fb_page')}
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {t('footer.desc1')} {t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
