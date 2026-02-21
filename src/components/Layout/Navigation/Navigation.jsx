import { NavLink } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          isActive 
            ? "navigation__link navigation__link--active"
            : "navigation__link"
        }
      >
        Inicio
      </NavLink>

      <NavLink 
        to="/gyms" 
        className={({ isActive }) => 
          isActive 
            ? "navigation__link navigation__link--active"
            : "navigation__link"
        }
      >
        Gimnasios
      </NavLink>
    </nav>
  )
}

export default Navigation