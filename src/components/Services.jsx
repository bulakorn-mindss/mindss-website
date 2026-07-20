import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Services.css';

const Services = () => {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState(null);

  const servicesData = [
    {
      title: t('services.items.item0_title'),
      description: t('services.items.item0_desc'),
      detail: t('services.items.item0_detail'),
      icon: '💻',
      images: ['/images/modern_it_partner.png', '/images/cloud.jpg']
    },
    {
      title: t('services.items.item1_title'),
      description: t('services.items.item1_desc'),
      detail: t('services.items.item1_detail'),
      icon: '🌐',
      images: ['/images/internet.jpg', '/images/cloud.jpg']
    },
    {
      title: t('services.items.item2_title'),
      description: t('services.items.item2_desc'),
      detail: t('services.items.item2_detail'),
      icon: '📞',
      images: ['/images/iot.jpg', '/images/internet.jpg']
    },
    {
      title: t('services.items.item3_title'),
      description: t('services.items.item3_desc'),
      detail: t('services.items.item3_detail'),
      icon: '🛠️',
      images: ['/images/modern_it_partner.png', '/images/iot.jpg']
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">{t('services.title_our')} <span className="text-gradient">{t('services.title_services')}</span></h2>
        <p className="section-subtitle">{t('services.subtitle')}</p>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div 
              className="service-card glass-panel" 
              key={index}
              onClick={() => openModal(service)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <div className="read-more">
                <span className="text-gradient">Read more &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content glass-panel" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-header">
              <span className="modal-icon">{selectedService.icon}</span>
              <h2>{selectedService.title}</h2>
            </div>
            <div className="modal-body">
              <p className="modal-detail">{selectedService.detail}</p>
              
              <h4 className="portfolio-title">Our Work / Portfolio</h4>
              <div className="portfolio-gallery">
                {selectedService.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`${selectedService.title} work`} className="portfolio-img" />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
