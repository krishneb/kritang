import React from "react";
import { motion } from "motion/react";
import { Star, ShieldCheck, Sparkles, UserCheck } from "lucide-react";

const features = [
  {
    icon: <UserCheck className="w-8 h-8 text-gold" />,
    title: "Experienced Professionals",
    description: "Our team consists of world-class stylists and therapists with years of expertise.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-gold" />,
    title: "Premium Products",
    description: "We use only the finest, luxury-grade products for all our treatments.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-gold" />,
    title: "Hygienic Environment",
    description: "Your safety is our priority. We maintain the highest standards of cleanliness.",
  },
  {
    icon: <Star className="w-8 h-8 text-gold" />,
    title: "Personalized Services",
    description: "Every treatment is tailored to your unique needs and preferences.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-luxury-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold font-serif italic text-xl mb-4">The Kritang Standard</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              WHY CHOOSE OUR <br /> <span className="gold-text">SANCTUARY?</span>
            </h3>
            <p className="text-white/60 mb-12 leading-relaxed max-w-lg">
              At Kritang Salon & Spa, we believe that beauty is an art form. Our sanctuary is designed to provide you with an unparalleled experience of luxury and rejuvenation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold tracking-wide uppercase">{feature.title}</h4>
                  <p className="text-sm text-white/40 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden gold-border p-4">
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800" 
                alt="Salon Interior" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 border-t-2 border-r-2 border-gold opacity-30" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border-b-2 border-l-2 border-gold opacity-30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
