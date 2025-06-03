import Hero from "../../components/Hero";
import ServicesList from "../../components/ServicesList";
import WhyChoose from "../../components/WhyChoose";
import Projects from "../../components/Project";
import Testimonials from "../../components/Testmonials";
import FAQ from "../../components/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesList />
      <WhyChoose />
      <Projects />
      <Testimonials />
      <FAQ />
    </>
  );
}
