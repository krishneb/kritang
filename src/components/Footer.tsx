import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-black text-white pt-24 pb-12 border-t border-gold/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <Link to="/" className="text-3xl font-serif font-bold gold-text tracking-widest">
              KRITANG SALON & SPA
            </Link>
            <p className="text-white/40 text-sm leading-relaxed">
              Experience the pinnacle of beauty and wellness in our premium sanctuary. Luxury redefined for the modern individual.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold uppercase tracking-widest font-bold mb-8 text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest">Home</Link></li>
              <li><Link to="/#services" className="text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest">Services</Link></li>
              <li><Link to="/gallery" className="text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest">Gallery</Link></li>
              <li><Link to="/#contact" className="text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold uppercase tracking-widest font-bold mb-8 text-sm">Our Services</h4>
            <ul className="space-y-4">
              <li><Link to="/#hair" className="text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest">Hair Styling</Link></li>
              <li><Link to="/#skin" className="text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest">Skin Care</Link></li>
              <li><Link to="/#hands-feet" className="text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest">Hands & Feet</Link></li>
              <li><Link to="/#spa" className="text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest">Spa & Wellness</Link></li>
              <li><Link to="/#bridal" className="text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest">Bridal Packages</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-gold uppercase tracking-widest font-bold mb-8 text-sm">Newsletter</h4>
            <p className="text-white/40 text-sm mb-6">Subscribe to receive updates and luxury offers.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 px-4 py-3 text-sm w-full focus:outline-none focus:border-gold transition-colors"
              />
              <button className="bg-gold text-white px-6 py-3 hover:bg-gold-dark transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-center md:text-left">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.3em]">
            &copy; {currentYear} Kritang Salon & Spa. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-white/20 text-[10px] uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
