import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import '../../css/HeroSection.css';

const HeroSection = ({ scrollToFeatures }) => {
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.1, triggerOnce: false });
  const [visualRef, visualVisible] = useScrollAnimation({ threshold: 0.1, triggerOnce: false });

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div 
          ref={contentRef}
          className={`hero-content animate-fade-in-left ${contentVisible ? 'visible' : ''}`}
        >
          <h1 className="hero-title">Take Control of Your Finances</h1>
          <p className="hero-subtitle">Track. Predict. Grow.</p>
          <p className="hero-description">
            Transform your financial future with intelligent tracking, 
            predictive insights, and powerful calculation tools.
          </p>
          <button 
            className="hero-cta"
            onClick={scrollToFeatures}
          >
            Start Tracking Now
          </button>
        </div>
        <div 
          ref={visualRef}
          className={`hero-visual animate-fade-in-right ${visualVisible ? 'visible' : ''}`}
        >
          <div className="hero-graphic">
            <div className="chart-placeholder">
              <div className="chart-bar" style={{height: '60%'}}></div>
              <div className="chart-bar" style={{height: '80%'}}></div>
              <div className="chart-bar" style={{height: '45%'}}></div>
              <div className="chart-bar" style={{height: '90%'}}></div>
              <div className="chart-bar" style={{height: '70%'}}></div>
            </div>
            <div className="floating-icons">
              <span className="icon">💰</span>
              <span className="icon">📈</span>
              <span className="icon">🎯</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;