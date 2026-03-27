import React from "react";
import { motion } from "motion/react";
import { SERVICES } from "../constants";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { ArrowRight } from "lucide-react";

export default function ServicesOverview() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-white text-luxury-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-serif italic text-xl mb-4"
          >
            Our Offerings
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight"
          >
            EXPERIENCE THE <span className="gold-text">ART OF BEAUTY</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-black/60 max-w-2xl mx-auto uppercase tracking-widest text-xs"
          >
            From head to toe, we provide comprehensive luxury treatments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="group relative overflow-hidden rounded-none border-none shadow-2xl cursor-pointer"
                onClick={() => handleScrollTo(service.id)}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                </div>
                
                <CardContent className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                  <h4 className="text-2xl font-serif font-bold mb-2 tracking-wide group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-white/60 text-xs uppercase tracking-widest mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    {service.tagline}
                  </p>
                  <div className="flex items-center text-gold text-xs uppercase tracking-[0.3em] font-bold">
                    View Details <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
