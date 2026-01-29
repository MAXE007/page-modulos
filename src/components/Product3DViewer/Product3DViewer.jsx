import "./Product3DViewer.css";

export default function Product3DViewer({ src, poster, title = "Recorrido 3D", hint }) {
  const hasModel = Boolean(src);

  return (
    <section className="pd3d" aria-label={title}>
      <div className="pd3d__head">
        <h2 className="pd3d__title">{title}</h2>
        <p className="pd3d__hint">
          {hint ?? (hasModel
            ? "Arrastrá para girar • Scroll/Pinch para zoom"
            : "Próximamente: vista 3D interactiva del módulo")}
        </p>
      </div>

      <div className="pd3d__frame">
        {hasModel ? (
          <model-viewer
            src={src}
            alt={title}
            camera-controls
            interaction-prompt="none"
            shadow-intensity="1"
            exposure="1"
            loading="lazy"
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <div className="pd3d__placeholder">
            {poster ? (
              <img
                className="pd3d__poster"
                src={poster}
                alt="Vista previa"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="pd3d__posterFallback" />
            )}

            <div className="pd3d__overlay">
              <span className="pd3d__badge">3D próximamente</span>
              <p className="pd3d__overlayText">
                Estamos preparando el recorrido 3D del módulo.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
