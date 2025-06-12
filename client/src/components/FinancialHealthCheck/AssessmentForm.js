import React, { useState } from 'react';
import '../../css/financialhealthCheck/AssessmentForm.css'

const AssessmentForm = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    monthlyIncome: '',
    monthlySavings: '',
    monthlyDebt: '',
    tracksExpenses: null,
    usesBudget: null,
    emergencyFund: '',
    investments: []
  });

  const steps = [
    'Income & Savings',
    'Debt Analysis', 
    'Expense Habits',
    'Emergency Fund',
    'Investments'
  ];

  const investmentOptions = [
    { id: 'stocks', label: '💹 Stocks', points: 5 },
    { id: 'mutualFunds', label: '🪙 Mutual Funds', points: 5 },
    { id: 'realEstate', label: '🏠 Real Estate', points: 4 },
    { id: 'bonds', label: '📈 Bonds', points: 3 },
    { id: 'crypto', label: '₿ Cryptocurrency', points: 2 },
    { id: 'none', label: '❌ Not Yet', points: 0 }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const score = calculateScore();
      onComplete({ formData, score });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleInvestmentChange = (investmentId) => {
    if (investmentId === 'none') {
      setFormData(prev => ({
        ...prev,
        investments: ['none']
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        investments: prev.investments.includes('none') 
          ? [investmentId]
          : prev.investments.includes(investmentId)
            ? prev.investments.filter(id => id !== investmentId)
            : [...prev.investments.filter(id => id !== 'none'), investmentId]
      }));
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    let breakdown = {};

    // Income vs Savings (30 points max)
    if (formData.monthlyIncome && formData.monthlySavings) {
      const savingsRate = (parseFloat(formData.monthlySavings) / parseFloat(formData.monthlyIncome)) * 100;
      if (savingsRate >= 25) breakdown.savings = 30;
      else if (savingsRate >= 20) breakdown.savings = 25;
      else if (savingsRate >= 15) breakdown.savings = 20;
      else if (savingsRate >= 10) breakdown.savings = 15;
      else if (savingsRate > 0) breakdown.savings = 10;
      else breakdown.savings = 0;
      totalScore += breakdown.savings;
    }

    // Debt-to-Income Ratio (25 points max)
    if (formData.monthlyIncome && formData.monthlyDebt) {
      const dtiRatio = (parseFloat(formData.monthlyDebt) / parseFloat(formData.monthlyIncome)) * 100;
      if (dtiRatio < 20) breakdown.debt = 25;
      else if (dtiRatio < 30) breakdown.debt = 20;
      else if (dtiRatio <= 40) breakdown.debt = 15;
      else if (dtiRatio <= 50) breakdown.debt = 10;
      else breakdown.debt = 5;
      totalScore += breakdown.debt;
    }

    // Expense Tracking Habits (20 points max)
    breakdown.habits = 0;
    if (formData.tracksExpenses) breakdown.habits += 10;
    if (formData.usesBudget) breakdown.habits += 10;
    totalScore += breakdown.habits;

    // Emergency Fund (15 points max)
    switch (formData.emergencyFund) {
      case '6+': breakdown.emergency = 15; break;
      case '3-6': breakdown.emergency = 12; break;
      case '1-3': breakdown.emergency = 8; break;
      case '<1': breakdown.emergency = 3; break;
      default: breakdown.emergency = 0; break;
    }
    totalScore += breakdown.emergency;

    // Investments (10 points max)
    breakdown.investments = 0;
    formData.investments.forEach(investment => {
      const option = investmentOptions.find(opt => opt.id === investment);
      if (option && option.id !== 'none') breakdown.investments += option.points;
    });
    breakdown.investments = Math.min(breakdown.investments, 10);
    totalScore += breakdown.investments;

    return { finalScore: Math.min(totalScore, 100), breakdown };
  };

  const getSavingsRateStatus = () => {
    if (!formData.monthlyIncome || !formData.monthlySavings) return null;
    const rate = (parseFloat(formData.monthlySavings) / parseFloat(formData.monthlyIncome)) * 100;
    if (rate >= 20) return { color: '#2ecc71', text: 'Great!', emoji: '🎉' };
    if (rate >= 10) return { color: '#f39c12', text: 'Moderate', emoji: '⚠️' };
    return { color: '#e74c3c', text: 'Needs improvement', emoji: '📈' };
  };

  const getDTIStatus = () => {
    if (!formData.monthlyIncome || !formData.monthlyDebt) return null;
    const dti = (parseFloat(formData.monthlyDebt) / parseFloat(formData.monthlyIncome)) * 100;
    if (dti < 30) return { text: 'Healthy', emoji: '✅', color: '#2ecc71' };
    if (dti <= 50) return { text: 'Warning', emoji: '⚠️', color: '#f39c12' };
    return { text: 'High risk', emoji: '❌', color: '#e74c3c' };
  };

  return (
    <div className="assessment-section">
      <div className="progress-header">
        <h2>Financial Health Assessment</h2>
        <div className="step-indicator">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`step ${index <= currentStep ? 'active' : ''}`}
            >
              <span className="step-number">{index + 1}</span>
              <span className="step-label">{step}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="form-container">
        {currentStep === 0 && (
          <div className="form-step">
            <h3>Income & Savings Analysis</h3>
            <div className="input-group">
              <label>Monthly Income ($)</label>
              <input
                type="number"
                placeholder="Enter your monthly income"
                value={formData.monthlyIncome}
                onChange={(e) => handleInputChange('monthlyIncome', e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>Monthly Savings ($)</label>
              <input
                type="number"
                placeholder="Enter your monthly savings"
                value={formData.monthlySavings}
                onChange={(e) => handleInputChange('monthlySavings', e.target.value)}
              />
            </div>
            {getSavingsRateStatus() && (
              <div className="status-indicator" style={{ color: getSavingsRateStatus().color }}>
                {getSavingsRateStatus().emoji} {getSavingsRateStatus().text}
                <div className="savings-rate">
                  Savings Rate: {((parseFloat(formData.monthlySavings) / parseFloat(formData.monthlyIncome)) * 100).toFixed(1)}%
                </div>
              </div>
            )}
          </div>
        )}

        {currentStep === 1 && (
          <div className="form-step">
            <h3>Debt-to-Income Analysis</h3>
            <div className="input-group">
              <label>Monthly EMIs/Loan Payments ($)</label>
              <input
                type="number"
                placeholder="Enter total monthly debt payments"
                value={formData.monthlyDebt}
                onChange={(e) => handleInputChange('monthlyDebt', e.target.value)}
              />
            </div>
            {getDTIStatus() && (
              <div className="status-indicator" style={{ color: getDTIStatus().color }}>
                {getDTIStatus().emoji} {getDTIStatus().text}
                <div className="dti-rate">
                  Debt-to-Income: {((parseFloat(formData.monthlyDebt) / parseFloat(formData.monthlyIncome)) * 100).toFixed(1)}%
                </div>
              </div>
            )}
          </div>
        )}

        {currentStep === 2 && (
          <div className="form-step">
            <h3>Expense Tracking Habits</h3>
            <div className="radio-group">
              <label>Do you track your expenses?</label>
              <div className="radio-options">
                <label>
                  <input
                    type="radio"
                    name="tracksExpenses"
                    checked={formData.tracksExpenses === true}
                    onChange={() => handleInputChange('tracksExpenses', true)}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="tracksExpenses"
                    checked={formData.tracksExpenses === false}
                    onChange={() => handleInputChange('tracksExpenses', false)}
                  />
                  No
                </label>
              </div>
            </div>
            <div className="radio-group">
              <label>Do you use a budget?</label>
              <div className="radio-options">
                <label>
                  <input
                    type="radio"
                    name="usesBudget"
                    checked={formData.usesBudget === true}
                    onChange={() => handleInputChange('usesBudget', true)}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="usesBudget"
                    checked={formData.usesBudget === false}
                    onChange={() => handleInputChange('usesBudget', false)}
                  />
                  No
                </label>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="form-step">
            <h3>Emergency Fund Status</h3>
            <div className="input-group">
              <label>How many months of expenses can you cover with savings?</label>
              <select
                value={formData.emergencyFund}
                onChange={(e) => handleInputChange('emergencyFund', e.target.value)}
              >
                <option value="">Select coverage period</option>
                <option value="<1">Less than 1 month</option>
                <option value="1-3">1-3 months</option>
                <option value="3-6">3-6 months</option>
                <option value="6+">6+ months</option>
              </select>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="form-step">
            <h3>Investment Awareness</h3>
            <div className="checkbox-group">
              <label>Do you invest in:</label>
              {investmentOptions.map(option => (
                <label key={option.id} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.investments.includes(option.id)}
                    onChange={() => handleInvestmentChange(option.id)}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        )}

        <div className="form-navigation">
          {currentStep > 0 && (
            <button className="nav-btn secondary" onClick={handlePrevious}>
              Previous
            </button>
          )}
          <button 
            className="nav-btn primary" 
            onClick={handleNext}
            disabled={
              (currentStep === 0 && (!formData.monthlyIncome || !formData.monthlySavings)) ||
              (currentStep === 1 && !formData.monthlyDebt) ||
              (currentStep === 2 && (formData.tracksExpenses === null || formData.usesBudget === null)) ||
              (currentStep === 3 && !formData.emergencyFund) ||
              (currentStep === 4 && formData.investments.length === 0)
            }
          >
            {currentStep === steps.length - 1 ? 'Get My Score' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentForm;