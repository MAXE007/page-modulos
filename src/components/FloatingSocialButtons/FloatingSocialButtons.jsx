import React from "react";
import "./FloatingSocialButtons.css";

function buildWhatsAppUrl(phone, message) {
  const digitsOnly = String(phone || "").replace(/[^\d]/g, "");
  const text = encodeURIComponent(message || "");
  if (!digitsOnly) return null;
  return `https://wa.me/${digitsOnly}${text ? `?text=${text}` : ""}`;
}

export default function FloatingSocialButtons({
  whatsappMessage = "Hola! Estoy en la web y quiero hacer una consulta.",
}) {
  const whatsappPhone = import.meta.env.VITE_CONTACT_WA_PHONE;
  const instagramUrl = import.meta.env.VITE_CONTACT_IG_URL;

  const waUrl = buildWhatsAppUrl(whatsappPhone, whatsappMessage);

  // Si no hay config, no renderizamos el botón correspondiente
  return (
    <div className="fsb">
      {instagramUrl ? (
        <a
          className="fsb__btn fsb__btn--ig"
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir Instagram"
          title="Instagram"
        >
          <svg viewBox="0 0 24 24" className="fsb__icon" aria-hidden="true">
            <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.505 4.505 0 0 0 12 7.5zm0 2A2.5 2.5 0 1 1 9.5 12 2.503 2.503 0 0 1 12 9.5zM17.75 6.25a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
          </svg>
        </a>
      ) : null}

      {waUrl ? (
        <a
          className="fsb__btn fsb__btn--wa"
          href={waUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir WhatsApp"
          title="WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="fsb__icon" aria-hidden="true">
            <path d="M20.52 3.48A11.78 11.78 0 0 0 12.02 0C5.39 0 .02 5.37.02 12c0 2.12.55 4.19 1.6 6.02L0 24l6.16-1.58A11.93 11.93 0 0 0 12.02 24C18.65 24 24 18.63 24 12c0-3.2-1.25-6.21-3.48-8.52zM12.02 22a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.65.94.97-3.56-.23-.37A9.93 9.93 0 0 1 2.02 12c0-5.51 4.48-10 10-10 2.67 0 5.18 1.04 7.07 2.93A9.94 9.94 0 0 1 22.02 12c0 5.52-4.48 10-10 10zm5.77-7.44c-.32-.16-1.9-.94-2.19-1.05-.3-.11-.52-.16-.74.16-.22.32-.85 1.05-1.04 1.27-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.58-1.6-.96-.86-1.61-1.92-1.8-2.24-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.22-.32.33-.54.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.02-2.44-.27-.65-.54-.56-.74-.57h-.63c-.22 0-.57.08-.87.41-.3.32-1.15 1.12-1.15 2.74 0 1.62 1.18 3.19 1.34 3.41.16.22 2.33 3.56 5.65 4.99.79.34 1.4.54 1.88.69.79.25 1.5.21 2.07.13.63-.09 1.9-.78 2.17-1.54.27-.76.27-1.41.19-1.54-.08-.13-.3-.21-.62-.37z" />
          </svg>
        </a>
      ) : null}
    </div>
  );
}
