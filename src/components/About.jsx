import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <div className="about-content">
          <h2 className="section-title text-left">เกี่ยวกับ <span className="text-gradient">MindSS</span></h2>
          <p className="about-text">
            บริษัท มายด์ โซลูชั่น แอนด์ เซอร์วิส จำกัด คือผู้นำด้านการจัดจำหน่ายอุปกรณ์ไอทีและระบบโทรคมนาคมในกรุงเทพมหานคร นับตั้งแต่ก่อตั้ง เรามุ่งมั่นส่งมอบสินค้าเทคโนโลยีคุณภาพสูงและบริการด้านไอทีแบบครบวงจรเพื่อยกระดับศักยภาพของธุรกิจ
          </p>
          <p className="about-text">
            ความเชี่ยวชาญของเราครอบคลุมตั้งแต่ฮาร์ดแวร์คอมพิวเตอร์ ระบบเครือข่าย ไปจนถึงการให้คำปรึกษาด้านไอทีระดับมืออาชีพ เราภูมิใจในบริการที่เชื่อถือได้ ความเชี่ยวชาญทางเทคนิค และความทุ่มเทเพื่อให้ลูกค้าประสบความสำเร็จ
          </p>
          
          <div className="stats-grid">
            <div className="stat-item glass-panel">
              <h4 className="stat-number text-gradient">10+</h4>
              <p className="stat-label">ปีแห่งประสบการณ์</p>
            </div>
            <div className="stat-item glass-panel">
              <h4 className="stat-number text-gradient">500+</h4>
              <p className="stat-label">ลูกค้าที่ไว้วางใจ</p>
            </div>
          </div>
        </div>
        <div className="about-image-wrapper">
          {/* Placeholder for an actual image */}
          <div className="about-image-placeholder glass-panel">
            <span className="placeholder-icon">🏢</span>
            <p>พันธมิตรด้านไอทีที่เชื่อถือได้ของคุณ</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
