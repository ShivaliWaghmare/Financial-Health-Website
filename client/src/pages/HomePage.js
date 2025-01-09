// eslint-disable-next-line
import React from 'react';
import Layout from '../components/Layout/Layout';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
import "../css/homepage.css";

const HomePage = () => {
  // Slider Setting
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show three slides at a time by default
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4, // Show four slides at a breakpoint of 1200px or less
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show two slides at a breakpoint of 768px or less
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show one slide at a breakpoint of 480px or less (mobile)
        },
      },
    ],
  };

  return (
    <Layout>
         <div className="home-container">
        {/* Welcome Section */}
        <div className="section-container">
          <h1>Welcome to WealthWise</h1>
          <p className="section-description">
            Financial Health Management is your premier platform for achieving financial excellence.
            Our platform provides essential tools and resources to empower you in making informed financial decisions.
          </p>
        </div>

        {/* Importance of Financial Health Section */}
        <div className="section-container">
          <h2>Why Financial Health is Important</h2>
          <p className="section-description">
            Achieving and maintaining financial health is crucial for stability, security, and future success.
            It enables individuals to plan for their goals, navigate economic challenges, and build wealth.
          </p>
        </div>

        {/* How Our Website Helps Section */}
        <div className="section-container">
          <h2>How Our Website Can Help You</h2>
          <p className="section-description">
            Our website offers comprehensive tools for expense tracking, investment analysis,
            financial education through our blog, and powerful calculators to aid in financial planning.
          </p>
        </div>
        <div className="w-4/5 mx-auto mt-10">
      <Slider {...settings}>
        {data.map((d, index) => (
          <div key={index} className="slider-item">
            <div className="slide-content">
              <p className="feature-title">{d.feature}</p>
              <p className="feature-review">{d.Review}</p>
              <p className="feature-importance">{d.Importance}</p>
              <button to={d.Path} className="btn btn-primary">{d.Path}</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
      
    </div>
    </Layout>
  )
}
 const data = [
     {
        feature: 'Expense Tracking',
        Review: 'Expense tracking allows users to monitor their spending habits and categorize expenses for better financial management.',
        Importance: 'Essential for budgeting and identifying areas where expenses can be optimized, leading to improved financial discipline and savings.',
        Path: '/expense',
     },
     {
      feature: 'DashBoard',
      Review: 'alsfigigfiublnohoihediuhfbvbidbviubibk ckbigifbuiewbgowhgowoigjowhogbwibiurbgbrigbrgueuguhrug gurbgopubgbrbgrb',
      Importance: 'vcuvbebfshdp huufwiugfkbckjb diqgiufgiuk wrgibfiobifidiuof efgiewgfieigfibifgyevfiv figifguigfiifbidsbfs effuy eyfg ',
      Path: '/portfolio',
     },
     {
      feature: 'Financial Blog',
      Review: 'The financial blog offers articles on industry trends, financial planning tips, and expert insights to keep users informed and educated.',
      Importance: 'Provides valuable knowledge and updates, empowering users to make informed financial decisions and stay current with market developments.',
      Path: '/blog',
    },
      {
          feature: 'Home Loan Calculator',
        Review: 'The home loan calculator provides users with a quick and accurate way to estimate their monthly mortgage payments based on loan amount, interest rate, and loan term.',
        Importance: 'It helps users understand the financial commitment of a home loan, enabling better budgeting and decision-making when purchasing a property.',
        Path: '/calculator'}
  ]
export default HomePage;
