import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import '../../css/HowItWorksSection.css';

const HowItWorksSection = () => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.3 });
  const [stepsRef, stepsVisible] = useScrollAnimation({ threshold: 0.2 });

  const steps = [
    {
      number: '01',
      title: 'Sign Up',
      description: 'Create your account in seconds and access your personalized financial dashboard.',
      icon: '👤'
    },
    {
      number: '02', 
      title: 'Add Expenses',
      description: 'Input your transactions manually or connect your accounts for automatic tracking.',
      icon: '💳'
    },
    {
      number: '03',
      title: 'Visualize & Grow',
      description: 'Watch your financial insights come to life with predictions and growth recommendations.',
      icon: '📊'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="how-it-works-container">
        <div 
          ref={headerRef}
          className={`how-it-works-header animate-fade-in-up ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="how-it-works-title">How It Works</h2>
          <p className="how-it-works-subtitle">
            Get started with your financial journey in three simple steps
          </p>
        </div>
        
        <div 
          ref={stepsRef}
          className="steps-container"
        >
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`step-item animate-fade-in-up ${stepsVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.3}s` }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <div className="connector-line"></div>
                  <div className="connector-arrow">→</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;