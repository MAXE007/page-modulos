import { Link, useParams } from "react-router-dom";
import { LINES } from "../../data/lines";
import "./LineDetail.css";

export default function LineDetail() {
  const { id } = useParams();

  const line = LINES.find((item) => item.id === id);

  if (!line) {
    return (
      <main className="line-detail page-bg">
        <div className="line-detail__card line-detail__notFound">
          <span>LÍNEA</span>
          <h1>Línea no encontrada</h1>
          <p>La línea que estás buscando no existe.</p>

          <Link to="/tipologias/lineas" className="line-detail__back">
            ← Volver a líneas
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="line-detail page-bg">
      {/* HERO */}
      <section className="line-detail__card line-detail__hero">
        {line.image && (
          <img
            src={line.image}
            alt={`Línea ${line.name}`}
            className="line-detail__heroImage"
          />
        )}

        <div className="line-detail__heroContent">
          <Link to="/tipologias/lineas" className="line-detail__back">
            ← Volver a líneas
          </Link>

          <div className="line-detail__label">LÍNEA</div>

          <h1>{line.name}</h1>

          <p className="line-detail__subtitle">{line.subtitle}</p>
        </div>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="line-detail__card line-detail__intro">
        <div className="line-detail__introLabel">Sobre la línea</div>

        <h2>
          Una forma de construir
          <br />
          con identidad propia.
        </h2>

        <p>{line.description}</p>
      </section>

      {/* CARACTERÍSTICAS */}
      <section className="line-detail__card line-detail__features">
        <div className="line-detail__sectionHeader">
          <span>LÍNEA {line.name.toUpperCase()}</span>
          <h2>Materiales y estilo</h2>
        </div>

        <div className="line-detail__columns">
          <div className="line-detail__column">
            <h3>Materiales</h3>

            <div className="line-detail__list">
              {line.materials.map((material, index) => (
                <div className="line-detail__item" key={`${material}-${index}`}>
                  <span className="line-detail__number">0{index + 1}</span>
                  <span>{material}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="line-detail__column">
            <h3>Características de estilo</h3>

            <div className="line-detail__list">
              {line.styles.map((style, index) => (
                <div className="line-detail__item" key={`${style}-${index}`}>
                  <span className="line-detail__number">0{index + 1}</span>
                  <span>{style}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="line-detail__card line-detail__cta">
        <span>LÍNEA {line.name.toUpperCase()}</span>

        <h2>
          Elegí el módulo
          <br />
          que mejor se adapta a vos.
        </h2>

        <p>Conocé nuestras tipologías y descubrí las posibilidades de esta línea.</p>

        <Link to="/tipologias" className="line-detail__ctaButton">
          Ver modelos
          <span>→</span>
        </Link>
      </section>
    </main>
  );
}