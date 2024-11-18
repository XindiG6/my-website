import React from 'react';
import './About.css';
import BottomNavbar from '../components/BottomNavbar';

const About: React.FC = () => {
  return (
    <div>
      <div className="about-container">
        {/* Background Image Section */}
        <div className="about-background">
          <div className="about-overlay">
            <h1 className="about-title">About Me</h1>
            <p className="about-subtitle">A lucky men living in his moment.</p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="about-content">
          <div className="about-text">
            <p>Hello! I'm Xind Guo, a passionate AI reseacher and full-stack developer with experience in creating responsive and interactive web and mobile apps .</p>
            <p>
              I received my M.S. in Computer Science at University of Virginia, where I was fortunate to be advised by Prof. Geoffrey Fox. My previous research was focused on machine learning systems, particularly addressing performance bottlenecks in loading globally shuffled datasets within the training pipeline.
            </p>
            <p> 
              Before my Master, I spent 4 amazing years(even though 2 years in Covid) at Oregon State University, and received my B.S. in Computer Science. 
            </p>
            <p>Thank you for visiting my portfolio!</p>

            {/* Resume Download Button */}
            <a href="./public/XindiGuo_resume.pdf" download className="resume-button">
              <i className="fas fa-file-download"></i> Download My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;



