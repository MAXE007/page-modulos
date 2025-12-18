import React, { useEffect, useRef, useState } from "react";
import "./Timeline.css";

export default function Timeline({ title = "Proceso", items = [] }) {
  const wrapRef = useRef(null);
  const [progress, setProgress] = useState(0); // 0..1

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      // progreso dentro de la sección
      const total = rect.height - vh * 0.35;
      const current = vh * 0.6 - rect.top;

      const p = total <= 0 ? 0 : current / total;
      setProgress(Math.max(0, Math.min(1, p)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="atl" ref={wrapRef} style={{ "--p": progress }}>
      <div className="atl__inner">
        <header className="atl__header">
          <h2 className="atl__title">{title}</h2>
          <p className="atl__subtitle">
            A medida que bajás, la línea se completa y vas viendo cada etapa.
          </p>
        </header>

        <div className="atl__track">
          {/* rail izquierda */}
          <div className="atl__rail" aria-hidden="true">
            <div className="atl__railBase" />
            <div className="atl__railActive" />
          </div>

          {/* items */}
          <div className="atl__items">
            {items.map((it, idx) => (
              <TimelineRow key={it.id ?? idx} item={it} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineRow({ item, index }) {
  return (
    <article className="atl__row">
      {/* Columna izquierda (año/título grande) */}
      <div className="atl__left">
        <div className="atl__dot" aria-hidden="true" />
        <div className="atl__leftText">
          <div className="atl__kicker">{item.kicker ?? `Paso ${index + 1}`}</div>
          <div className="atl__big">{item.leftTitle ?? item.title}</div>
        </div>
      </div>

      {/* Columna derecha (texto + imágenes) */}
      <div className="atl__right">
        {item.text ? <p className="atl__text">{item.text}</p> : null}

        {item.media?.length ? (
          <div className="atl__mediaGrid">
            {item.media.map((m, i) => (
              <figure className="atl__mediaCard" key={`${m.src}-${i}`}>
                <img className="atl__mediaImg" src={m.src} alt={m.alt ?? m.label ?? "preview"} />
                {m.label ? <figcaption className="atl__mediaLabel">{m.label}</figcaption> : null}
              </figure>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
