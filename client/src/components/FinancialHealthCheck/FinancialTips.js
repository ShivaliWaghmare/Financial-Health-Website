import React, { useState, useEffect } from 'react';
import '../../css/financialhealthCheck/FinancialTips.css';

const FinancialTips = () => {
  const [tipIndex, setTipIndex] = useState(0);

  const financialTips = [
    "Start saving 20% of your income for long-term financial health",
    "Pay off high-interest loans first to reduce debt burden",
    "Build an emergency fund covering 6 months of expenses",
    "Diversify investments across stocks, bonds, and real estate",
    "Track every expense to identify spending patterns",
    "Automate savings to make it effortless and consistent",
    "Review and optimize your budget monthly",
    "Consider tax-advantaged retirement accounts",
    "Negotiate better rates on insurance and utilities",
    "Invest in your financial education continuously"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % financialTips.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [financialTips.length]);

  return (
    <div className="tips-section">
      <h3>Financial Tips</h3>
      <div className="tips-carousel">
        <div className="tip-card">
          <p>{financialTips[tipIndex]}</p>
        </div>
      </div>
      <div className="tip-indicators">
        {financialTips.map((_, index) => (
          <button
            key={index}
            className={`tip-indicator ${index === tipIndex ? 'active' : ''}`}
            onClick={() => setTipIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FinancialTips;