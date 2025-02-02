import React, { useState, useEffect } from "react";
import "./Hero.css";

const images = [
  "src/assets/image1.jpg",
  "src/assets/image2.jpg",
];

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title animate-slideInLeft">Bienvenido a Coffee Bean</h1>
        <p className="hero-subtitle animate-slideInRight">El mejor café de la ciudad</p>
        <button className="cta-button animate-fadeIn">Explorar Menú</button>
      </div>
    </section>
  );
};

export default Hero;

