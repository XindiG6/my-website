// src/pages/Home.tsx
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="welcome-section">
        {/* Fixed navigation bar at the top inside welcome section */}
        <nav className="navbar-top">
          <a href="/">HOME</a>
          <a href="/projects">PROJECTS</a>
          <a href="/gallery">GALLERY</a>
          <a href="https://www.linkedin.com/in/xindig" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="mailto:gxdrussell@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
        </nav>

        <div className="welcome-text">
          <h1>Welcome to My Inner World.</h1>
          <p>Discover my research, photography, projects, and more.</p>
        </div>
      </div>

      <div className="image-section">
        {/* Right side image */}
        <img src="./images/me1.jpg" alt="Right Side" className="side-image" />
      </div>

      {/* Scroll down indicator */}
      <div className="scroll-down">
        <span>↓ Scroll down</span>
      </div>
    </div>
  );
};

export default Home;
