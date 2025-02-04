import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      {/* Mapa de Google */}
      <div className="map-container">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.866154865202!2d-73.98695122434213!3d40.75889533442364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c42c21ab%3A0x5cf0c0d6d8f7d1c6!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1706757600000"
          width="100%"
          height="350"
          loading="lazy"
        ></iframe>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-content">
          {/* Sección de Contacto */}
          <div className="contact-info">
            <h2>Coffe-Bean</h2>
            <p> Telefono: (123) 456-789</p>
            <p> info@coffebean.com</p>
            <p> 123 Main St, Anytown, USA</p>
            <div className="social-icons">
              <a href="https://instagram.com"><FaInstagram /></a>
              <a href="https://whatsapp.com" ><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        {/* Derechos Reservados */}
        <div className="footer-bottom">
          <p>© 2024 Coffe bean. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
