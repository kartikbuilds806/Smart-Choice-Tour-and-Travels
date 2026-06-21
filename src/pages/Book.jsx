import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaCalendarAlt, FaMapMarkerAlt, FaCarSide, FaUsers, FaEnvelope, FaCommentAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

// Input sanitization helper to strip/encode HTML tags
const sanitizeInput = (str) => {
  if (typeof str !== 'string') return '';
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickup: '',
    destination: '',
    date: '',
    people: '',
    vehicle: 'Sedan (Swift Dzire / Similar)',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear field-specific error on change
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const nameMessageRegex = /[<>{}]/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.';
    } else if (formData.name.length > 200) {
      newErrors.name = 'Full Name cannot exceed 200 characters.';
    } else if (nameMessageRegex.test(formData.name)) {
      newErrors.name = 'Full Name cannot contain <, >, {, or } characters.';
    }

    // Phone Validation
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (cleanPhone.length !== 10) {
      newErrors.phone = 'Phone number must be exactly 10 digits.';
    }

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Pickup Validation
    if (!formData.pickup.trim()) {
      newErrors.pickup = 'Pickup Location is required.';
    } else if (formData.pickup.length > 200) {
      newErrors.pickup = 'Pickup Location cannot exceed 200 characters.';
    } else if (nameMessageRegex.test(formData.pickup)) {
      newErrors.pickup = 'Pickup Location cannot contain <, >, {, or } characters.';
    }

    // Destination Validation
    if (!formData.destination.trim()) {
      newErrors.destination = 'Destination is required.';
    } else if (formData.destination.length > 200) {
      newErrors.destination = 'Destination cannot exceed 200 characters.';
    } else if (nameMessageRegex.test(formData.destination)) {
      newErrors.destination = 'Destination cannot contain <, >, {, or } characters.';
    }

    // Date Validation
    if (!formData.date) {
      newErrors.date = 'Journey Date is required.';
    }

    // People Validation
    if (!formData.people || parseInt(formData.people, 10) < 1) {
      newErrors.people = 'Number of people must be at least 1.';
    }

    // Message/Inquiry Validation
    if (formData.message.length > 200) {
      newErrors.message = 'Message/Instructions cannot exceed 200 characters.';
    } else if (nameMessageRegex.test(formData.message)) {
      newErrors.message = 'Message/Instructions cannot contain <, >, {, or } characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBooking = (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Apply sanitization to all form fields before processing
    const name = sanitizeInput(formData.name.trim());
    const phone = sanitizeInput(formData.phone.replace(/\D/g, ''));
    const email = sanitizeInput(formData.email.trim());
    const pickup = sanitizeInput(formData.pickup.trim());
    const destination = sanitizeInput(formData.destination.trim());
    const date = sanitizeInput(formData.date);
    const people = sanitizeInput(formData.people.toString());
    const vehicle = sanitizeInput(formData.vehicle);
    const messageContent = sanitizeInput(formData.message.trim());

    // Construct WhatsApp message
    const msg = `Hello, I want to book a trip:
Name: ${name}
Phone: ${phone}
Email: ${email}
Pickup: ${pickup}
Destination: ${destination}
Date: ${date}
People: ${people}
Vehicle: ${vehicle}${messageContent ? `\nMessage: ${messageContent}` : ''}`;

    const encodedMessage = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/918273490102?text=${encodedMessage}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');

    // Re-enable form after redirection
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="pb-20">
      <Helmet>
        <title>Book Tour Package | Smart Choice Tour & Travels Haridwar</title>
        <meta name="description" content="Plan and book your next trip with Smart Choice Tour & Travels—fill the booking form and contact us via WhatsApp." />
        <link rel="canonical" href="https://www.thesmartchoicetours.com/book" />
      </Helmet>
      
      <div className="bg-slate-900 text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/40 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Book A Service</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 max-w-4xl">
        <div className="glass p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-t-primary bg-white">
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
                  className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone / WhatsApp Number *</label>
                <input
                  type="tel" required name="phone"
                  value={formData.phone} onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                  placeholder="9876543210 (10 digits)"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center"><FaEnvelope className="mr-2 text-primary" /> Email Address *</label>
                <input
                  type="email" required name="email"
                  value={formData.email} onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center"><FaCalendarAlt className="mr-2 text-primary" /> Journey Date *</label>
                <input
                  type="date" required name="date"
                  value={formData.date} onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.date ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                />
                {errors.date && <p className="text-red-500 text-xs mt-1 font-medium">{errors.date}</p>}
              </div>

              {/* Pickup Location */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center"><FaMapMarkerAlt className="mr-2 text-primary" /> Pickup Location *</label>
                <input
                  type="text" required name="pickup"
                  value={formData.pickup} onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.pickup ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                  placeholder="e.g. Haridwar Railway Station"
                />
                {errors.pickup && <p className="text-red-500 text-xs mt-1 font-medium">{errors.pickup}</p>}
              </div>

              {/* Destination */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center"><FaMapMarkerAlt className="mr-2 text-accent" /> Destination *</label>
                <input
                  type="text" required name="destination"
                  value={formData.destination} onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.destination ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                  placeholder="e.g. Kedarnath"
                />
                {errors.destination && <p className="text-red-500 text-xs mt-1 font-medium">{errors.destination}</p>}
              </div>

              {/* People */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center"><FaUsers className="mr-2 text-primary" /> Number of People *</label>
                <input
                  type="number" min="1" required name="people"
                  value={formData.people} onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.people ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                  placeholder="e.g. 4"
                />
                {errors.people && <p className="text-red-500 text-xs mt-1 font-medium">{errors.people}</p>}
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

            </div>

            {/* Message / Special Instructions */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center"><FaCommentAlt className="mr-2 text-primary" /> Message / Special Instructions</label>
              <textarea
                name="message" rows="3"
                value={formData.message} onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                placeholder="Any special requests or details about your journey..."
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 text-white font-bold rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center justify-center space-x-3 ${isSubmitting ? 'bg-slate-400 cursor-not-allowed transform-none' : 'bg-green-500 hover:bg-green-600'}`}
              >
                <FaWhatsapp size={24} />
                <span>{isSubmitting ? 'Processing Submission...' : 'Submit & Complete via WhatsApp'}</span>
              </button>
            </div>
            
            <p className="text-center text-xs text-slate-400 mt-4">
              Clicking submit will validate input, sanitize data, and redirect you to WhatsApp.
            </p>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Book;
