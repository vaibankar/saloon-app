import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { STYLISTS, SERVICES } from '../data';

interface StylistProfileProps {
  onOpenBooking: (stylistId?: string) => void;
}

const StylistProfile: React.FC<StylistProfileProps> = ({ onOpenBooking }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Find the stylist
  const stylist = STYLISTS.find(s => s.id === id);
  
  // Get specialized services
  const specialties = SERVICES.filter(s => stylist?.specialties.includes(s.id));

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!stylist) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-salon-cream">
            <div className="text-center">
                <h2 className="text-3xl font-serif text-salon-dark mb-4">Stylist Not Found</h2>
                <Link to="/" className="text-salon-gold hover:underline">Return Home</Link>
            </div>
        </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header / Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link to="/" className="inline-flex items-center text-neutral-500 hover:text-salon-gold transition-colors text-sm uppercase tracking-wider font-medium">
            <ArrowLeft size={16} className="mr-2" /> Back to Home
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left: Image */}
            <div className="relative">
                <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
                    <img 
                        src={stylist.imageUrl} 
                        alt={stylist.name} 
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-salon-cream -z-10 rounded-full hidden md:block"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-salon-gold -z-10 hidden md:block"></div>
            </div>

            {/* Right: Info */}
            <div className="flex flex-col h-full justify-center">
                <h1 className="text-5xl font-serif text-salon-dark mb-2">{stylist.name}</h1>
                <p className="text-salon-gold text-lg uppercase tracking-widest font-medium mb-8">{stylist.role}</p>
                
                <div className="prose prose-neutral max-w-none mb-10">
                    <p className="text-lg text-neutral-600 leading-relaxed font-light">
                        {stylist.bio}
                    </p>
                    <p className="text-neutral-600 leading-relaxed font-light mt-4">
                        Passionate about bringing out the inner beauty in every client, {stylist.name.split(' ')[0]} believes that hair is your most versatile accessory. Whether you're looking for a subtle refresh or a dramatic change, you are in expert hands.
                    </p>
                </div>

                {/* Specialties Section */}
                <div className="mb-10">
                    <h3 className="text-xl font-serif text-salon-dark mb-4">Specialized Services</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {specialties.map(service => (
                            <div key={service.id} className="border border-neutral-200 p-4 rounded-lg hover:border-salon-gold transition-colors bg-salon-cream/30">
                                <h4 className="font-serif text-salon-dark text-lg">{service.name}</h4>
                                <p className="text-xs text-neutral-500 mt-1 uppercase tracking-wide">{service.category}</p>
                                <div className="flex justify-between items-center mt-3">
                                    <span className="text-sm text-neutral-600">{service.duration}</span>
                                    <span className="font-medium text-salon-dark">{service.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 border-t border-neutral-200 pt-8">
                    <button 
                        onClick={() => onOpenBooking(stylist.id)}
                        className="bg-salon-dark text-white px-8 py-4 rounded-none hover:bg-neutral-800 transition-colors font-bold tracking-widest flex-1 text-center"
                    >
                        BOOK APPOINTMENT
                    </button>
                    <div className="flex items-center gap-2 text-neutral-500 text-sm justify-center">
                        <Clock size={16} />
                        <span>Next available: Today, 3pm</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default StylistProfile;