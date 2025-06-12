import React, { useState, useEffect } from 'react';
// import Confetti from 'react-confetti';
import '../../css/financialhealthCheck/ResultsDisplay.css';

const ResultsDisplay = ({ results, onRestart }) => {
  const { formData, score } = results;
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (score.finalScore >= 80) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  }, [score.finalScore]);

  const COLORS = {
    green: '#2ecc71',
    yellow: '#f1c40f',
    red: '#c0392b',
    dark: '#121212'
  };

  const getScoreColor = () => {
    if (score.finalScore >= 80) return COLORS.green;
    if (score.finalScore >= 60) return COLORS.yellow;
    return COLORS.red;
  };

  const getScoreText = () => {
    if (score.finalScore >= 80) return 'Excellent';
    if (score.finalScore >= 60) return 'Improving';
    return 'Needs Focus';
  };

  const getRecommendations = (breakdown) => {
    const recommendations = [];

    if (breakdown.savings < 20) {
      recommendations.push({
        category: 'Savings',
        priority: 'High',
        title: 'Increase Your Savings Rate',
        description: 'Aim to save at least 20% of your income. Start with automatic transfers to a high-yield savings account.',
        action: 'Set up automatic savings transfer'
      });
    }

    if (breakdown.debt < 20) {
      recommendations.push({
        category: 'Debt',
        priority: 'High',
        title: 'Reduce Debt-to-Income Ratio',
        description: 'Your debt payments are consuming too much of your income. Consider debt consolidation or the debt avalanche method.',
        action: 'Create a debt payoff plan'
      });
    }

    if (breakdown.habits < 15) {
      recommendations.push({
        category: 'Habits',
        priority: 'Medium',
        title: 'Improve Financial Tracking',
        description: 'Start tracking expenses and create a monthly budget to better control your finances.',
        action: 'Start tracking your expenses'
      });
    }

    if (breakdown.emergency < 12) {
      recommendations.push({
        category: 'Emergency Fund',
        priority: 'High',
        title: 'Build Emergency Fund',
        description: 'Aim for 6 months of expenses in an emergency fund for financial security.',
        action: 'Start emergency fund challenge'
      });
    }

    if (breakdown.investments < 5) {
      recommendations.push({
        category: 'Investments',
        priority: 'Medium',
        title: 'Start Investing',
        description: 'Begin with low-cost index funds or ETFs to build wealth over time.',
        action: 'Learn about investment basics'
      });
    }

    return recommendations.sort((a, b) => {
      const priorityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
  };

  const recommendations = getRecommendations(score.breakdown);

  const formatPercentage = (numerator, denominator) => {
    const value = (parseFloat(numerator) / parseFloat(denominator)) * 100;
    return isNaN(value) ? '0.0' : value.toFixed(1);
  };

  return (
    <div className="results-container" style={{ backgroundColor: COLORS.dark, color: '#fff' }}>
      {/* {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />} */}
      
      <h1>Your Financial Health Score</h1>

      <div className="score-circle">
        <div className="progress-ring">
          <svg width="200" height="200">
            <circle
              cx="100"
              cy="100"
              r="80"
              stroke="#333"
              strokeWidth="10"
              fill="transparent"
            />
            <circle
              cx="100"
              cy="100"
              r="80"
              stroke={getScoreColor()}
              strokeWidth="10"
              fill="transparent"
              strokeDasharray={`${2 * Math.PI * 80}`}
              strokeDashoffset={`${2 * Math.PI * 80 * (1 - score.finalScore / 100)}`}
              className="progress-circle"
              style={{ transition: 'stroke-dashoffset 1s ease' }}
            />
          </svg>
          <div className="score-text">
            <span className="score-number">{score.finalScore}</span>
            <span className="score-label">/ 100</span>
          </div>
        </div>
      </div>

      <div className="score-status" style={{ color: getScoreColor() }}>
        <h2>{getScoreText()}</h2>
        <p>
          {score.finalScore >= 80 ? "Outstanding! You're financially healthy and on track for long-term success." :
           score.finalScore >= 60 ? "Good progress! Focus on the recommendations below to improve further." :
           "There's significant room for improvement. Start with our personalized action plan."}
        </p>
      </div>

      <div className="score-breakdown">
        <h3>Detailed Score Breakdown</h3>
        <div className="breakdown-grid">
          {[
            {
              label: `Savings Rate (${formatPercentage(formData.monthlySavings, formData.monthlyIncome)}%)`,
              value: score.breakdown.savings,
              max: 30
            },
            {
              label: `Debt Ratio (${formatPercentage(formData.monthlyDebt, formData.monthlyIncome)}%)`,
              value: score.breakdown.debt,
              max: 25
            },
            {
              label: 'Financial Habits',
              value: score.breakdown.habits,
              max: 20
            },
            {
              label: 'Emergency Fund',
              value: score.breakdown.emergency,
              max: 15
            },
            {
              label: 'Investments',
              value: score.breakdown.investments,
              max: 10
            }
          ].map((item, index) => {
            const percentage = (item.value / item.max) * 100;
            const color =
              item.value >= item.max * 0.66
                ? COLORS.green
                : item.value >= item.max * 0.33
                ? COLORS.yellow
                : COLORS.red;

            return (
              <div key={index} className="breakdown-item">
                <span>{item.label}</span>
                <div className="breakdown-bar">
                  <div
                    className="breakdown-fill"
                    style={{ width: `${percentage}%`, backgroundColor: color }}
                  />
                </div>
                <span>{item.value}/{item.max}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="recommendations-section">
        <h3>Personalized Recommendations</h3>
        <div className="recommendations-grid">
          {recommendations.map((rec, index) => (
            <div key={index} className={`recommendation-card priority-${rec.priority.toLowerCase()}`}>
              <div className="rec-header">
                <h4>{rec.title}</h4>
                <span className={`priority-badge priority-${rec.priority.toLowerCase()}`}>
                  {rec.priority} Priority
                </span>
              </div>
              <p>{rec.description}</p>
              <button className="action-btn">{rec.action}</button>
            </div>
          ))}
        </div>
      </div>

      <div className="action-buttons">
        <button className="restart-btn" onClick={onRestart}>
          🔄 Take Assessment Again
        </button>
      </div>
    </div>
  );
};

export default ResultsDisplay;
