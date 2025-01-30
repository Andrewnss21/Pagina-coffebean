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
          src="https://www.google.com/maps/place/Starbucks+Reserve+Roastery+New+York/@40.7415944,-74.0077298,16z/data=!3m1!5s0x89c259bf6d0ad055:0x716af9ffde9b561b!4m6!3m5!1s0x89c259bf6dd90021:0x645ce21be1b31735!8m2!3d40.7415944!4d-74.0051549!16s%2Fg%2F11j7w8j09h?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D"
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
              <a href="https://instagram.com" className="instagram-link"><FaInstagram /></a>
              <a href="https://whatsapp.com" className="whatsapp-link"><FaWhatsapp /></a>
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
