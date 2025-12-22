import Hero from "../Hero/Hero";
import "./Home.css";
import Timeline from "../../components/Timeline/Timeline";
import WhyFast from "../../sections/WhyFast/WhyFast";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <WhyFast />
      <section className="home__below" id="contenido">
        <div className="home__inner">
          <Timeline
            title="Nuestro proceso"
            items={[
              {
                id: "a1",
                kicker: "Inicio",
                leftTitle: "2023",
                text: "Definimos el objetivo del módulo y el tipo de uso. Te guiamos con tipologías y tiempos.",
                media: [
                  { src: "/images/mod-36.jpg", label: "Módulos compactos para oficina / monoambiente" },
                  { src: "/images/mod-48.jpg", label: "Vivienda compacta con expansión" },
                ],
              },
              {
                id: "a2",
                kicker: "Definición",
                leftTitle: "2024",
                text: "Ajustamos distribución, terminaciones y logística. Todo queda documentado antes de avanzar.",
                media: [
                  { src: "/images/mod-19.jpg", label: "Interior: terminaciones modernas" },
                  { src: "/images/mod-28.jpg", label: "Aberturas y luz natural" },
                ],
              },
              {
                id: "a1",
                kicker: "Inicio",
                leftTitle: "Principios de 2025",
                text: "Definimos el objetivo del módulo y el tipo de uso. Te guiamos con tipologías y tiempos.",
                media: [
                  { src: "/images/mod-36.jpg", label: "Módulos compactos para oficina / monoambiente" },
                  { src: "/images/mod-48.jpg", label: "Vivienda compacta con expansión" },
                ],
              },
              {
                id: "a1",
                kicker: "Inicio",
                leftTitle: "2025",
                text: "Definimos el objetivo del módulo y el tipo de uso. Te guiamos con tipologías y tiempos.",
                media: [
                  { src: "/images/mod-36.jpg", label: "Módulos compactos para oficina / monoambiente" },
                  { src: "/images/mod-48.jpg", label: "Vivienda compacta con expansión" },
                ],
              },
            ]}
          />

        </div>
      </section>
      
    </main>
  );
}