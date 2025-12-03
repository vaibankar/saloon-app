import { Service, Stylist } from './types';

export const SERVICES: Service[] = [
  { 
    id: '1', 
    name: 'Signature Precision Cut', 
    description: 'Includes consultation, wash, massage, cut & style.', 
    price: '$85+', 
    duration: '60 min', 
    category: 'Cut' 
  },
  { 
    id: '2', 
    name: 'Gentleman’s Cut', 
    description: 'Tailored clipper or scissor cut with hot towel finish.', 
    price: '$55+', 
    duration: '45 min', 
    category: 'Cut' 
  },
  { 
    id: '3', 
    name: 'Full Balayage', 
    description: 'Hand-painted highlights for a natural, sun-kissed look.', 
    price: '$220+', 
    duration: '180 min', 
    category: 'Color' 
  },
  { 
    id: '4', 
    name: 'Root Touch Up', 
    description: 'Coverage for regrowth (up to 1 inch).', 
    price: '$90+', 
    duration: '90 min', 
    category: 'Color' 
  },
  { 
    id: '5', 
    name: 'Keratin Treatment', 
    description: 'Smoothing therapy for frizz-free, shiny hair.', 
    price: '$250+', 
    duration: '150 min', 
    category: 'Treatment' 
  },
  { 
    id: '6', 
    name: 'Special Event Styling', 
    description: 'Updos, waves, or braiding for your special day.', 
    price: '$100+', 
    duration: '60 min', 
    category: 'Styling' 
  },
];

export const STYLISTS: Stylist[] = [
  { 
    id: 's1', 
    name: 'Elena Rossi', 
    role: 'Master Stylist', 
    bio: 'With over 15 years of experience in Milan and New York, Elena specializes in precision cutting and transformative makeovers. Her philosophy is to create styles that grow out beautifully and suit the client’s lifestyle.', 
    imageUrl: 'https://picsum.photos/id/64/400/500',
    specialties: ['1', '3', '4'] 
  },
  { 
    id: 's2', 
    name: 'David Chen', 
    role: 'Senior Colorist', 
    bio: 'David is our resident color chemist. Known for his "lived-in" balayage technique and seamless color corrections, he creates depth and dimension that looks effortlessly natural.', 
    imageUrl: 'https://picsum.photos/id/91/400/500',
    specialties: ['3', '4', '5']
  },
  { 
    id: 's3', 
    name: 'Sarah Jenkins', 
    role: 'Style Director', 
    bio: 'Sarah brings runway trends to the salon chair. An expert in bridal styling and long-hair dressing, she ensures you look breathtaking for your most important moments.', 
    imageUrl: 'https://picsum.photos/id/338/400/500',
    specialties: ['1', '6']
  },
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Platinum Perfection",
    category: "Color Correction",
    url: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=2626&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    id: 2,
    title: "Texture & Curls",
    category: "Styling",
    url: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    id: 3,
    title: "Silk Press Finish",
    category: "Treatment",
    url: "https://images.unsplash.com/photo-1595476103518-3c182f265380?q=80&w=2670&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-2"
  },
  {
    id: 4,
    title: "Vivid Reds",
    category: "Creative Color",
    url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    id: 5,
    title: "Luxury Wash",
    category: "Experience",
    url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2669&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-1"
  },
  {
    id: 6,
    title: "Bridal Suite",
    category: "Events",
    url: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=2670&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-1"
  }
];