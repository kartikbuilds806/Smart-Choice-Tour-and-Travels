import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb';

const About = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: 'https://www.thesmartchoicetours.com/about',
    name: 'About Smart Choice Tour and Travels — Haridwar Travel Agency',
    description: 'Smart Choice Tour and Travels is a trusted travel agency in Haridwar, Uttarakhand, offering Char Dham Yatra, Kedarnath tours, Mussoorie packages, and taxi services.',
    mainEntity: {
      '@type': 'TravelAgency',
      name: 'Smart Choice Tour and Travels',
      foundingLocation: 'Haridwar, Uttarakhand, India',
      areaServed: ['Haridwar', 'Rishikesh', 'Dehradun', 'Uttarakhand'],
      knowsAbout: ['Char Dham Yatra', 'Kedarnath Tours', 'Mussoorie Packages', 'Taxi Services Haridwar'],
    },
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="pb-20">
      <Helmet>
        <title>About Us — Smart Choice Tour & Travels | Trusted Travel Agency in Haridwar</title>
        <meta name="description" content="Smart Choice Tour & Travels is a trusted travel agency in Haridwar, Uttarakhand. We offer Char Dham Yatra, Kedarnath tours, Mussoorie trips & affordable taxi services. Located at Bhimgoda, Haridwar." />
        <link rel="canonical" href="https://www.thesmartchoicetours.com/about" />
        <meta property="og:title" content="About Smart Choice Tour & Travels — Haridwar's Trusted Travel Agency" />
        <meta property="og:description" content="Learn about Smart Choice Tour & Travels. Trusted travel agency in Haridwar offering Char Dham Yatra, Kedarnath tours, taxi services & more." />
        <meta property="og:url" content="https://www.thesmartchoicetours.com/about" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'About Us' },
      ]} />

      {/* Header */}
      <div className="bg-slate-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/40 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            About Smart Choice Tour & Travels
          </h1>
          <p className="text-blue-200 uppercase tracking-widest text-sm">
            Trusted Travel Agency in Haridwar, Uttarakhand
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 max-w-5xl">
        {/* Main About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-poppins mb-6 text-slate-800">
              Smart Choice Tour & Travels — Haridwar
            </h2>
            <div className="w-20 h-1 bg-primary mb-6" />
            <p className="text-slate-600 mb-4 leading-relaxed">
              Smart Choice Tour and Travels is a trusted name in the travel industry, dedicated to providing reliable, comfortable, and affordable travel solutions from Haridwar, Uttarakhand. Founded with a passion for helping people explore the spiritual and scenic beauty of India, we specialize in comprehensive <Link to="/packages/char-dham-yatra" className="text-primary hover:underline font-medium">Char Dham Yatra packages</Link>, <Link to="/packages/kedarnath" className="text-primary hover:underline font-medium">Kedarnath tours</Link>, and premium taxi services.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Whether you are planning a sacred pilgrimage to the Char Dham, a relaxing weekend getaway to <Link to="/packages/mussoorie" className="text-primary hover:underline font-medium">Mussoorie</Link> or <Link to="/packages/nainital" className="text-primary hover:underline font-medium">Nainital</Link>, or require airport transfer from Dehradun, we ensure a seamless and unforgettable experience.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We are based in <strong>Bhimgoda, Haridwar</strong> (near Haridwar Railway Station), and have been serving pilgrims and tourists for years. Our team of trained drivers and travel experts ensures every journey is safe, comfortable, and memorable. We are proud to be one of the most affordable and reliable travel agencies in Haridwar, Uttarakhand.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl transform translate-x-4 translate-y-4" />
            <img
              src="/images/About/Gemini_Generated_Image_uw1i3nuw1i3nuw1i.png"
              alt="Smart Choice Tour & Travels — Travel agency based in Haridwar, Uttarakhand"
              className="rounded-3xl relative z-10 w-full object-cover h-80 shadow-2xl"
              loading="lazy"
              width="800"
              height="600"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          <div className="glass p-8 rounded-2xl border-t-4 border-t-primary">
            <h3 className="text-2xl font-bold font-poppins mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">To provide high-quality travel services at competitive prices, ensuring complete customer satisfaction. We strive to create lifelong memories for our clients by delivering excellent service with a personal touch — from Haridwar to every corner of Uttarakhand and India.</p>
          </div>
          <div className="glass p-8 rounded-2xl border-t-4 border-t-accent">
            <h3 className="text-2xl font-bold font-poppins mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">To become the leading and most trusted travel agency in Uttarakhand, known for our integrity, innovation, and dedication to the perfect travel experience — for every pilgrim, tourist, and family who chooses us.</p>
          </div>
        </div>

        {/* Google Reviews summary */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 border border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 font-poppins mb-2">What Customers Say</h2>
              <div className="flex items-center space-x-2 mb-3">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-yellow-400" />)}
                <span className="font-bold text-slate-800 ml-1">4.9 / 5</span>
                <span className="text-slate-500 text-sm">· 7 Google Reviews</span>
              </div>
              <blockquote className="text-slate-600 italic text-sm max-w-xl">
                "It was a great experience with this travel company. Prince (Driver) was also polite with us. His driving skills are fantastic on dangerous mountain roads. The car was comfortable and I am very satisfied." — <strong>Shalu Singh, Delhi</strong>
              </blockquote>
            </div>
            <div className="flex flex-col space-y-3 min-w-max">
              <a href="https://wa.me/918273490102?text=Hello%20I%20want%20to%20book%20a%20tour" target="_blank" rel="noreferrer" className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors">
                <FaWhatsapp /> <span>Book on WhatsApp</span>
              </a>
              <a href="tel:+918273490102" className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors">
                <FaPhoneAlt size={14} /> <span>+91 8273490102</span>
              </a>
            </div>
          </div>
        </div>

        {/* Office Location */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-start space-x-3">
            <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" size={20} />
            <div>
              <h3 className="font-bold text-slate-800 mb-1">Our Office Location</h3>
              <p className="text-slate-600">Bhimgoda, Opposite Railway Station, Haridwar, Uttarakhand — 249401</p>
              <p className="text-slate-500 text-sm mt-1">Open 7 days a week · 8:00 AM – 9:00 PM</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center font-poppins mb-12 text-slate-800">Why Choose Smart Choice Tours?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Experienced & Polite Drivers',
              'Well Maintained AC Fleet',
              '24/7 Customer Support',
              'Affordable & Transparent Pricing',
              'Customizable Tour Packages',
              'Sanitized & GPS-Tracked Vehicles',
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:border-primary transition-colors">
                <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0" />
                <span className="font-semibold text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Internal Links */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-4">Explore our <Link to="/services" className="text-primary font-medium hover:underline">tour packages</Link>, view our <Link to="/cars" className="text-primary font-medium hover:underline">vehicle fleet</Link>, or <Link to="/contact" className="text-primary font-medium hover:underline">contact us</Link> for a free quote.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
