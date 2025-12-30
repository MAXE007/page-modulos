import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const solid = !isHome || scrolled; // en páginas internas siempre sólido

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

  // ✅ bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`nav ${solid ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
        <div className="nav__inner">
          <NavLink to="/" className="nav__brand" aria-label="Ir al inicio">
            <img
              src="/images/logo.png"
              alt="FAST"
              className="nav__logo"
              draggable="false"
            />
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
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
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

      {/* ✅ Overlay: asegura contraste en cualquier sección */}
      {open && <div className="nav__overlay" onClick={() => setOpen(false)} />}
    </>
  );
}
