import React, { useRef } from "react";
import "./Header.css";

const NavBar: React.FC = () => {
  const efectoRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.currentTarget;
    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = target;

    if (efectoRef.current) {
      efectoRef.current.style.setProperty("--left", `${offsetLeft}px`);
      efectoRef.current.style.setProperty("--top", `${offsetTop + offsetHeight}px`);
      efectoRef.current.style.setProperty("--width", `${offsetWidth}px`);
      efectoRef.current.style.opacity = "1";
      efectoRef.current.style.visibility = "visible";
    }
  };

  const handleMouseLeave = () => {
    if (efectoRef.current) {
      efectoRef.current.style.opacity = "0";
      efectoRef.current.style.visibility = "hidden";
    }
  };

  const handleScrollToSection = (sectionId: string, scrollEnd: ScrollLogicalPosition = "start") => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({
      behavior: "smooth",
      block: scrollEnd,
    });
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <a href="/">
          <img src="src/imagenes/everest.png" alt="" />
        </a>
      </div>

      {/* Enlaces de navegación */}
      <ul className="menu">
        <div id="menu-efecto" className="menu-efecto" ref={efectoRef}></div>
        <li
          className="menu-item"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleScrollToSection("section1", "end")}
        >
          <a>Inicio</a>
        </li>
        <li
          className="menu-item"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleScrollToSection("section3")}
        >
          <a>Menu</a>
        </li>
        <li
          className="menu-item"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleScrollToSection("section5")}
        >
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
