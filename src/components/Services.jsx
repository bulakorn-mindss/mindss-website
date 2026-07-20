import React from 'react';
import './Services.css';

const servicesData = [
  {
    title: 'จัดจำหน่ายอุปกรณ์ไอที',
    description: 'ขายส่งและปลีกคอมพิวเตอร์ แล็ปท็อป และอุปกรณ์ไอทีประสิทธิภาพสูงเพื่อรองรับทุกความต้องการทางธุรกิจ',
    icon: '💻'
  },
  {
    title: 'ระบบเครือข่ายเน็ตเวิร์ค',
    description: 'โครงสร้างพื้นฐานเครือข่ายที่เสถียรและรองรับการขยายตัว ตั้งแต่เร้าเตอร์ สวิตช์ ไปจนถึงเซิร์ฟเวอร์เต็มรูปแบบ',
    icon: '🌐'
  },
  {
    title: 'ระบบสื่อสารและโทรคมนาคม',
    description: 'อุปกรณ์สื่อสารที่ทันสมัยและระบบเสียงผ่าน IP (VoIP) เพื่อให้ทีมงานของคุณเชื่อมต่อกันได้อย่างไร้รอยต่อ',
    icon: '📞'
  },
  {
    title: 'บริการที่ปรึกษาและดูแลระบบไอที',
    description: 'คำแนะนำจากผู้เชี่ยวชาญและการสนับสนุนทางเทคนิค เพื่อให้ระบบไอทีของคุณทำงานได้อย่างราบรื่นตลอดเวลา',
    icon: '🛠️'
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">บริการ<span className="text-gradient">ของเรา</span></h2>
        <p className="section-subtitle">โซลูชันเทคโนโลยีครบวงจรที่ออกแบบมาเพื่อเสริมศักยภาพการดำเนินธุรกิจและขับเคลื่อนการเติบโตของคุณ</p>
        
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
