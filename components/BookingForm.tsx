import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle } from 'lucide-react';
import { Service, Stylist } from '../types';

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
  services: Service[];
  stylists: Stylist[];
  initialStylistId?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ isOpen, onClose, services, stylists, initialStylistId }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceId: '',
    stylistId: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    if (isOpen && initialStylistId) {
        setFormData(prev => ({ ...prev, stylistId: initialStylistId }));
    }
  }, [isOpen, initialStylistId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    // In a real app, this would send data to a backend
    setTimeout(() => {
        setStep(3);
    }, 1500);
  };

  const handleClose = () => {
    setStep(1);
    setFormData({
        serviceId: '',
        stylistId: '',
        date: '',
        time: '',
        name: '',
        email: '',
        phone: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-lg w-full max-w-lg shadow-2xl overflow-hidden relative">
        <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600"
        >
          <X size={24} />
        </button>

        <div className="p-8">
            {step === 1 && (
                <>
                <h2 className="text-3xl font-serif text-salon-dark mb-6 text-center">Request Appointment</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-neutral-700 mb-1">Select Service</label>
                            <select 
                                required
                                className="w-full border-neutral-300 rounded-md border p-2 focus:ring-salon-gold focus:border-salon-gold"
                                value={formData.serviceId}
                                onChange={e => setFormData({...formData, serviceId: e.target.value})}
                            >
                                <option value="">Choose a service...</option>
                                {services.map(s => (
                                    <option key={s.id} value={s.id}>{s.name} - {s.price}</option>
                                ))}
                            </select>
                        </div>

                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-neutral-700 mb-1">Preferred Stylist (Optional)</label>
                            <select 
                                className="w-full border-neutral-300 rounded-md border p-2 focus:ring-salon-gold focus:border-salon-gold"
                                value={formData.stylistId}
                                onChange={e => setFormData({...formData, stylistId: e.target.value})}
                            >
                                <option value="">Any available stylist</option>
                                {stylists.map(s => (
                                    <option key={s.id} value={s.id}>{s.name} ({s.role})</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">Date</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-2.5 text-neutral-400" size={16} />
                                <input 
                                    type="date" 
                                    required
                                    className="w-full pl-10 border-neutral-300 rounded-md border p-2 focus:ring-salon-gold focus:border-salon-gold"
                                    value={formData.date}
                                    onChange={e => setFormData({...formData, date: e.target.value})}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">Time</label>
                            <div className="relative">
                                <Clock className="absolute left-3 top-2.5 text-neutral-400" size={16} />
                                <input 
                                    type="time" 
                                    required
                                    className="w-full pl-10 border-neutral-300 rounded-md border p-2 focus:ring-salon-gold focus:border-salon-gold"
                                    value={formData.time}
                                    onChange={e => setFormData({...formData, time: e.target.value})}
                                />
                            </div>
                        </div>
                        
                        <div className="col-span-2 pt-4 border-t border-neutral-100">
                            <h3 className="text-sm font-semibold text-neutral-900 mb-3">Your Details</h3>
                        </div>

                        <div className="col-span-2">
                            <input 
                                type="text" 
                                placeholder="Full Name"
                                required
                                className="w-full border-neutral-300 rounded-md border p-2 focus:ring-salon-gold focus:border-salon-gold"
                                value={formData.name}
                                onChange={e => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                        <div>
                            <input 
                                type="email" 
                                placeholder="Email"
                                required
                                className="w-full border-neutral-300 rounded-md border p-2 focus:ring-salon-gold focus:border-salon-gold"
                                value={formData.email}
                                onChange={e => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                         <div>
                            <input 
                                type="tel" 
                                placeholder="Phone"
                                required
                                className="w-full border-neutral-300 rounded-md border p-2 focus:ring-salon-gold focus:border-salon-gold"
                                value={formData.phone}
                                onChange={e => setFormData({...formData, phone: e.target.value})}
                            />
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-salon-dark text-white font-medium py-3 rounded-md hover:bg-neutral-800 transition-colors mt-6"
                    >
                        Confirm Booking Request
                    </button>
                </form>
                </>
            )}

            {step === 2 && (
                <div className="flex flex-col items-center justify-center py-12">
                     <div className="w-12 h-12 border-4 border-salon-gold border-t-transparent rounded-full animate-spin mb-4"></div>
                     <p className="text-neutral-600">Processing your request...</p>
                </div>
            )}

            {step === 3 && (
                <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in zoom-in duration-300">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-serif text-salon-dark mb-2">Request Received!</h3>
                    <p className="text-neutral-600 mb-8 max-w-xs mx-auto">
                        Thank you, {formData.name}. We have received your booking request for {formData.date}. We will send a confirmation email to {formData.email} shortly.
                    </p>
                    <button 
                        onClick={handleClose}
                        className="bg-salon-dark text-white px-8 py-3 rounded-md hover:bg-neutral-800 transition-colors"
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default BookingForm;