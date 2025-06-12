import About from '@/components/About'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import ServicesList from '@/components/ServiceList'
import Testimonials from '@/components/Testmonials'
import WhyChoose from '@/components/WhyChoose'
import React from 'react'

export default function page() {
  return (
    <>
 {/* <div className="font-geistSans text-xl">This is Geist Sans!</div> */}
      {/* <p className="text-xl">This is Lexend!</p> */}
      <Header />
      <Hero />
      <About />
      <ServicesList />
      <WhyChoose />
      <Projects />
      <Testimonials />
      <FAQ />
      <Footer />
      
    </>
    
  )
}
