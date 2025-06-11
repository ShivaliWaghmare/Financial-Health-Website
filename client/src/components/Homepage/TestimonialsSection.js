import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import '../../css/TestimonialsSection.css';

const TestimonialsSection = () => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.3 });
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.1 });

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Manager',
      avatar: '👩‍💼',
      feedback: 'This app completely transformed how I manage my finances. The prediction model helped me save $3,000 in just 6 months!',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Software Engineer',
      avatar: '👨‍💻',
      feedback: 'The expense tracker is incredibly intuitive, and the calculators are spot-on. Finally, a financial app that actually works!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Small Business Owner',
      avatar: '👩‍🚀',
      feedback: 'As an entrepreneur, tracking finances is crucial. This platform made it effortless and helped me plan for business growth.',
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array(rating).fill(0).map((_, index) => (
      <span key={index} className="star">⭐</span>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div 
          ref={headerRef}
          className={`testimonials-header animate-fade-in-up ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="testimonials-title">What Our Users Say</h2>
          <p className="testimonials-subtitle">
            Join thousands of satisfied users who have transformed their financial lives
          </p>
        </div>
        
        <div 
          ref={gridRef}
          className="testimonials-grid"
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`testimonial-card animate-fade-in-up ${gridVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="testimonial-header">
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              
              <div className="testimonial-decoration"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;