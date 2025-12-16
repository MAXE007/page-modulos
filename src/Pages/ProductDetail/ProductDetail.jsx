import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { PRODUCTS } from "../../data/products";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);

  const [activeImage, setActiveImage] = useState(
    product?.images?.[0]
  );

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
      <Link className="pd__back" to="/tipologias">← Volver</Link>

      <div className="pd__layout">
        {/* GALERÍA */}
        <section className="pd__gallery">
          <div className="pd__imageWrap">
            {activeImage ? (
              <img
                src={activeImage}
                alt={product.name}
                className="pd__image"
              />
            ) : (
              <div className="pd__imageFallback" />
            )}
          </div>

          <div className="pd__thumbs">
            {product.images.map((img) => (
              <button
                key={img}
                className={`pd__thumb ${
                  img === activeImage ? "is-active" : ""
                }`}
                onClick={() => setActiveImage(img)}
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
    </main>
  );
}
