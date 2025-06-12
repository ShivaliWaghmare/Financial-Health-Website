import React from 'react';
import '../../css/financialhealthCheck/HeroSectionChecker.css';

const HeroSectionChecker = ({ onStartAssessment }) => {
  return (
    <div className="hero-section">
      <h1>Is Your Financial Health in Shape?</h1>
      <p>
        Take our comprehensive assessment to discover your financial wellness score 
        and get personalized insights to improve your financial future.
      </p>
      <div className="hero-features">
        <div className="feature">📊 Detailed Analytics</div>
        <div className="feature">🎯 Personalized Insights</div>
        <div className="feature">💡 Expert Recommendations</div>
        <div className="feature">🏆 Score Tracking</div>
      </div>
      <button className="hero-btn" onClick={onStartAssessment}>
        Start Assessment
      </button>
    </div>
  );
};

export default HeroSectionChecker;