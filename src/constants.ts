import { ServiceCategory, GalleryImage } from "./types";

export const SERVICES: ServiceCategory[] = [
  {
    id: "hair",
    title: "Hair Services",
    tagline: "Transform your look with our expert stylists.",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "Hair Styling", description: "Classic and modern styling for any occasion.", price: "From $50" },
      { name: "Fantasy Styling", description: "Creative and avant-garde hair art.", price: "From $120" },
      { name: "Advanced Styling", description: "Intricate updos and specialized techniques.", price: "From $80" },
      { name: "Wash & Blow Dry", description: "Professional cleanse and voluminous finish.", price: "From $40" },
      { name: "Hair Coloring", description: "Full color, highlights, balayage, and more.", price: "From $100" },
      { name: "Hair Transformation", description: "Complete makeover including cut and color.", price: "From $200" },
      { name: "Hair Spa", description: "Deep conditioning and scalp treatments.", price: "From $70" },
    ],
  },
  {
    id: "skin",
    title: "Skin Services",
    tagline: "Radiant, healthy skin starts here.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "Clean-up", description: "Quick refresh for tired skin.", price: "$45" },
      { name: "Face Mask", description: "Hydrating and nourishing treatments.", price: "$30" },
      { name: "Peel Mask", description: "Exfoliating treatment for smoother texture.", price: "$55" },
      { name: "Essential Facial", description: "Deep cleansing and hydration.", price: "$85" },
      { name: "Premium Facial", description: "Anti-aging and luxury skin rejuvenation.", price: "$150" },
    ],
  },
  {
    id: "hands-feet",
    title: "Hands & Feet",
    tagline: "Pamper your extremities with our specialized care.",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "Manicure", description: "Classic nail shaping and cuticle care.", price: "$35" },
      { name: "Pedicure", description: "Relaxing foot soak and nail treatment.", price: "$45" },
      { name: "Nail Care", description: "Strengthening and therapeutic nail treatments.", price: "$25" },
      { name: "Spa Treatments", description: "Paraffin wax and luxury massages for hands/feet.", price: "$60" },
    ],
  },
  {
    id: "spa",
    title: "Spa Services",
    tagline: "Ultimate relaxation for mind and body.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "Body Massage", description: "Swedish, deep tissue, or hot stone options.", price: "From $90" },
      { name: "Relaxation Therapies", description: "Calming treatments to reduce stress.", price: "From $110" },
      { name: "Aroma Therapy", description: "Essential oil infused wellness sessions.", price: "From $100" },
      { name: "Wellness Treatments", description: "Holistic body care and detox.", price: "From $130" },
    ],
  },
  {
    id: "bridal",
    title: "Bridal Treatment",
    tagline: "Look your absolute best on your special day.",
    image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "Bridal Makeup", description: "Professional long-lasting wedding makeup.", price: "Custom" },
      { name: "Pre-bridal Packages", description: "Series of treatments leading up to the big day.", price: "From $500" },
      { name: "Bridal Hair Styling", description: "Elegant wedding day updos and styles.", price: "From $150" },
      { name: "Skin Preparation", description: "Specialized facials for a bridal radiance.", price: "From $120" },
      { name: "Full Transformation", description: "Complete bridal package including hair, skin, and makeup.", price: "Custom" },
    ],
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800", category: "Hair", alt: "Hair Styling" },
  { url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800", category: "Skin", alt: "Facial Treatment" },
  { url: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800", category: "Bridal", alt: "Bridal Makeup" },
  { url: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800", category: "Hair", alt: "Hair Coloring" },
  { url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800", category: "Skin", alt: "Skin Care" },
  { url: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&q=80&w=800", category: "Bridal", alt: "Bridal Hair" },
  { url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800", category: "Spa", alt: "Massage Therapy" },
  { url: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800", category: "Hands & Feet", alt: "Pedicure" },
];
