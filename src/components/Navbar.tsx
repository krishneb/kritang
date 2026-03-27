import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet.tsx";
import { SERVICES } from "../constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/#contact" },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-luxury-black/90 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif font-bold gold-text tracking-widest">
          KRITANG SALON & SPA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => link.path.startsWith("/#") && handleScrollTo(link.path.substring(2))}
              className="text-sm uppercase tracking-widest text-white/80 hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm uppercase tracking-widest text-white/80 hover:text-gold transition-colors outline-none">
              Services <ChevronDown className="ml-1 w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-luxury-black border-gold/20 text-white">
              {SERVICES.map((service) => (
                <DropdownMenuItem key={service.id} className="hover:bg-gold/10 focus:bg-gold/10">
                  <Link
                    to={`/#${service.id}`}
                    onClick={() => handleScrollTo(service.id)}
                    className="w-full px-4 py-2 text-xs uppercase tracking-widest"
                  >
                    {service.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="gold-button rounded-none px-8 text-xs uppercase tracking-widest font-bold">
            Book Now
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger render={
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="w-6 h-6" />
              </Button>
            } />
            <SheetContent side="right" className="bg-luxury-black border-gold/20 text-white">
              <div className="flex flex-col space-y-8 mt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-lg uppercase tracking-widest hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-4">
                  <p className="text-xs uppercase tracking-widest text-gold font-bold">Services</p>
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      to={`/#${service.id}`}
                      onClick={() => handleScrollTo(service.id)}
                      className="text-sm uppercase tracking-widest text-white/60 hover:text-white"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
                <Button className="gold-button rounded-none w-full py-6 text-xs uppercase tracking-widest font-bold">
                  Book Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
