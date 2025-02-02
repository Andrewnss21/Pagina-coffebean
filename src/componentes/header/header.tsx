import React, { useRef, useState } from "react";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa"; // Íconos para el menú

const NavBar: React.FC = () => {
  const efectoRef = useRef<HTMLDivElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false); // Estado del menú móvil

  const handleMouseEnter = (event: React.MouseEvent<HTMLLIElement>) => {
    if (window.innerWidth > 768) { // Solo activa el efecto en pantallas grandes
      const target = event.currentTarget;
      const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = target;

      if (efectoRef.current) {
        efectoRef.current.style.setProperty("--left", `${offsetLeft}px`);
        efectoRef.current.style.setProperty("--top", `${offsetTop + offsetHeight}px`);
        efectoRef.current.style.setProperty("--width", `${offsetWidth}px`);
        efectoRef.current.style.opacity = "1";
        efectoRef.current.style.visibility = "visible";
      }
    }
  };

  const handleMouseLeave = () => {
    if (efectoRef.current) {
      efectoRef.current.style.opacity = "0";
      efectoRef.current.style.visibility = "hidden";
    }
  };

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // Cierra el menú al hacer clic en una opción
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <a href="/">
          COFFE-BEAN
        </a>
      </div>

      {/* Botón Menú Hamburguesa */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Enlaces de navegación */}
      <ul className={`menu ${menuOpen ? "open" : ""}`}>
        <div id="menu-efecto" className="menu-efecto" ref={efectoRef}></div>
        <li className="menu-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => handleScrollToSection("section1")}>
          <a>Inicio</a>
        </li>
        <li className="menu-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => handleScrollToSection("section3")}>
          <a>Menú</a>
        </li>
        <li className="menu-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => handleScrollToSection("section4")}>
          <a>Nosotros</a>
        </li>
        <li className="menu-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => handleScrollToSection("section5")}>
          <a>Contacto</a>
        </li>
      </ul>

      {/* Botón */}
      <div className="button-container">
        <button className="join-button">Pedir</button>
      </div>
    </nav>
  );
};

export default NavBar;

