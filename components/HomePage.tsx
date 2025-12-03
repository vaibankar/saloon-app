import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, STYLISTS, GALLERY_ITEMS } from '../data';

interface HomePageProps {
  onOpenBooking: () => void;
  onOpenChat: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onOpenBooking, onOpenChat }) => {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop" 
            alt="Salon Interior" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <p className="text-salon-gold text-lg md:text-xl uppercase tracking-[0.3em] mb-4 animate-in slide-in-from-bottom-4 duration-700 delay-100 fade-in">
            Luxury Hair & Spa
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 font-medium leading-tight animate-in slide-in-from-bottom-8 duration-700 delay-200 fade-in">
            Redefine Your <br/> <span className="italic font-light">Elegance</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-in slide-in-from-bottom-8 duration-700 delay-300 fade-in">
             <button onClick={onOpenBooking} className="bg-white text-salon-dark px-8 py-4 rounded-none hover:bg-neutral-200 transition-all font-bold tracking-widest min-w-[180px]">
                BOOK NOW
            </button>
            <button onClick={onOpenChat} className="border border-white text-white px-8 py-4 rounded-none hover:bg-white/10 transition-all font-bold tracking-widest min-w-[180px] flex items-center justify-center gap-2">
                <Sparkles size={18} />
                AI CONSULTANT
            </button>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 bg-salon-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-serif text-salon-dark mb-4">Our Services</h2>
                <div className="w-20 h-1 bg-salon-gold mx-auto"></div>
                <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">Experice world-class hair care tailored specifically to your unique style and texture.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {SERVICES.map((service) => (
                    <div key={service.id} className="flex justify-between items-start border-b border-neutral-200 pb-6 group hover:border-salon-gold transition-colors">
                        <div>
                            <h3 className="text-xl font-serif text-salon-dark group-hover:text-salon-gold transition-colors">{service.name}</h3>
                            <p className="text-neutral-500 text-sm mt-1">{service.description}</p>
                            <p className="text-neutral-400 text-xs mt-1 uppercase tracking-wider">{service.duration}</p>
                        </div>
                        <span className="text-xl font-medium text-salon-dark">{service.price}</span>
                    </div>
                ))}
            </div>
            <div className="mt-12 text-center">
                <button onClick={onOpenBooking} className="text-salon-dark border-b-2 border-salon-dark pb-1 hover:text-salon-gold hover:border-salon-gold transition-all uppercase tracking-widest text-sm font-bold">
                    View Full Menu
                </button>
            </div>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section id="stylists" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-serif text-salon-dark mb-4">Meet The Artists</h2>
                <div className="w-20 h-1 bg-salon-gold mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                {STYLISTS.map((stylist) => (
                    <Link to={`/stylist/${stylist.id}`} key={stylist.id} className="group cursor-pointer block">
                        <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                            <img 
                                src={stylist.imageUrl} 
                                alt={stylist.name} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <h3 className="text-2xl font-serif text-salon-dark text-center group-hover:text-salon-gold transition-colors">{stylist.name}</h3>
                        <p className="text-salon-gold text-center text-sm uppercase tracking-widest font-medium mb-3">{stylist.role}</p>
                        <p className="text-neutral-500 text-center text-sm px-4 line-clamp-2">{stylist.bio}</p>
                        <div className="mt-4 text-center">
                             <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-salon-dark border-b border-transparent group-hover:border-salon-gold transition-all">View Profile <ArrowRight size={12} className="ml-1"/></span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* --- AI PROMO SECTION --- */}
      <section className="py-20 bg-salon-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
             <Sparkles size={400} />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <Sparkles className="w-12 h-12 text-salon-gold mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Unsure about your next look?</h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
                Our AI Hair Consultant, <strong>Lumi</strong>, analyzes your face shape and preferences to suggest the perfect cut and color before you even step in the chair.
            </p>
            <button 
                onClick={onOpenChat}
                className="bg-salon-gold text-white px-8 py-3 rounded-full hover:bg-yellow-600 transition-colors font-bold shadow-lg inline-flex items-center gap-2"
            >
                Start Consultation <Sparkles size={16} />
            </button>
        </div>
      </section>

      {/* --- GALLERY SECTION --- */}
      <section id="gallery" className="py-24 bg-salon-cream">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <h2 className="text-4xl font-serif text-salon-dark mb-2">Our Portfolio</h2>
                    <p className="text-neutral-500">Explore our latest transformations and signature styles.</p>
                </div>
                <div className="hidden md:block w-32 h-[1px] bg-neutral-300 mb-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
                {GALLERY_ITEMS.map((item) => (
                    <div 
                        key={item.id} 
                        className={`relative group overflow-hidden rounded-lg cursor-pointer ${item.className}`}
                    >
                        <img 
                            src={item.url} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <span className="text-salon-gold text-xs font-bold uppercase tracking-wider mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{item.category}</span>
                            <h3 className="text-white font-serif text-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-12 text-center">
                 <a href="https://unsplash.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-neutral-500 hover:text-salon-gold transition-colors text-sm">
                    <span>View more on Instagram</span>
                    <ArrowRight size={16} />
                 </a>
            </div>
         </div>
      </section>
    </>
  );
};

export default HomePage;