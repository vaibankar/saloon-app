import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Twitter, MapPin, Phone, Mail, Scissors, Clock, Sparkles } from 'lucide-react';
import AIConsultant from './components/AIConsultant';
import BookingForm from './components/BookingForm';
import HomePage from './components/HomePage';
import StylistProfile from './components/StylistProfile';
import { SERVICES, STYLISTS } from './data';

const AppContent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingStylistId, setBookingStylistId] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  // Handle Scroll Navbar Effect (Only relevant on Home Page for transparency)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleChat = () => setIsChatOpen(!isChatOpen);
  
  const handleOpenBooking = (stylistId?: string) => {
      setBookingStylistId(stylistId || '');
      setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
      setIsBookingOpen(false);
      setBookingStylistId('');
  }

  // Navbar background logic
  const navbarClass = isHomePage 
    ? (scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 text-salon-dark' : 'bg-transparent py-6 text-white/90') 
    : 'bg-white shadow-sm py-4 text-salon-dark';
  
  const logoClass = isHomePage
    ? (scrolled ? 'border-salon-dark text-salon-dark' : 'border-white text-white')
    : 'border-salon-dark text-salon-dark';

  const logoTextClass = isHomePage
    ? (scrolled ? 'text-salon-dark' : 'text-white')
    : 'text-salon-dark';

  return (
    <div className="relative min-h-screen flex flex-col">
      
      {/* --- HEADER --- */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${navbarClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className={`border-2 p-1 ${logoClass}`}>
                <Scissors size={20} />
            </div>
            <span className={`text-2xl font-serif font-bold tracking-widest ${logoTextClass}`}>
              DOESNTMATTER
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {isHomePage ? (
                <>
                    <a href="#home" className="hover:text-salon-gold transition-colors text-sm uppercase tracking-wider font-medium">Home</a>
                    <a href="#services" className="hover:text-salon-gold transition-colors text-sm uppercase tracking-wider font-medium">Services</a>
                    <a href="#stylists" className="hover:text-salon-gold transition-colors text-sm uppercase tracking-wider font-medium">Team</a>
                    <a href="#gallery" className="hover:text-salon-gold transition-colors text-sm uppercase tracking-wider font-medium">Gallery</a>
                </>
            ) : (
                 <Link to="/" className="hover:text-salon-gold transition-colors text-sm uppercase tracking-wider font-medium">Home</Link>
            )}
            
            <button onClick={() => handleOpenBooking()} className="bg-salon-gold text-white px-5 py-2 rounded-full hover:bg-yellow-600 transition-colors text-sm font-bold uppercase tracking-wider shadow-md">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4 text-salon-dark border-t border-neutral-100">
             <Link to="/" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
            {isHomePage && (
                <>
                <a href="#services" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="#stylists" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Team</a>
                <a href="#gallery" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Gallery</a>
                </>
            )}
            <button onClick={() => {handleOpenBooking(); setIsMenuOpen(false)}} className="bg-salon-dark text-white px-8 py-3 rounded-full">
                Book Now
            </button>
          </div>
        )}
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow">
        <Routes>
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} onOpenChat={toggleChat} />} />
            <Route path="/stylist/:id" element={<StylistProfile onOpenBooking={handleOpenBooking} />} />
        </Routes>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-salon-dark text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-2">
                     <div className="flex items-center gap-2 mb-6">
                        <div className="border border-white p-1">
                            <Scissors size={16} />
                        </div>
                        <span className="text-xl font-serif font-bold tracking-widest">
                        DOESNTMATTER
                        </span>
                    </div>
                    <p className="text-neutral-400 mb-6 max-w-sm">
                        Experience the art of hair. We combine modern techniques with classic elegance to create a style that is uniquely yours.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-salon-gold hover:border-salon-gold transition-colors">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-salon-gold hover:border-salon-gold transition-colors">
                            <Facebook size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-salon-gold hover:border-salon-gold transition-colors">
                            <Twitter size={18} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-serif mb-6">Contact</h4>
                    <ul className="space-y-4 text-neutral-400 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="mt-0.5 text-salon-gold" />
                            <span>123 Fashion Avenue,<br/>New York, NY 10012</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="text-salon-gold" />
                            <span>+1 (555) 123-4567</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="text-salon-gold" />
                            <span>hello@doesntmatter.salon</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-serif mb-6 flex items-center gap-2">
                        <Clock size={18} className="text-salon-gold" /> Hours
                    </h4>
                    <ul className="space-y-2 text-neutral-400 text-sm">
                        <li className="flex justify-between border-b border-neutral-800 pb-2">
                            <span>Monday - Friday</span>
                            <span>9:00 AM - 8:00 PM</span>
                        </li>
                        <li className="flex justify-between border-b border-neutral-800 pb-2">
                            <span>Saturday</span>
                            <span>9:00 AM - 6:00 PM</span>
                        </li>
                        <li className="flex justify-between pt-1">
                            <span>Sunday</span>
                            <span className="text-salon-gold">Closed</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-xs">
                <p>&copy; 2024 DoesntMatter Salon & Spa. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
      </footer>

      {/* --- FLOATING CHAT BUTTON (If closed) --- */}
      {!isChatOpen && (
        <button 
            onClick={toggleChat}
            className="fixed bottom-8 right-8 z-40 bg-salon-gold hover:bg-yellow-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110"
        >
            <Sparkles className="w-6 h-6" />
        </button>
      )}

      {/* --- OVERLAYS --- */}
      <AIConsultant isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      <BookingForm 
        isOpen={isBookingOpen} 
        onClose={handleCloseBooking} 
        services={SERVICES}
        stylists={STYLISTS}
        initialStylistId={bookingStylistId}
      />
    </div>
  );
}

const App: React.FC = () => {
  return (
    <HashRouter>
        <AppContent />
    </HashRouter>
  );
};

export default App;