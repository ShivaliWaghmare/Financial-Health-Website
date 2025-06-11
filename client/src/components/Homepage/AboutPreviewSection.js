// eslint-disable-next-line
import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import '../../css/AboutPreviewSection.css';

const AboutPreviewSection = () => {
  const [textRef, textVisible] = useScrollAnimation({ threshold: 0.3 });
  const [visualRef, visualVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="about-preview-section">
      <div className="about-preview-container">
        <div className="about-preview-content">
          <div 
            ref={textRef}
            className={`about-preview-text animate-fade-in-left ${textVisible ? 'visible' : ''}`}
          >
            <h2 className="about-preview-title">Our Mission</h2>
            <p className="about-preview-description">
              We believe that everyone deserves access to powerful financial tools 
              that were once only available to the wealthy. Our mission is to democratize 
              financial intelligence through cutting-edge technology, making it simple 
              for anyone to track, predict, and grow their wealth. We're not just building 
              an app – we're building a movement towards financial empowerment for all.
            </p>
            <a href="/aboutUs" className="about-preview-cta">
              Learn More About Us
            </a>
          </div>
          <div 
            ref={visualRef}
            className={`about-preview-visual animate-scale-in ${visualVisible ? 'visible' : ''}`}
          >
            <div className="mission-graphic">
              <div className="circle-1"></div>
              <div className="circle-2"></div>
              <div className="circle-3"></div>
              <div className="center-content">
                <span className="mission-icon">🎯</span>
                <p className="mission-text">Empowering Financial Freedom</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreviewSection;