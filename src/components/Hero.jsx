import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            {t('hero.title1')} <br />
            <span className="text-gradient">{t('hero.title2')}</span>
          </h1>
          <p className="hero-subtitle">
            {t('hero.subtitle')}
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn btn-primary">{t('hero.btn_services')}</a>
            <a href="#about" className="btn btn-outline">{t('hero.btn_about')}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
