import React, { useEffect, useState } from "react";
import "./Nosotros.css";
import cafeImage from "../assets/bebidas.jpg"; // Imagen de la cafetería

const Nosotros: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.querySelector(".nosotros-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className="nosotros-section" id="nosotros">
      <div className="nosotros-container">
        <div className={`nosotros-text ${isVisible ? "visible" : ""}`}>
          <h2 className="nosotros-title">Sobre Nosotros</h2>
          <p className="nosotros-description">
            En <strong>Coffe-Bean</strong>, creemos en la magia de los buenos momentos
            acompañados de una deliciosa taza de café. Nuestra historia comenzó con la pasión
            por ofrecer experiencias únicas a través del sabor y la calidad en cada uno de nuestros
            productos. 
          </p>
        </div>
        <div className={`nosotros-image ${isVisible ? "visible" : ""}`}>
          <img src={cafeImage} alt="Nuestra cafetería" />
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
