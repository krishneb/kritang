export interface ServiceItem {
  name: string;
  description: string;
  price?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  image: string;
  items: ServiceItem[];
}

export interface GalleryImage {
  url: string;
  category: string;
  alt: string;
}
