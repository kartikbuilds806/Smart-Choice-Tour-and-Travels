import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="pt-10 pb-20">
      <Helmet>
        <title>About Us | Smart Choice Tour & Travels Haridwar</title>
        <meta name="description" content="Learn about Smart Choice Tour & Travels—our mission, vision, and commitment to safe, affordable travel in Haridwar and beyond." />
      </Helmet>
      
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/40 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">About Us</h1>
          <p className="text-blue-200 uppercase tracking-widest text-sm">Best Travel Agency in Haridwar, Uttarakhand</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-poppins mb-6 text-slate-800">Smart Choice Tour & Travels</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Smart Choice Tour & Travels is a trusted name in the travel industry, dedicated to providing reliable, comfortable, and affordable travel solutions. Founded with a passion for helping people explore the beauty of India, we specialize in comprehensive tour packages and premium taxi services.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Whether you are planning a spiritual journey to the Char Dham, a relaxing weekend getaway, or require prompt airport transfers, we ensure a seamless and unforgettable experience. Our fleet of well-maintained vehicles and experienced drivers guarantee your safety and comfort on every journey.
            </p>
            <p className="text-slate-600 leading-relaxed mt-6">
              Based in Haridwar near the Railway Station, Smart Choice Tour and Travels has been serving pilgrims and tourists for years. We specialize in Char Dham Yatra packages, Kedarnath taxi service, Mussoorie day trips, and corporate travel solutions across Uttarakhand. Our team of trained drivers and travel experts ensures every journey is safe, comfortable, and memorable. We are proud to be one of the most affordable and reliable travel agencies in Haridwar.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl transform translate-x-4 translate-y-4"></div>
            <img src="/images/About/Gemini_Generated_Image_uw1i3nuw1i3nuw1i.png" alt="Travel Landscape" className="rounded-3xl relative z-10 w-full object-cover h-80 shadow-2xl" loading="lazy" width="1200" height="800" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          <div className="glass p-8 rounded-2xl border-t-4 border-t-primary">
            <h3 className="text-2xl font-bold font-poppins mb-4">Our Mission</h3>
            <p className="text-slate-600">To provide high-quality travel services at competitive prices, ensuring complete customer satisfaction. We strive to create lifelong memories for our clients by delivering excellent service with a personal touch.</p>
          </div>
          <div className="glass p-8 rounded-2xl border-t-4 border-t-accent">
            <h3 className="text-2xl font-bold font-poppins mb-4">Our Vision</h3>
            <p className="text-slate-600">To become the leading and most trusted travel agency in Uttarakhand, known for our integrity, innovation, and dedication to the perfect travel experience.</p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center font-poppins mb-12 text-slate-800">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Experienced & Polite Drivers', 'Well Maintained Fleet', '24/7 Customer Support', 'Affordable & Transparent Pricing', 'Customizable Tour Packages', 'Sanitized Vehicles'].map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:border-primary transition-colors">
                <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0" />
                <span className="font-semibold text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
