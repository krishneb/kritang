import React from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-gold font-serif italic text-xl md:text-2xl mb-4 tracking-widest">
            Welcome to Kritang Salon & Spa
          </h2>
          <h1 className="text-white text-5xl md:text-8xl font-serif font-bold mb-8 tracking-tighter leading-tight">
            LUXURY <span className="gold-text">REDEFINED</span>
          </h1>
          <p className="text-white/70 text-sm md:text-lg max-w-2xl mx-auto mb-10 uppercase tracking-[0.3em] font-light">
            Experience the pinnacle of beauty and wellness in our premium sanctuary.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button 
              className="gold-button rounded-none px-12 py-8 text-sm uppercase tracking-widest font-bold w-full md:w-auto"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black rounded-none px-12 py-8 text-sm uppercase tracking-widest font-bold w-full md:w-auto transition-all duration-300"
            >
              Book Appointment
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <p className="text-white/40 text-[10px] uppercase tracking-[0.5em] mb-4">Scroll</p>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
