import React from 'react';
import './About.css';  // Importamos el archivo CSS

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="overlay"></div> {/* Overlay oscuro */}
      <div className="container">
        <p className="about-description">
        The Coffee Bean®

Rewards
        </p>
      </div>
    </section>
  );
};

export default About;