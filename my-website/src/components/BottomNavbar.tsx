// src/components/BottomNavbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './BottomNavbar.css';

const BottomNavbar: React.FC = () => {
  return (
    <div className="bottom-navbar">
      <Link to="/" className="nav-button">HOME</Link>
      <Link to="/projects" className="nav-button">PROJECTS</Link>
      <Link to="/gallery" className="nav-button">GALLERY</Link>
    </div>
  );
};

export default BottomNavbar;



