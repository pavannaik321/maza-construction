
'use client'
import Header from '@/components/Header';
import ContactForm from '@/components/contactus'
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-yellow-100 py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-primary drop-shadow-md">
        Contact Maza Construction
      </h1>
      <div className="max-w-6xl mx-auto">
        <Header />
        <ContactForm />
        <Footer />
      </div>
    </main>
  )
}
