import React, { useState } from 'react';
import '../../css/financialhealthCheck/Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setEmailSubmitted(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setEmailSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="newsletter-section">
      <h3>Get More Money Tips</h3>
      <p>Subscribe to receive weekly financial tips and insights directly to your inbox.</p>
      <form onSubmit={handleEmailSubmit} className="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email-input"
          required
        />
        <button type="submit" className="submit-btn">
          Get Money Tips
        </button>
      </form>
      {emailSubmitted && (
        <div className="success-message">
          <span className="success-icon">✅</span>
          Thanks! You'll receive tips soon.
        </div>
      )}
    </div>
  );
};

export default Newsletter;