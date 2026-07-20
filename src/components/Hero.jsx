import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            ยกระดับธุรกิจของคุณด้วย <br />
            <span className="text-gradient">โซลูชันไอทีแห่งอนาคต</span>
          </h1>
          <p className="hero-subtitle">
            บริษัท มายด์ โซลูชั่น แอนด์ เซอร์วิส จำกัด พันธมิตรที่เชื่อถือได้ของคุณ สำหรับอุปกรณ์ไอที เน็ตเวิร์ค และระบบสื่อสารแบบครบวงจร
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn btn-primary">ดูบริการของเรา</a>
            <a href="#about" className="btn btn-outline">เรียนรู้เพิ่มเติม</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
