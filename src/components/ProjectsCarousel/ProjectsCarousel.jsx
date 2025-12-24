import { useState } from "react";
import "./ProjectsCarousel.css";

const PROJECTS = [
  {
    title: "Gente",
    image: "/images/vet.jpg",
  },
  {
    title: "Veterinaria",
    image: "/images/veterinaria.jpg",
  },
  {
    title: "Inauguración",
    image: "/images/people.jpg",
  },
];

export default function ProjectsCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((p) => (p === 0 ? PROJECTS.length - 1 : p - 1));
  };

  const next = () => {
    setIndex((p) => (p === PROJECTS.length - 1 ? 0 : p + 1));
  };

  return (
    <section className="carousel">
      <h2 className="carousel__title">Nuestros proyectos</h2>

      <div className="carousel__viewport">
        {PROJECTS.map((p, i) => {
          const offset = i - index;

          return (
            <article
              key={i}
              className="carousel__card"
              style={{
                transform: `
                  translateX(${offset * 240}px)
                  scale(${i === index ? 1 : 0.86})
                  perspective(1200px)
                  rotateY(${offset * -8}deg)
                `,
                opacity: Math.abs(offset) > 1 ? 0 : 1,
                zIndex: 10 - Math.abs(offset),
              }}
            >
              <img src={p.image} alt={p.title} />
              <h3>{p.title}</h3>
            </article>
          );
        })}
      </div>

      <div className="carousel__controls">
        <button onClick={prev} aria-label="Anterior">←</button>
        <button onClick={next} aria-label="Siguiente">→</button>
      </div>
    </section>
  );
}
