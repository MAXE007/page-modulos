import React from "react";
import "./WhyFast.css";

const benefits = [
  {
    title: "Personalización y diseño",
    desc: "Diseños a medida para cada necesidad, combinando estética y funcionalidad.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 17.25V21h3.75L19.81 7.94l-3.75-3.75L3 17.25zm2.92 2.33H5v-.92l9.06-9.06.92.92L5.92 19.58zM20.71 6.04a1.003 1.003 0 0 0 0-1.42l-1.34-1.34a1.003 1.003 0 0 0-1.42 0l-1.13 1.13 3.75 3.75 1.14-1.12z"/>
      </svg>
    ),
  },
  {
    title: "Confort y calidad",
    desc: "Materiales premium y terminaciones superiores para mayor durabilidad y confort.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4zm0 2.18L7 6.5v5.5c0 3.92 2.34 7.22 5 8.23 2.66-1.01 5-4.31 5-8.23V6.5l-5-2.32z"/>
      </svg>
    ),
  },
  {
    title: "Velocidad y traslado",
    desc: "Cumplimos con los plazos acordados y llevamos el módulo al lugar indicado.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 8h-3V4H1v13h2a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h2v-5l-3-4zM6 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm12 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM3 15V6h12v9H3zm14 0V10h2.1L21 12.6V15h-4z"/>
      </svg>
    ),
  },
  {
    title: "Versátil",
    desc: "Soluciones adaptables a distintos espacios y usos, con múltiples tipologías.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 4h8v8H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm8 2h8v4h-8v-4z"/>
      </svg>
    ),
  },
  {
    title: "Libre de obra",
    desc: "Menos gestión, menos imprevistos. Fabricación controlada y entrega lista.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2 21h20v-2H2v2zM5 17h2v-7H5v7zm4 0h2V7H9v10zm4 0h2v-4h-2v4zm4 0h2V4h-2v13z"/>
      </svg>
    ),
  },
  {
    title: "Llave en mano",
    desc: "Entregamos el espacio listo para usar. Vos te ocupás de disfrutarlo.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 14a5 5 0 1 1 4.9-6h7.1l2 2-2 2 1 1-2 2-1-1-1 1h-2.1A5 5 0 0 1 7 14zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
      </svg>
    ),
  },
];

export default function WhyFast() {
  return (
    <section className="whyfast" aria-labelledby="whyfast-title">
      <div className="whyfast__container">
        <div className="whyfast__header">
          <h2 id="whyfast-title" className="whyfast__title">¿Por qué FAST?</h2>
          <p className="whyfast__subtitle">
            Beneficios constructivos que hacen la diferencia: rapidez, calidad y diseño en un solo sistema.
          </p>
        </div>

        <div className="whyfast__grid">
          {benefits.map((b) => (
            <article key={b.title} className="whyfast__card">
              <div className="whyfast__icon" aria-hidden="true">
                {b.icon}
              </div>
              <h3 className="whyfast__cardTitle">{b.title}</h3>
              <p className="whyfast__cardDesc">{b.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
