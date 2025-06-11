import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import '../../css/FeaturesSection.css';

const FeaturesSection = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.2 });
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.1 });

  const features = [
    {
      icon: '🧾',
      title: 'Expense Tracker',
      description: 'Monitor every penny with intelligent categorization and real-time insights into your spending patterns.'
    },
    {
      icon: '🧠',
      title: 'Prediction Model',
      description: 'AI-powered forecasting helps you anticipate future expenses and plan your budget with confidence.'
    },
    {
      icon: '🧮',
      title: 'Financial Calculator',
      description: 'Advanced calculators for loans, investments, and savings to make informed financial decisions.'
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div 
          ref={sectionRef}
          className={`features-header animate-fade-in-up ${sectionVisible ? 'visible' : ''}`}
        >
          <h2 className="features-title">Powerful Financial Tools</h2>
          <p className="features-subtitle">
            Everything you need to take control of your financial future
          </p>
        </div>
        
        <div 
          ref={gridRef}
          className="features-grid"
        >
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card stagger-animation ${gridVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;