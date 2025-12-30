import { Link, useParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import { PRODUCTS } from "../../data/products";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);

  // ✅ Hooks SIEMPRE arriba (sin returns antes)
  const [activeImage, setActiveImage] = useState(() => product?.images?.[0] ?? null);
  const [isFading, setIsFading] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // ✅ si cambia el id/producto, resetear imagen activa
  useEffect(() => {
    setActiveImage(product?.images?.[0] ?? null);
    setIsFading(false);
    setLightboxOpen(false);
  }, [id]); // suficiente para tu caso

  const images = product?.images ?? [];

  const changeImage = (img) => {
    if (!img || img === activeImage) return;
    setIsFading(true);
    window.setTimeout(() => {
      setActiveImage(img);
      setIsFading(false);
    }, 140);
  };

  const currentIndex = useMemo(() => {
    if (!activeImage) return 0;
    const idx = images.indexOf(activeImage);
    return idx === -1 ? 0 : idx;
  }, [activeImage, images]);

  const goPrev = () => {
    if (!images.length) return;
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    changeImage(images[prevIndex]);
  };

  const goNext = () => {
    if (!images.length) return;
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    changeImage(images[nextIndex]);
  };

  // ✅ Swipe (reutilizable)
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const onTouchStart = (e) => {
    const t = e.touches[0];
    touchStartX.current = t.clientX;
    touchStartY.current = t.clientY;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;

    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartX.current;
    const dy = t.clientY - touchStartY.current;

    // si fue scroll vertical, no swippear
    if (Math.abs(dy) > Math.abs(dx)) {
      touchStartX.current = null;
      touchStartY.current = null;
      return;
    }

    const TH = 50;
    if (dx > TH) goPrev();
    if (dx < -TH) goNext();

    touchStartX.current = null;
    touchStartY.current = null;
  };

  // ✅ cerrar lightbox con ESC + flechas teclado
  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen, activeImage]);

  // ✅ Recién ahora, si no existe el producto, renderizamos
  if (!product) {
    return (
      <main className="pd">
        <h1>No encontrado</h1>
        <Link to="/tipologias">Volver a Tipologías</Link>
      </main>
    );
  }

  return (
    <main className="pd">
      <div className="pd__container">
        <div className="pd__layout">
          {/* GALERÍA */}
          <section className="pd__gallery">
            {/* IMAGEN PRINCIPAL */}
            <div
              className="pd__imageWrap"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              {activeImage ? (
                <img
                  src={activeImage}
                  alt={product.name}
                  className={`pd__image ${isFading ? "is-fading" : ""}`}
                  onClick={() => setLightboxOpen(true)}
                />
              ) : (
                <div className="pd__imageFallback" />
              )}

              {/* INDICADORES */}
              <div className="pd__indicators">
                {images.map((img, index) => (
                  <button
                    key={img}
                    className={`pd__dot ${img === activeImage ? "is-active" : ""}`}
                    onClick={() => changeImage(img)}
                    aria-label={`Imagen ${index + 1}`}
                    type="button"
                  />
                ))}
              </div>

              {/* FLECHAS */}
              <button
                className="pd__arrow pd__arrow--left"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label="Imagen anterior"
                type="button"
              >
                ‹
              </button>

              <button
                className="pd__arrow pd__arrow--right"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label="Imagen siguiente"
                type="button"
              >
                ›
              </button>
            </div>

            {/* MINIATURAS */}
            <div className="pd__thumbs">
              {images.map((img) => (
                <button
                  key={img}
                  className={`pd__thumb ${img === activeImage ? "is-active" : ""}`}
                  onClick={() => changeImage(img)}
                  type="button"
                >
                  <img src={img} alt="miniatura" />
                </button>
              ))}
            </div>
          </section>

          {/* INFO */}
          <section className="pd__info">
            <h1 className="pd__title">{product.name}</h1>
            <p className="pd__subtitle">{product.subtitle}</p>

            <div className="pd__chips">
              <span>{product.m2} m²</span>
              <span>Ambientes: {product.rooms}</span>
              <span>{product.bathroom ? "Con baño" : "Sin baño"}</span>
              <span>{product.delivery}</span>
            </div>

            <h3>Características</h3>
            <ul className="pd__list">
              {product.specs.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>

            <div className="pd__ctaRow">
              <a
                className="pd__cta"
                href={`https://wa.me/5492610000000?text=${encodeURIComponent(
                  `Hola! Quiero cotizar el ${product.name}`
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Consultar por WhatsApp
              </a>

              <Link className="pd__secondary" to="/contacto">
                Ir a Contacto
              </Link>
            </div>
          </section>
        </div>

        {/* DESCRIPCIÓN DETALLADA */}
        <section className="pd__about">
          <h2 className="pd__aboutTitle">{product.aboutTitle ?? "Sobre este módulo"}</h2>
          {product.aboutText && <p className="pd__aboutText">{product.aboutText}</p>}

          {product.highlights?.length ? (
            <div className="pd__highlights">
              {product.highlights.map((h) => (
                <div className="pd__highlight" key={h.label}>
                  <span className="pd__highlightLabel">{h.label}</span>
                  <span className="pd__highlightValue">{h.value}</span>
                </div>
              ))}
            </div>
          ) : null}
        </section>
        
      </div>          
      {/* LIGHTBOX (con swipe adentro) */}
      {lightboxOpen && (
        <div
          className="pd__lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="pd__lightboxInner"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <button
              className="pd__lightboxClose"
              type="button"
              aria-label="Cerrar"
              onClick={() => setLightboxOpen(false)}
            >
              ✕
            </button>

            <button
              className="pd__lightboxNav pd__lightboxNav--left"
              type="button"
              aria-label="Anterior"
              onClick={goPrev}
            >
              ‹
            </button>

            <img
              className="pd__lightboxImg"
              src={activeImage ?? ""}
              alt={`Imagen ampliada ${product.name}`}
              draggable="false"
            />

            <button
              className="pd__lightboxNav pd__lightboxNav--right"
              type="button"
              aria-label="Siguiente"
              onClick={goNext}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
