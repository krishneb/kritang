import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-luxury-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-serif italic text-xl mb-4"
          >
            Get in Touch
          </motion.h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight">
            CONTACT <span className="gold-text">US</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20 shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-widest mb-2">Address</h4>
                  <p className="text-white/60 leading-relaxed">
                    123 Luxury Avenue, Suite 456<br />
                    Beverly Hills, CA 90210
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20 shrink-0">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-widest mb-2">Phone</h4>
                  <p className="text-white/60 leading-relaxed">
                    +1 (555) 123-4567<br />
                    +1 (555) 987-6543
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20 shrink-0">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-widest mb-2">Email</h4>
                  <p className="text-white/60 leading-relaxed">
                    info@kritang.com<br />
                    bookings@kritang.com
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 aspect-video gold-border p-2">
              <div className="w-full h-full bg-white/5 flex items-center justify-center text-white/20 uppercase tracking-widest text-xs">
                <MapPin className="w-8 h-8 mr-4 opacity-20" />
                Google Map Embedded
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 p-8 md:p-12 gold-border backdrop-blur-sm"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gold">Full Name</label>
                <Input 
                  placeholder="Your Name" 
                  className="bg-transparent border-white/10 focus:border-gold rounded-none h-12 text-white placeholder:text-white/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gold">Phone Number</label>
                <Input 
                  placeholder="+1 (555) 000-0000" 
                  className="bg-transparent border-white/10 focus:border-gold rounded-none h-12 text-white placeholder:text-white/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gold">Message</label>
                <Textarea 
                  placeholder="How can we help you?" 
                  className="bg-transparent border-white/10 focus:border-gold rounded-none min-h-[150px] text-white placeholder:text-white/20"
                />
              </div>
              <Button className="gold-button w-full py-8 rounded-none text-sm uppercase tracking-widest font-bold group">
                Send Message <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
