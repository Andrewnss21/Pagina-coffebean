import React from "react";
import { motion, useInView } from "framer-motion"; // Importar Framer Motion
import { useRef } from "react"; // Para manejar referencias
import "./About.css";
import desayuno from "../assets/desayuno.png";
import bebidas from "../assets/bebidas2.jpg";
import postres from "../assets/postres2.jpg";

const menuItems = [
  {
    items: [
      {
        name: "Desayuno y Almuerzos",
        image: desayuno,
      },
    ],
  },
  {
    items: [
      {
        name: "Bebidas y Cafés",
        image: bebidas,
      },
    ],
  },
  {
    items: [
      {
        name: "Postres",
        image: postres,
      },
    ],
  },
];

const Menu: React.FC = () => {
  const sectionRef = useRef(null); // Referencia a la sección
  const isInView = useInView(sectionRef, { once: true }); // Detecta si está visible (una sola vez)

  return (
    <section
      ref={sectionRef} // Asocia la referencia a la sección
      className="menu-section"
      id="menu"
    >
      <h2 className="menu-title">Nuestro Menú</h2>
      <p className="menu-description">
        Cafés, bebidas calientes y frías, sánguches, ensaladas, pasteles, postres y mucho más.
      </p>
      <div className="menu-categories">
        {menuItems.map((category, index) => (
          <motion.div
            key={index}
            className="menu-category"
            initial={{ opacity: 0, y: 50 }} // Estado inicial (oculto)
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Activa animación si está en vista
            transition={{ duration: 2, delay: index * 0.3 }} // Configuración de la animación
          >
            <div className="category-items">
              {category.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="menu-card"
                  whileHover={{ scale: 1.05, rotate: 1 }} // Animación al pasar el mouse
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={item.image}
                    className="menu-card-image"
                    alt={item.name}
                  />
                  <div className="menu-card-text">{item.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Menu;






