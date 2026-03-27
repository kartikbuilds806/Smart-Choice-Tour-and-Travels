import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaCalendarAlt, FaMapMarkerAlt, FaCarSide, FaUsers } from 'react-icons/fa';

const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    destination: '',
    date: '',
    people: '',
    vehicle: 'Sedan (Swift Dzire / Similar)'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `Hello, I want to book a trip:
Name: ${formData.name}
Phone: ${formData.phone}
Pickup: ${formData.pickup}
Destination: ${formData.destination}
Date: ${formData.date}
People: ${formData.people}
Vehicle: ${formData.vehicle}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918273490102?text=${encodedMessage}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="pb-20">
      
      <div className="bg-slate-900 text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/40 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Book A Service</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 max-w-4xl">
        <div className="glass p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-t-primary">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 font-poppins">Plan Your Journey</h2>
            <p className="text-slate-500 mt-2">Fill the form below and we will get back to you immediately via WhatsApp.</p>
          </div>

          <form onSubmit={handleBooking} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                <input
                  type="text" required name="name"
                  value={formData.name} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone / WhatsApp Number *</label>
                <input
                  type="tel" required name="phone"
                  value={formData.phone} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="+91 9876543210"
                />
              </div>

              {/* Pickup Location */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center"><FaMapMarkerAlt className="mr-2 text-primary" /> Pickup Location *</label>
                <input
                  type="text" required name="pickup"
                  value={formData.pickup} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="e.g. Haridwar Railway Station"
                />
              </div>

              {/* Destination */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center"><FaMapMarkerAlt className="mr-2 text-accent" /> Destination *</label>
                <input
                  type="text" required name="destination"
                  value={formData.destination} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="e.g. Kedarnath"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center"><FaCalendarAlt className="mr-2 text-primary" /> Journey Date *</label>
                <input
                  type="date" required name="date"
                  value={formData.date} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              {/* People */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center"><FaUsers className="mr-2 text-primary" /> Number of People *</label>
                <input
                  type="number" min="1" required name="people"
                  value={formData.people} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="e.g. 4"
                />
              </div>

            </div>

            {/* Vehicle Selection */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center"><FaCarSide className="mr-2 text-primary" /> Preferred Vehicle *</label>
              <select
                name="vehicle" required
                value={formData.vehicle} onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
              >
                <option value="Sedan (Swift Dzire / Similar)">Sedan (Swift Dzire / Similar)</option>
                <option value="SUV (Ertiga / Similar)">SUV (Ertiga / Similar)</option>
                <option value="Premium SUV (Innova Crysta)">Premium SUV (Innova Crysta / Innova)</option>
                <option value="Tempo Traveller (12/16 Seater)">Tempo Traveller (12/16 Seater)</option>
                <option value="Not Sure - Suggest Me">Not Sure - Suggest Me</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center justify-center space-x-3"
              >
                <FaWhatsapp size={24} />
                <span>Submit & Complete via WhatsApp</span>
              </button>
            </div>
            
            <p className="text-center text-xs text-slate-400 mt-4">
              Clicking submit will redirect you to WhatsApp with a pre-filled message using your details.
            </p>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Book;
