import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <div className="hero__copy">
          <h1>Módulos habitacionales modernos, listos para instalar.</h1>
          <p>
            Diseños minimalistas, fabricación rápida y opciones personalizables.
            Pedí catálogo y cotización por WhatsApp.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#products">Ver modelos</a>
            <a className="btn" href="#contact">Cotizar</a>
          </div>

          <div className="hero__meta">
            <span>Entrega rápida</span>
            <span>Financiación</span>
            <span>Personalización</span>
          </div>
        </div>

        <div className="hero__media" aria-label="Imagen de módulo">
          <div className="hero__mock" />
        </div>
      </div>
    </section>
  );
}