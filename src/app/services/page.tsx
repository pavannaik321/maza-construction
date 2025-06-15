import Header from '@/components/Header';
import HeroService from '@/components/HeroService';
import ServiceHighlights from '@/components/ServiceHighlights';
import ServiceCards from '@/components/ServiceCards';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function services() {
  return (
    <main className="bg-white text-gray-800">
      <Header />
      <HeroService />
      <ServiceHighlights />
      <ServiceCards />
      <CallToAction />
      <Footer />
    </main>
  );
}

