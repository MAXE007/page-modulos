import { PRODUCTS } from "../../data/products";
import ProductCard3D from "../../components/ProductCard3D/ProductCard3D";
import "./Products.css";

export default function Products() {
  return (
    <main className="tipos">
      <div className="tipos__inner">
        <header className="tipos__head">
          <h1>Tipologías</h1>
          <p>Seleccioná un módulo para ver especificaciones y pedir cotización.</p>
        </header>

        <section className="tipos__grid">
          {PRODUCTS.map((p) => (
            <ProductCard3D key={p.id} product={p} />
          ))}
        </section>
      </div>
    </main>
  );
}