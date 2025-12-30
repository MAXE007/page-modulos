import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function digitsOnly(v) {
  return String(v || "").replace(/[^\d]/g, "");
}

export default function Footer() {
  const year = new Date().getFullYear();

  const waPhone = import.meta.env.VITE_CONTACT_WA_PHONE;
  const igUrl = import.meta.env.VITE_CONTACT_IG_URL;

  const waHref = useMemo(() => {
    const d = digitsOnly(waPhone);
    if (!d) return null;
    const msg = encodeURIComponent("Hola! Quiero hacer una consulta sobre FAST.");
    return `https://wa.me/${d}?text=${msg}`;
  }, [waPhone]);

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Marca */}
          <div className="footer__col">
            <div className="footer__brand">
              <img className="footer__logo" src="/images/logo.png" alt="FAST" />
            </div>
            <p className="footer__desc">
              Soluciones arquitectónicas en forma de módulos transportables. Diseño, calidad y entrega eficiente.
            </p>

            <div className="footer__social">
              {igUrl ? (
                <a className="footer__socialBtn" href={igUrl} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              ) : null}

              {waHref ? (
                <a className="footer__socialBtn footer__socialBtn--wa" href={waHref} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              ) : null}
            </div>
          </div>

          {/* Contacto */}
          <div className="footer__col">
            <h4 className="footer__title">Contacto</h4>

            <div className="footer__contact">
              <div className="footer__item">
                <span className="footer__icon">
                  {/* MAIL */}
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 5h18v14H3z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
                    <path d="M3 5l9 7 9-7" fill="none" stroke="currentColor" strokeWidth="1.6"/>
                  </svg>
                </span>
                <div>
                  <span className="footer__value">tuemail@dominio.com</span>
                </div>
              </div>

              <div className="footer__item">
                <span className="footer__icon">
                  {/* PHONE */}
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M4 4c0 9 7 16 16 16l2-2-5-5-3 3c-3-1-6-4-7-7l3-3-5-5-2 3z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                </span>
                <div>
                  <span className="footer__value">+54 9 2604 222639</span>
                </div>
              </div>

              <div className="footer__item">
                <span className="footer__icon">
                  {/* CLOCK */}
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6"/>
                    <path d="M12 7v6l4 2" fill="none" stroke="currentColor" strokeWidth="1.6"/>
                  </svg>
                </span>
                <div>
                  <span className="footer__value">Lun a Vie · 9:00 a 18:00</span>
                </div>
              </div>

              <div className="footer__item">
                <span className="footer__icon">
                  {/* MAP PIN */}
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle cx="12" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.6"/>
                  </svg>
                </span>
                <div>
                  <span className="footer__value">San Rafael, Mendoza, Argentina</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} FAST. Todos los derechos reservados.</span>
          <a
            className="footer__madeby"
            href="https://maximilianoechegaray.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Created by Maxi Echegaray.
          </a>
        </div>
      </div>
    </footer>
  );
}
