import React from 'react';
import BottomNavbar from '../components/BottomNavbar'; // Ensure path is correct
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className="contact-image">
          <img src="./images/boston.jpeg" alt="Contact" />
        </div>
        <div className="contact-details">
          <h1>Contact Me</h1>
          <form className="contact-form">
            <label>
              Full Name
              <input type="text" name="fullName" required />
            </label>
            <label>
              E-mail
              <input type="email" name="email" required />
            </label>
            <label>
              Message
              <textarea name="message" rows={4} required />
            </label>
            <button type="submit">Contact Me</button>
          </form>
          <div className="additional-info">
            <p>Based in New York City, New York</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/xindig" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="mailto:gxdrussell@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom navbar */}
      <BottomNavbar />
    </div>
  );
};

export default Contact;

