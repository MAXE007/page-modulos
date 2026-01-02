import Hero from "../Hero/Hero";
import "./Home.css";
import WhyFast from "../../sections/WhyFast/WhyFast";
import Timeline from "../../components/Timeline/Timeline";
import ProjectsCarousel from "../../components/ProjectsCarousel/ProjectsCarousel";

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
                kicker: "Nuestros comienzos",
                leftTitle: "2023",
                text: "Alli en el año 2023 comenzabamos con este sueño de fabricar modulos trasladables rapidos y faciles de colocar para que personas de distintos lugares del pais puedan tener su hogar u oficina en tiempo record",
                media: [
                  { src: "/images/mod-36.jpg", label: "Módulos compactos para oficina / monoambiente" },
                  { src: "/images/mod-48.jpg", label: "Vivienda compacta con expansión" },
                ],
              },
              {
                id: "a2",
                kicker: "Definición",
                leftTitle: "2024",
                text: "Aqui ya teniamos clara nuestra vision y lo que hicimos fue asentarnos en el mercado ya con mas productos a disposicion de las personas.",
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
      <section className="home__projects">
        <ProjectsCarousel />
      </section>
    </main>
  );
}