import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../css/AboutUs.css';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const AboutUs = () => {
  const [missionRef, missionVisible] = useScrollAnimation({ threshold: 0.3 });
  const [visionRef, visionVisible] = useScrollAnimation({ threshold: 0.3 });
  const [teamRef, teamVisible] = useScrollAnimation({ threshold: 0.2 });
  const [valuesRef, valuesVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <div>
      <Header />
    <div className="about-us">
      {/* Hero Section */}
      <section className="about-hero scroll-animate visible">
        <h1>About WealthWise</h1>
        <p>
          WealthWise is passionate about democratizing financial intelligence and empowering individuals
          to take control of their financial future through innovative technology.
        </p>
      </section>

      {/* Mission Section */}
      <section className="about-section" ref={missionRef}>
        <div className={`about-content animate-fade-in-left ${missionVisible ? 'visible' : ''}`}>
          <h2>Our Mission</h2>
          <p>
            To provide user-friendly financial tools that were once exclusive to the wealthy, enabling
            anyone to track, predict, and grow their wealth with confidence. We're not just building software —
            we’re building a financial empowerment movement.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="about-section alt" ref={visionRef}>
        <div className={`about-content animate-fade-in-right ${visionVisible ? 'visible' : ''}`}>
          <h2>Our Vision</h2>
          <p>
            We envision a world where financial health is a right, not a privilege — where every person,
            regardless of background, has the tools to understand and control their money effortlessly.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-section" ref={valuesRef}>
        <div className={`about-content animate-scale-in ${valuesVisible ? 'visible' : ''}`}>
          <h2>Our Core Values</h2>
          <ul className="values-list">
            <li>🌱 Simplicity & Transparency</li>
            <li>🚀 Innovation Driven</li>
            <li>🧠 Education First</li>
            <li>💡 Empowerment through Technology</li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
    </div>
   
  );
};

export default AboutUs;
