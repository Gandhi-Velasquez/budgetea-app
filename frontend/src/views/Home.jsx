import React from 'react';
import '../styles/Home.css';
import heroImage from '../assets/home-hero.png';

const Home = () => {
  return (
    <div className="landing-container">
      <div className="home-text-container">
        <h1>The app that helps you with finances.</h1>
        <p>Start managing your finances with ease and take control of your financial future.</p>
      </div>
      <div className="home-card-container">
        <div className="home-card">
          <h2>Financial Analysis</h2>
          <img src={heroImage} alt="Financial Analysis Hero" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Home;

