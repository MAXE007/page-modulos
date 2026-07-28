import "./AboutUs.css";

export default function AboutUs() {
  return (
    <section className="about" id="quienes-somos">
      <div className="about__container">

        <div className="about__header">
          <span className="about__tag">
            NOSOTROS
          </span>

          <h2 className="about__title">
            ¿Quiénes somos?
          </h2>

          <p className="about__subtitle">
            Conocé al equipo detrás de FAST y nuestra forma de trabajar para
            crear espacios modernos, funcionales y listos para disfrutar.
          </p>
        </div>

        <div className="about__content">

          {/* Imagen */}
          <div className="about__imageBlock">

            <div className="about__imageWrapper">
              <img
                src="/images/aboutus.jpeg"
                alt="Equipo de FAST Easy Modular"
                className="about__image"
              />
            </div>

            <p className="about__caption">
              El equipo de <strong>FAST Easy Modular</strong> durante la entrega
              de uno de nuestros proyectos.
            </p>

          </div>

          {/* Texto */}

          <div className="about__text">

            <p>
              <strong>FAST Easy Modular</strong> es una empresa dedicada al
              diseño, fabricación e instalación de módulos transportables,
              ofreciendo soluciones modernas, funcionales y adaptadas a cada
              proyecto.
            </p>

            <p>
              Nuestro equipo combina experiencia, compromiso y una forma de
              trabajo enfocada en la calidad de cada detalle, acompañando al
              cliente desde la primera idea hasta la entrega final del módulo.
            </p>

            <p>
              Creemos que construir también significa generar confianza. Por eso
              trabajamos con procesos eficientes, materiales de primera calidad
              y una atención personalizada que nos permite convertir cada
              proyecto en una experiencia simple, rápida y segura.
            </p>

            <div className="about__values">

              <div className="about__value">
                <span>👷</span>
                <h4>Equipo profesional</h4>
                <p>Comprometidos con cada proyecto.</p>
              </div>

              <div className="about__value">
                <span>🏡</span>
                <h4>Proyectos a medida</h4>
                <p>Diseños adaptados a cada cliente.</p>
              </div>

              <div className="about__value">
                <span>🚛</span>
                <h4>Instalación en destino</h4>
                <p>Entregas rápidas en todo el país.</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}