import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // cerrar menú mobile al navegar
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // detectar scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
      <div className="nav__inner">
        <NavLink to="/" className="nav__brand" aria-label="Ir al inicio">
          FAST
        </NavLink>

        <nav className="nav__links" aria-label="Navegación principal">
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

        <button
          className="nav__burger"
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`nav__mobile ${open ? "nav__mobile--open" : ""}`}>
        <NavLink to="/" className="nav__mobileLink">
          Inicio
        </NavLink>
        <NavLink to="/tipologias" className="nav__mobileLink">
          Productos
        </NavLink>
        <NavLink to="/faq" className="nav__mobileLink">
          Preguntas Frecuentes
        </NavLink>
        <NavLink to="/contacto" className="nav__mobileLink">
          Contacto
        </NavLink>
      </div>
    </header>
  );
}
