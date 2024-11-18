// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import News from './pages/News';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <div className="scroll-container">
                <div className="section">
                  <Home />
                </div>
                <div className="section">
                  <About />
                </div>
                <div className="section">
                  <News />
                </div>
              </div>
            }
          />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;





