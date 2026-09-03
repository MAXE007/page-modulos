import { Link } from "react-router-dom";
import { LINES } from "../../data/lines";
import "./Lines.css";

export default function Lines() {
  return (
    <main className="lines page-bg">
      <div className="lines__inner">

        <header className="lines__head">
          <h1 className="lines__title">
            Líneas
          </h1>

          <p className="lines__subtitle">
            Diferentes propuestas de materiales y estilos para
            personalizar nuestros módulos según cada proyecto.
          </p>
        </header>

        <section className="lines__grid">

          {LINES.map((line) => (
            <article className="lineCard" key={line.id}>

              <div className="lineCard__imageWrapper">
                <img
                  src={line.image}
                  alt={line.name}
                  className="lineCard__image"
                />
              </div>

              <div className="lineCard__content">

                <span className="lineCard__eyebrow">
                  LÍNEA
                </span>
                

                <h2 className="lineCard__title">
                  {line.name}
                </h2>

                <p className="lineCard__subtitle">
                  {line.subtitle}
                </p>

                <p className="lineCard__description">
                  {line.description}
                </p>

                <div className="lineCard__footer">

                  <Link
                    to={`/lineas/${line.id}`}
                    className="lineCard__button"
                  >
                    Ver línea
                    <span>→</span>
                  </Link>

                </div>

              </div>

            </article>
          ))}

        </section>

      </div>
    </main>
  );
}