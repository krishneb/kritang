import React from "react";
import { motion } from "motion/react";
import { ServiceCategory } from "../types";

interface ServiceSectionProps {
  category: ServiceCategory;
  reverse?: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ category, reverse = false }) => {
  return (
    <section id={category.id} className={`py-24 ${reverse ? "bg-luxury-black text-white" : "bg-white text-luxury-black"}`}>
      <div className="container mx-auto px-6">
        <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 items-center`}>
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className={`relative aspect-[4/5] overflow-hidden ${reverse ? "gold-border" : "border-luxury-black border-2"} p-4`}>
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className={`absolute inset-0 ${reverse ? "bg-gold/10" : "bg-black/5"} pointer-events-none`} />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-gold font-serif italic text-xl mb-4">{category.tagline}</h2>
            <h3 className={`text-4xl md:text-5xl font-serif font-bold mb-12 tracking-tight ${reverse ? "text-white" : "text-luxury-black"}`}>
              {category.title.toUpperCase()}
            </h3>

            <div className="space-y-8">
              {category.items.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-start justify-between border-b ${reverse ? "border-white/10" : "border-black/10"} pb-6 group cursor-default`}
                >
                  <div className="flex-1 pr-8">
                    <h4 className={`text-lg font-bold tracking-widest uppercase mb-2 group-hover:text-gold transition-colors duration-300`}>
                      {item.name}
                    </h4>
                    <p className={`text-sm ${reverse ? "text-white/40" : "text-black/40"} leading-relaxed`}>
                      {item.description}
                    </p>
                  </div>
                  {item.price && (
                    <div className="text-gold font-bold tracking-widest text-sm whitespace-nowrap pt-1">
                      {item.price}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
