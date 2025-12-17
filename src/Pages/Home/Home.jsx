import Hero from "../Hero/Hero";
import "./Home.css";

export default function Home() {
  return (
    <main className="home">
      <Hero />

      {/* contenido para que el scroll tenga destino */}
      <section className="home__below" id="contenido">
        <div className="home__inner">
          <h2>Modulares pensados para vivir y trabajar</h2>
          <p>
            Tipologías disponibles, diseño funcional y entrega rápida. Elegí tu
            módulo y consultá por disponibilidad.
          </p>
        </div>
      </section>
    </main>
  );
}