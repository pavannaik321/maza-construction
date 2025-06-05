import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutContent from '@/components/About';
import ServicesContent from '@/components/ServiceList';
import WhyChooseUs from '@/components/WhyChoose';
import ProjectsContent from '@/components/Projects';
import Testimonials from '@/components/Testmonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function page() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutContent />
      <ServicesContent />
      <WhyChooseUs />
      <ProjectsContent />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
