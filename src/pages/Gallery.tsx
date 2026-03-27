import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY_IMAGES } from "../constants";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog.tsx";
import { X, Maximize2 } from "lucide-react";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(GALLERY_IMAGES.map((img) => img.category))];

  const filteredImages = filter === "All" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter((img) => img.category === filter);

  return (
    <main className="bg-luxury-black pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold font-serif italic text-xl mb-4"
          >
            Our Masterpieces
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-12 tracking-tight text-white"
          >
            KRITANG <span className="gold-text">GALLERY</span>
          </motion.h1>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 text-xs uppercase tracking-widest font-bold transition-all duration-300 rounded-none border ${
                  filter === cat 
                    ? "bg-gold text-white border-gold" 
                    : "bg-transparent text-white/60 border-white/10 hover:border-gold hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.url}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-square overflow-hidden gold-border p-1 cursor-pointer"
              >
                <Dialog>
                  <DialogTrigger render={
                    <div className="w-full h-full relative overflow-hidden">
                      <img 
                        src={image.url} 
                        alt={image.alt} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center">
                          <Maximize2 className="w-8 h-8 text-gold mx-auto mb-2" />
                          <p className="text-white text-xs uppercase tracking-widest font-bold">{image.category}</p>
                        </div>
                      </div>
                    </div>
                  } />
                  <DialogContent className="max-w-4xl bg-transparent border-none p-0 shadow-none">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img 
                        src={image.url} 
                        alt={image.alt} 
                        className="max-w-full max-h-[80vh] object-contain gold-border p-2"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute -bottom-12 left-0 right-0 text-center">
                        <p className="text-gold font-serif italic text-lg">{image.alt}</p>
                        <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">{image.category}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
