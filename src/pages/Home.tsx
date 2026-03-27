import React from "react";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import ServicesOverview from "../components/ServicesOverview";
import ServiceSection from "../components/ServiceSection";
import Contact from "../components/Contact";
import { SERVICES } from "../constants";

export default function Home() {
  return (
    <main className="bg-luxury-black">
      <Hero />
      <WhyChooseUs />
      <ServicesOverview />
      
      {/* Detailed Service Sections */}
      {SERVICES.map((service, index) => (
        <ServiceSection 
          key={service.id} 
          category={service} 
          reverse={index % 2 !== 0} 
        />
      ))}
      
      <Contact />
    </main>
  );
}
