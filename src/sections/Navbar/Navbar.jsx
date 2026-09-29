import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [tipologiasOpen, setTipologiasOpen] = useState(false);

  const location = useLocation();

  const isHome = location.pathname === "/";
  const solid = !isHome || scrolled;

  useEffect(() => {
    setOpen(false);
    setTipologiasOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`nav ${solid ? "nav--scrolled" : ""} ${
          open ? "nav--open" : ""
        }`}
      >
        <div className="nav__inner">

          {/* LOGO */}
          <NavLink
            to="/"
            className="nav__brand"
            aria-label="Ir al inicio"
          >
            <img
              src="/images/logo.png"
              alt="FAST"
              className="nav__logo"
              draggable="false"
            />
          </NavLink>

          <nav
            className="nav__links"
            aria-label="Navegación principal"
          >

            <div
              className="nav__dropdown"
              onMouseEnter={() => setTipologiasOpen(true)}
              onMouseLeave={() => setTipologiasOpen(false)}
            >

              <button
                type="button"
                className="nav__link nav__dropdownTrigger"
                onClick={() =>
                  setTipologiasOpen((value) => !value)
                }
                aria-expanded={tipologiasOpen}
              >
                Tipologías
                <span
                  className={`nav__chevron ${
                    tipologiasOpen ? "is-open" : ""
                  }`}
                >
                  ▾
                </span>
              </button>


              <div
                className={`nav__dropdownMenu ${
                  tipologiasOpen
                    ? "nav__dropdownMenu--open"
                    : ""
                }`}
              >

                <NavLink
                  to="/tipologias"
                  className="nav__dropdownItem"
                >
                  <span className="nav__dropdownItemTitle">
                    Modelos
                  </span>

                  <span className="nav__dropdownItemDescription">
                    Conocé nuestras tipologías
                  </span>
                </NavLink>


                <NavLink
                  to="/tipologias/lineas"
                  className="nav__dropdownItem"
                >
                  <span className="nav__dropdownItemTitle">
                    Líneas
                  </span>

                  <span className="nav__dropdownItemDescription">
                    Elegí materiales y estilos
                  </span>
                </NavLink>

              </div>

            </div>

            <NavLink
              to="/faq"
              className="nav__link"
            >
              Preguntas Frecuentes
            </NavLink>

            <NavLink
              to="/contacto"
              className="nav__link"
            >
              Contacto
            </NavLink>

          </nav>

          <button
            className="nav__burger"
            type="button"
            aria-label={
              open ? "Cerrar menú" : "Abrir menú"
            }
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>

        </div>

        <div
          className={`nav__mobile ${
            open ? "nav__mobile--open" : ""
          }`}
        >

          <NavLink
            to="/"
            className="nav__mobileLink"
          >
            Inicio
          </NavLink>

          <div className="nav__mobileDropdown">

            <button
              type="button"
              className="nav__mobileLink nav__mobileDropdownTrigger"
              onClick={() =>
                setTipologiasOpen((value) => !value)
              }
              aria-expanded={tipologiasOpen}
            >
              <span>Tipologías</span>

              <span
                className={`nav__mobileChevron ${
                  tipologiasOpen ? "is-open" : ""
                }`}
              >
                ▾
              </span>
            </button>


            <div
              className={`nav__mobileSubmenu ${
                tipologiasOpen
                  ? "nav__mobileSubmenu--open"
                  : ""
              }`}
            >
              <NavLink
                to="/tipologias"
                className="nav__mobileSubLink"
              >
                Modelos
              </NavLink>
              <NavLink
                to="/tipologias/lineas"
                className="nav__mobileSubLink"
              >
                Líneas
              </NavLink>
            </div>
          </div>

          <NavLink
            to="/faq"
            className="nav__mobileLink"
          >
            Preguntas Frecuentes
          </NavLink>
          <NavLink
            to="/contacto"
            className="nav__mobileLink"
          >
            Contacto
          </NavLink>
        </div>

      </header>

      {open && (
        <div
          className="nav__overlay"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}