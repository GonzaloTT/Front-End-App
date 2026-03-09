import './Footer.css'
import { FaPhone, FaEnvelope } from "react-icons/fa"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          © {new Date().getFullYear()} GymFinder. Todos los derechos Reservados.
        </p>
        <div className="footer__icons">
          <a 
            href=""
            className="footer__icon"
            aria-label="Teléfono"
          >
            <FaPhone />
          </a>

          <a 
            href=""
            className="footer__icon"
            aria-label="Correo electrónico"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer