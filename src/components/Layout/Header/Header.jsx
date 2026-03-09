import Navigation from '../Navigation/Navigation'
import './Header.css'
import logo from "../../../../images/logo.png"

function Header() {
  return (
    <header className="header">
      <div className="header__overlay"></div>
      <div className="header__container">
         <div className="header__brand">
          <img src={logo} alt="Logo GymFinder" className="header__logo"  />
          <span className="header__title">
            Gym<span className="header__highlight">Finder</span>
          </span>
        </div>
        <div className='header__nav'>
        <Navigation />
        </div>
      </div>
    </header>
  )
}

export default Header