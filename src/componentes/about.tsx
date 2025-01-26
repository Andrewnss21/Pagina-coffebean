import React from "react";
import "./About.css";

const menuItems = [
  {
    category: "Desayunos",
    items: [
      {
        name: "Desayuno Americano",
        description: "Huevos revueltos, pan tostado, mantequilla y café.",
        price: "S/ 15.00",
        image: "/assets/desayuno-americano.jpg",
      },
      {
        name: "Pancakes con Frutas",
        description: "Pancakes servidos con miel y frutas frescas.",
        price: "S/ 18.00",
        image: "/assets/pancakes-frutas.jpg",
      },
    ],
  },
  {
    category: "Bebidas",
    items: [
      {
        name: "Café Americano",
        description: "Café preparado con granos seleccionados.",
        price: "S/ 8.00",
        image: "/assets/cafe-americano.jpg",
      },
      {
        name: "Limonada de Hierba Buena",
        description: "Limonada fresca con un toque de hierba buena.",
        price: "S/ 10.00",
        image: "/assets/limonada-hierba-buena.jpg",
      },
    ],
  },
];

const Menu: React.FC = () => {
  return (
    <section className="menu-section" id="menu">
      <h2 className="menu-title">Nuestro Menú</h2>
      {menuItems.map((category, index) => (
        <div key={index} className="menu-category">
          <h3 className="category-title">{category.category}</h3>
          <div className="category-items">
            {category.items.map((item, idx) => (
              <div key={idx} className="menu-item2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="menu-item-image"
                />
                <div className="menu-item-info">
                  <h4 className="item-name">{item.name}</h4>
                  <p className="item-description">{item.description}</p>
                  <span className="item-price">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Menu;
