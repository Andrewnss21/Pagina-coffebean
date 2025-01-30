import React, { useState, useEffect } from "react";
import "./galeria.css";
import desayuno from "../assets/desayuno.png";
import bebidas from "../assets/bebidas2.jpg";
import postres from "../assets/postres2.jpg";
import bebidas2 from "../assets/bebidas.jpg";
import postres2 from "../assets/postres.jpg";

const images = [
  desayuno,bebidas,postres,bebidas2,postres2
];

const Galeria: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("galeria");
      if (section) {
        const { top } = section.getBoundingClientRect();
        if (top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="galeria" className={`galeria-section ${isVisible ? "visible" : ""}`}>
      <h2 className="galeria-title">Fotos</h2>
      <div className="galeria-grid">
        {images.map((src, index) => (
          <div key={index} className="galeria-item">
            <img src={src} alt={`Imagen ${index + 1}`} className="galeria-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Galeria;
