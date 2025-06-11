import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import '../../css/GetStartedBanner.css';

const GetStartedBanner = () => {
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.3 });
  const [visualRef, visualVisible] = useScrollAnimation({ threshold: 0.2 });

  const handleGetStarted = () => {
    // This could navigate to a signup page or scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="get-started-banner">
      <div className="banner-container">
        <div 
          ref={contentRef}
          className={`banner-content animate-fade-in-left ${contentVisible ? 'visible' : ''}`}
        >
          <h2 className="banner-title">Ready to manage your money smarter?</h2>
          <p className="banner-description">
            Join thousands of users who have already transformed their financial future. 
            Start your journey today and take control of your finances.
          </p>
          <button 
            className="banner-cta"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>
        
        <div 
          ref={visualRef}
          className={`banner-visual animate-fade-in-right ${visualVisible ? 'visible' : ''}`}
        >
          <div className="floating-elements">
            <div className="element element-1">💰</div>
            <div className="element element-2">📈</div>
            <div className="element element-3">🎯</div>
            <div className="element element-4">💳</div>
            <div className="element element-5">📊</div>
          </div>
        </div>
        
        <div className="banner-background-effect"></div>
      </div>
    </section>
  );
};

export default GetStartedBanner;