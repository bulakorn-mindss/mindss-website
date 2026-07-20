import React from 'react';
import { useTranslation } from 'react-i18next';
import './Services.css';

const Services = () => {
  const { t } = useTranslation();

  const servicesData = [
    {
      title: t('services.items.item0_title'),
      description: t('services.items.item0_desc'),
      icon: '💻'
    },
    {
      title: t('services.items.item1_title'),
      description: t('services.items.item1_desc'),
      icon: '🌐'
    },
    {
      title: t('services.items.item2_title'),
      description: t('services.items.item2_desc'),
      icon: '📞'
    },
    {
      title: t('services.items.item3_title'),
      description: t('services.items.item3_desc'),
      icon: '🛠️'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">{t('services.title_our')} <span className="text-gradient">{t('services.title_services')}</span></h2>
        <p className="section-subtitle">{t('services.subtitle')}</p>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card glass-panel" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
