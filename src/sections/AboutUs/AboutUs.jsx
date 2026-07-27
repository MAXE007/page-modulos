import "./AboutUs.css";

export default function AboutUs() {
  return (
    <section className="about" id="quienes-somos">
      <div className="about__container">

        <div className="about__header">
          <span className="about__tag">
            NUESTRA HISTORIA
          </span>

          <h2 className="about__title">
            ¿Quiénes somos?
          </h2>

          <p className="about__subtitle">
            Construimos mucho más que módulos.
            Creamos espacios pensados para las personas.
          </p>
        </div>

        <div className="about__content">

          <div className="about__imageWrapper">
            <img
              src="/images/portada.jpg"
              alt="Equipo FAST"
              className="about__image"
            />
          </div>

          <div className="about__text">

            <p>
              <strong>FAST Easy Modular</strong> nace con el objetivo de brindar
              soluciones arquitectónicas modernas, funcionales y transportables,
              adaptándose a las necesidades de cada cliente.
            </p>

            <p>
              Nos especializamos en el diseño y construcción de módulos
              habitacionales, oficinas y espacios personalizados, priorizando la
              calidad, la rapidez y la innovación en cada proyecto.
            </p>

            <p>
              Creemos que construir también significa acompañar a cada cliente
              durante todo el proceso, ofreciendo soluciones prácticas, eficientes
              y listas para disfrutar.
            </p>

            <div className="about__values">

              <div className="about__value">
                <span>🏗️</span>
                <h4>Calidad</h4>
              </div>

              <div className="about__value">
                <span>⚡</span>
                <h4>Rapidez</h4>
              </div>

              <div className="about__value">
                <span>🤝</span>
                <h4>Compromiso</h4>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}