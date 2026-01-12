// src/Pages/FAQ/FAQ.jsx
import React, { useMemo, useState } from "react";
import "./FAQ.css";

const FAQS = [
  {
    q: "¿Qué es el sistema FAST?",
    a: "FAST permite crear espacios funcionales y de alta calidad en tiempos reducidos, con fabricación controlada y entrega eficiente.",
  },
  {
    q: "¿En dónde se construyen?",
    a: "Se construyen en nuestra fábrica, ubicada en la cuidad de San Rafael, Mendoza.",
  },
  {
    q: "¿Se puede personalizar el diseño?",
    a: "Sí. Podés elegir distribución, terminaciones, equipamiento y detalles según el uso y el estilo que busques.",
  },
  {
    q: "¿Cuánto tarda la entrega?",
    a: "Depende del modelo y la personalización. Te pasamos un estimado de plazos según la tipología y el alcance de la entrega.",
  },
  {
    q: "¿Incluye traslado e instalación?",
    a: "Sí. Coordinamos logística y entrega en el lugar indicado. La instalación es rápida y planificada.",
  },
  {
    q: "¿Cómo se trasladan los módulos?",
    a: "Todas las unidades se trasladan utilizando grúas y camiones semirremolques o carretones, dependiendo las dimensiones requeridas.",
  },
  {
    q: "¿Qué incluye “llave en mano”?",
    a: "Se entrega listo para usar, con instalaciones, terminaciones y equipamiento acordado según el proyecto.",
  },
  {
    q: "¿Qué mantenimiento requiere?",
    a: "Mantenimiento básico. Te indicamos recomendaciones según materiales y ubicación del módulo.",
  },
];

function Chevron({ open }) {
  return (
    <svg
      className={`faq__chev ${open ? "is-open" : ""}`}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M9 18l6-6-6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const waPhone = import.meta.env.VITE_CONTACT_WA_PHONE;

  const waHref = useMemo(() => {
    const digits = String(waPhone || "").replace(/[^\d]/g, "");
    if (!digits) return null;
    const msg = encodeURIComponent("Hola! Tengo una consulta sobre FAST.");
    return `https://wa.me/${digits}?text=${msg}`;
  }, [waPhone]);

  return (
    <main className="page-bg">
      <section className="faqPage">
        <div className="faqPage__container">
          <header className="faqPage__header">
            <h1 className="faqPage__title">Preguntas frecuentes</h1>
            <p className="faqPage__subtitle">
              Respuestas rápidas para que puedas avanzar con tu consulta sin vueltas.
            </p>
          </header>

          <div className="faqGlass">
            {FAQS.map((item, i) => {
              const open = openIndex === i;
              return (
                <div key={item.q} className={`faqItem ${open ? "is-open" : ""}`}>
                  <button
                    type="button"
                    className="faqItem__btn"
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    aria-expanded={open}
                  >
                    <span className="faqItem__q">{item.q}</span>
                    <Chevron open={open} />
                  </button>

                  <div className="faqItem__panel" role="region">
                    <div className="faqItem__a">{item.a}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="faqPage__cta">
            <p className="faqPage__ctaText">¿No encontraste tu respuesta?</p>

            {waHref ? (
              <a className="faqPage__ctaBtn" href={waHref} target="_blank" rel="noreferrer">
                Consultanos por WhatsApp
              </a>
            ) : (
              <span className="faqPage__ctaHint">
                Configurá <code>VITE_CONTACT_WA_PHONE</code> para habilitar WhatsApp.
              </span>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
