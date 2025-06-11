// eslint-disable-next-line
import React from 'react';
// import "../css/homepage.css";
import HeroSection from '../components/Homepage/HeroSection'; 
import FeaturesSection from '../components/Homepage/FeaturesSection';
import HowItWorksSection from '../components/Homepage/HowItWorksSection';
import AboutPreviewSection from '../components/Homepage/AboutPreviewSection';
import TestimonialsSection from '../components/Homepage/TestimonialsSection';
import GetStartedBanner from '../components/Homepage/GetStartedBanner';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import '../hooks/ScrollAnimations.css';


const HomePage = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="homepage">
        <Header />
        <HeroSection scrollToFeatures={scrollToFeatures} />
         <FeaturesSection />
         <HowItWorksSection />
         <AboutPreviewSection />
         <TestimonialsSection />
         <GetStartedBanner />
         <Footer />
    </div>
  );
};

export default HomePage;
 