import React, { useState, useEffect } from 'react';
import './Hero.css';  // Importamos el archivo CSS

const images = [
  'src/assets/image1.jpg',
  'src/assets/image2.jpg',  
  'src/assets/image3.jpg'   
];

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" style={{ backgroundImage: `url(${images[currentImage]})` }}>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Coffee Bean</h1>
        <p className="hero-subtitle">The best coffee in town</p>
      </div>
    </section>
  );
};

export default Hero;