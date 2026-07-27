import Hero from "../Hero/Hero";
import "./Home.css";
import AboutUs from "../../sections/AboutUs/AboutUs";
import WhyFast from "../../sections/WhyFast/WhyFast";
import ProjectsCarousel from "../../components/ProjectsCarousel/ProjectsCarousel";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <AboutUs />
      <WhyFast />
      <section className="home__projects">
        <ProjectsCarousel />
      </section>
    </main>
  );
}