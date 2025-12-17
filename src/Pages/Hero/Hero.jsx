import { Link } from "react-router-dom";
import RevealText from "../../components/RevealText/RevealText";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content hero__content--center">
        <RevealText
          text="Bienvenidos a"
          words={["FAST", "FAST MODULAR"]}
        />

        <p className="hero__subtitle hero__subtitle--reveal">
          Brindamos soluciones arquitectónicas en forma de módulos transportables
        </p>

      </div>
    </section>
  );
}