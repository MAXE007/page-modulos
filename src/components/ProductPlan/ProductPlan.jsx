import { useState, useEffect  } from "react";
import { createPortal } from "react-dom";
import "./ProductPlan.css";

export default function ProductPlan({ plan, video, title = "Plano de distribución" }) {
  const [planOpen, setPlanOpen] = useState(false);

  useEffect(() => {
    if (planOpen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }

    return () => {
        document.body.style.overflow = "";
    };
    }, [planOpen]);

  if (!plan && !video) return null;

  return (
    <section className="productPlan">
      {plan && (
        <>
          <div className="productPlan__header">
            <span className="productPlan__eyebrow">DISTRIBUCIÓN</span>
            <h2 className="productPlan__title">{title}</h2>
            <p className="productPlan__subtitle">
              Conocé la distribución y aprovechamiento de los espacios de esta
              tipología.
            </p>
          </div>

          <div
            className="productPlan__imageWrap"
            onClick={() => setPlanOpen(true)}
          >
            <img
              src={plan}
              alt={`Plano de ${title}`}
              className="productPlan__image"
              loading="lazy"
            />

            <div className="productPlan__zoom">
              <span>⌕</span>
              Ver plano completo
            </div>
          </div>
        </>
      )}

      {video && (
        <div className="productPlan__videoSection">
          <div className="productPlan__header">
            <span className="productPlan__eyebrow">RECORRIDO</span>
            <h2 className="productPlan__title">Conocé el módulo</h2>
            <p className="productPlan__subtitle">
              Mirá el recorrido y descubrí sus espacios en detalle.
            </p>
          </div>

          <div className="productPlan__videoWrap">
            <video
              className="productPlan__video"
              src={video}
              controls
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      )}

      {
        planOpen &&
        createPortal(
            <div
            className="productPlan__lightbox"
            onClick={() => setPlanOpen(false)}
            >
            <button
                className="productPlan__close"
                type="button"
                aria-label="Cerrar"
                onClick={() => setPlanOpen(false)}
            >
                ✕
            </button>

            <img
                src={plan}
                alt="Plano ampliado"
                className="productPlan__lightboxImage"
                onClick={(e) => e.stopPropagation()}
            />
            </div>,
            document.body
        )
    }
    </section>
  );
}