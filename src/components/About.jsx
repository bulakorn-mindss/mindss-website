import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about">
      <div className="container about-container">
        <div className="about-content">
          <h2 className="section-title text-left">{t('about.title_about')} <span className="text-gradient">MindSS</span></h2>
          <p className="about-text">
            {t('about.text1')}
          </p>
          <p className="about-text">
            {t('about.text2')}
          </p>
          
          <div className="stats-grid">
            <div className="stat-item glass-panel">
              <h4 className="stat-number text-gradient">10+</h4>
              <p className="stat-label">{t('about.stat1_label')}</p>
            </div>
            <div className="stat-item glass-panel">
              <h4 className="stat-number text-gradient">500+</h4>
              <p className="stat-label">{t('about.stat2_label')}</p>
            </div>
          </div>
        </div>
        <div className="about-image-wrapper">
          <div className="about-image-placeholder glass-panel">
            <span className="placeholder-icon">🏢</span>
            <p>{t('about.placeholder')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
