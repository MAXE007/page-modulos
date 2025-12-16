import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav__inner">
         <Link className="nav__brand" to="/">
          FAST
        </Link>

        <nav className="nav__links">
          <NavLink to="/" className="nav__link">
            Inicio
          </NavLink>
          
          <NavLink to="/tipologias" className="nav__link">
            Productos
          </NavLink>

           <NavLink to="/faq" className="nav__link">
            Preguntas Frecuentes
          </NavLink>
          
          <NavLink to="/contacto" className="nav__link">
            Contacto
          </NavLink>
        </nav>


      </div>
    </header>
  );
}