export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  category: 'Cut' | 'Color' | 'Treatment' | 'Styling';
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  specialties: string[]; // Array of Service IDs
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface BookingDetails {
  serviceId: string;
  stylistId: string;
  date: string;
  time: string;
  customerName: string;
  customerEmail: string;
}