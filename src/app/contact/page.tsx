// app/contact/page.tsx
import Header from '@/components/Header';
import ContactHero from '@/components/ContactHero';
import ContactOptions from '@/components/ContactOption';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function contact() {
  return (
    <>
      <Header />
      <ContactHero />
      <ContactOptions />
      <ContactForm />
      <Footer />
    </>
  );
}
