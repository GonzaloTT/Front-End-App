import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          © {new Date().getFullYear()} GymFinder. Built with precision.
        </p>
      </div>
    </footer>
  )
}

export default Footer