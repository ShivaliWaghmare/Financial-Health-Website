import React, { useState } from 'react';
import HeroSection from '../components/FinancialHealthCheck/HeroSectionChecker';
import AssessmentForm from '../components/FinancialHealthCheck/AssessmentForm';
import ResultsDisplay from '../components/FinancialHealthCheck/ResultsDisplay';
import FinancialTips from '../components/FinancialHealthCheck/FinancialTips';
import Newsletter from '../components/FinancialHealthCheck/Newsletter';
import '../css/financialhealthCheck/FinancialHealth.css';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const FinancialHealth = () => {
  const [currentView, setCurrentView] = useState('hero'); // 'hero', 'assessment', 'results'
  const [assessmentResults, setAssessmentResults] = useState(null);

  const handleStartAssessment = () => {
    setCurrentView('assessment');
  };

  const handleAssessmentComplete = (results) => {
    setAssessmentResults(results);
    setCurrentView('results');
  };

  const handleRestart = () => {
    setCurrentView('hero');
    setAssessmentResults(null);
  };

  const scrollToAssessment = () => {
    setCurrentView('assessment');
  };

  return (
    <div>
         <Header />
    <div className="financial-health-page">
      {currentView === 'hero' && (
        <>
          <HeroSection onStartAssessment={handleStartAssessment} />
          <FinancialTips />
          <Newsletter />
        </>
      )}

      {currentView === 'assessment' && (
        <AssessmentForm onComplete={handleAssessmentComplete} />
      )}

      {currentView === 'results' && assessmentResults && (
        <>
          <ResultsDisplay 
            results={assessmentResults} 
            onRestart={handleRestart}
          />
          <FinancialTips />
          <Newsletter />
        </>
      )}
      <Footer />
    </div>
    </div>
  );
};

export default FinancialHealth;