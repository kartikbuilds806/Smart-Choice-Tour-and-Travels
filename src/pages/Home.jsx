import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaPhoneAlt, FaWhatsapp, FaStar, FaQuoteLeft, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import FAQSection from '../components/FAQSection';
import TrustBadges from '../components/TrustBadges';

const heroImages = [
  '/images/Home%20page/haridwar.webp',
  '/images/Home%20page/Mussorie.webp',
  '/images/Home%20page/Nainital.webp',
  '/images/Home%20page/Kedarnath-Temple.webp'
];

const destinations = [
  { city: 'Haridwar', img: '/images/Popular Destination/haridwar.webp', link: '/packages/haridwar-sightseeing', desc: 'Ganga Aarti & Temples' },
  { city: 'Rishikesh', img: '/images/Popular Destination/Rishikesh.webp', link: '/packages/rishikesh', desc: 'Adventure & Spirituality' },
  { city: 'Kedarnath', img: '/images/Popular Destination/Kedarnath-Temple.webp', link: '/packages/kedarnath', desc: 'Sacred Jyotirlinga' },
  { city: 'Badrinath', img: '/images/Popular Destination/badrinath.webp', link: '/packages/badrinath', desc: 'Char Dham Shrine' },
  { city: 'Mussoorie', img: '/images/Popular Destination/Mussorie.webp', link: '/packages/mussoorie', desc: 'Queen of the Hills' },
  { city: 'Nainital', img: '/images/Popular Destination/Nainital.webp', link: '/packages/nainital', desc: 'Lake City Escape' },
];

const reviews = [
  {
    name: 'Gordhan Rawat',
    role: 'Local Guide • Uttarakhand',
    rating: 5,
    text: 'Had an amazing experience with Smart Choice Tour & Travels! Everything was perfectly managed from start to finish. The vehicle was clean and comfortable, the driver was professional and friendly, and the whole trip was smooth and enjoyable. Highly recommended for Chardham Yatra and Uttarakhand tours.',
  },
  {
    name: 'Shalu Singh',
    role: 'Traveler from Delhi',
    rating: 5,
    text: 'It was a great experience with this travel company. Prince (Driver) was also polite with us. His driving skills are fantastic — I never knew itne dangerous roads par itni sharpness se driving koi kar sakta hai! He gave a lot of time to visit each site. The car was also very comfortable. I am very satisfied and will always book with Smart Choice Tours.',
  },
  {
    name: 'Priyanshu Kashyap',
    role: 'Family Traveler',
    rating: 5,
    text: 'Excellent service by Smart Choice Tour & Travels! The entire trip was well organized and stress-free. The vehicle was neat & comfortable, hotels were good, and the driver was very cooperative throughout the journey. Truly a trustworthy travel company for family trips and Chardham Yatra. Will definitely travel again!',
  },
  {
    name: 'Mahak Mahak',
    role: 'Verified Customer',
    rating: 5,
    text: 'Traveling with Smart Choice Tour & Travels was one of the best decisions for our trip! From comfortable hotels to timely travel arrangements, everything was handled professionally. The staff was polite, supportive, and always available whenever needed. If you are planning a Uttarakhand or Chardham trip, I highly recommend them!',
  },
  {
    name: 'Sikandar Mohan',
    role: 'Repeat Customer',
    rating: 5,
    text: 'Prince is the best human being I have seen — such a helpful person, always available like a family member. He is active and tackles every situation perfectly. For future trips I will always go with Prince and Smart Choice Tours. Once again, he is superb. Thanks!',
  },
];

const popularPackages = [
  { name: 'Char Dham Yatra', link: '/packages/char-dham-yatra', img: '/images/Popular Destination/Kedarnath-Temple.webp', duration: '12 Days', price: '₹15,000+' },
  { name: 'Kedarnath Tour', link: '/packages/kedarnath', img: '/images/Popular Destination/Kedarnath-Temple.webp', duration: '4 Days', price: '₹5,500+' },
  { name: 'Mussoorie Trip', link: '/packages/mussoorie', img: '/images/Popular Destination/Mussorie.webp', duration: '3 Days', price: '₹2,500+' },
  { name: 'Nainital Package', link: '/packages/nainital', img: '/images/Popular Destination/Nainital.webp', duration: '3 Days', price: '₹3,500+' },
];

const homeFaqs = [
  {
    question: 'Which is the best travel agency in Haridwar?',
    answer: 'Smart Choice Tour and Travels, located opposite Haridwar Railway Station in Bhimgoda, Haridwar, is one of the most trusted travel agencies in Haridwar. We specialize in Char Dham Yatra packages, Kedarnath tours, Mussoorie trips, and taxi services across Uttarakhand. Call +91 8273490102 to book.',
  },
  {
    question: 'How do I book a Char Dham Yatra package from Haridwar?',
    answer: 'You can book a Char Dham Yatra package from Haridwar by calling us at +91 8273490102, messaging us on WhatsApp, or filling our online booking form. We offer flexible itineraries starting from ₹15,000 per person depending on group size and vehicle preference.',
  },
  {
    question: 'What is the cost of a Kedarnath tour package from Haridwar?',
    answer: 'A Kedarnath tour package from Haridwar (3 nights/4 days) starts from ₹5,500 per person for a group of 4 people. The cost varies based on vehicle type (Dzire, Innova, Tempo Traveller), number of people, and whether you want helicopter service for Kedarnath.',
  },
  {
    question: 'Do you provide airport transfer from Dehradun Jolly Grant Airport?',
    answer: 'Yes, Smart Choice Tour and Travels provides reliable airport transfer service from Jolly Grant Airport (Dehradun) to Haridwar, Rishikesh, and any destination in Uttarakhand. Available 24/7 with advance booking. Call +91 8273490102 for fixed-rate quotes.',
  },
  {
    question: 'Are your tour packages customizable?',
    answer: 'Absolutely! All our tour packages are fully customizable. You can choose your preferred dates, add or remove destinations, select your vehicle type, and adjust the itinerary based on your group size and budget. Contact us on WhatsApp for a free custom itinerary.',
  },
  {
    question: 'Is Smart Choice Tour & Travels available for night travel or emergencies?',
    answer: 'We are available 7 days a week from 8 AM to 9 PM. For Char Dham and long-distance tours, our drivers are available for early morning departures (typically 5-6 AM). Contact us on WhatsApp for immediate assistance.',
  },
];

// Counter component
const Counter = ({ end, label, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { clearInterval(timer); setCount(end); }
      else { setCount(Math.ceil(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-4xl md:text-5xl font-bold text-gradient mb-2">{count}{suffix}</h3>
      <p className="text-slate-600 font-medium">{label}</p>
    </div>
  );
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slideTimer);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Helmet>
        <title>Best Travel Agency in Haridwar | Smart Choice Tour & Travels</title>
        <meta name="description" content="Best travel agency in Haridwar, Uttarakhand. Book Char Dham Yatra, Kedarnath, Mussoorie & Nainital tour packages & taxi services. Call +91 8273490102." />
        <link rel="canonical" href="https://www.thesmartchoicetours.com/" />
        <meta property="og:title" content="Best Travel Agency in Haridwar | Smart Choice Tour & Travels" />
        <meta property="og:description" content="Best travel agency in Haridwar, Uttarakhand. Book Char Dham Yatra, Kedarnath, Mussoorie & Nainital tour packages & taxi services. Call +91 8273490102." />
        <meta property="og:url" content="https://www.thesmartchoicetours.com/" />
      </Helmet>

      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" aria-label="Hero section">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={heroImages[currentSlide]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover z-0"
            alt={currentSlide === 0 ? 'Ganga Aarti at Har Ki Pauri, Haridwar' : currentSlide === 1 ? 'Mussoorie hill station view, Uttarakhand' : currentSlide === 2 ? 'Nainital lake view, Uttarakhand' : 'Kedarnath Temple, Uttarakhand'}
            loading={currentSlide === 0 ? 'eager' : 'lazy'}
            fetchPriority={currentSlide === 0 ? 'high' : 'auto'}
            width="1920"
            height="1080"
            decoding="async"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="glass-dark p-8 md:p-12 rounded-3xl"
          >
            {/* PRIMARY H1 — SEO Optimized */}
            <h1 className="text-3xl md:text-5xl font-bold font-poppins mb-4 leading-tight text-white">
              Best Travel Agency in <span className="text-accent">Haridwar</span><br />
              for Char Dham & Tour Packages
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-3 font-light">
              Affordable Tour Packages · Taxi Services · Char Dham Yatra from Haridwar, Uttarakhand
            </p>
            <div className="flex items-center justify-center space-x-1 mb-8">
              {[...Array(5)].map((_, i) => <FaStar key={i} className="text-yellow-400" size={16} />)}
              <span className="text-slate-200 text-sm ml-2">4.9★ Rated by Our Customers</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://wa.me/918273490102?text=Hello%20I%20want%20to%20book%20a%20tour%20package"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold flex items-center transition-all shadow-lg hover:-translate-y-1 w-full sm:w-auto justify-center"
                onClick={() => typeof gtag !== 'undefined' && gtag('event', 'whatsapp_click', { event_category: 'Contact', event_label: 'hero_cta' })}
              >
                <FaWhatsapp className="mr-2" size={20} /> Get Free Quote on WhatsApp
              </a>
              <a
                href="tel:+918273490102"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold flex items-center transition-all shadow-lg hover:-translate-y-1 w-full sm:w-auto justify-center"
                onClick={() => typeof gtag !== 'undefined' && gtag('event', 'phone_click', { event_category: 'Contact', event_label: 'hero_cta' })}
              >
                <FaPhoneAlt className="mr-2" /> Call +91 8273490102
              </a>
            </div>
          </motion.div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-all ${currentSlide === i ? 'bg-white w-6' : 'bg-white/50'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ===== TRUST BADGES ===== */}
      <TrustBadges />

      {/* ===== STATS SECTION ===== */}
      <section className="py-16 bg-white" aria-label="Company statistics">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <Counter end={500} label="Happy Customers" />
            <Counter end={7} label="Years of Experience" />
            <Counter end={50} label="Destinations Covered" />
          </div>
        </div>
      </section>

      {/* ===== POPULAR TOUR PACKAGES ===== */}
      <section className="py-20 bg-slate-50" aria-label="Popular tour packages">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Our Packages</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-poppins mb-4">
              Popular Tour Packages from Haridwar
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              Customized itineraries for pilgrimages, hill stations, and family vacations across Uttarakhand
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularPackages.map((pkg, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={pkg.img}
                    alt={`${pkg.name} from Haridwar`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    width="400"
                    height="300"
                    decoding="async"
                  />
                  <div className="absolute top-3 right-3 bg-accent text-slate-900 text-xs font-bold px-2 py-1 rounded-full">
                    {pkg.duration}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-800 text-lg mb-1">{pkg.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-4">Starting {pkg.price} / person</p>
                  <Link
                    to={pkg.link}
                    className="block text-center bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-sm"
                    onClick={() => typeof gtag !== 'undefined' && gtag('event', 'package_view', { event_label: pkg.name })}
                  >
                    View Package
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              <span>View All Packages</span>
              <FaArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-20 bg-white" aria-label="Travel services">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-poppins mb-4">Our Travel Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Local Sightseeing', img: '/images/Our Services/sightseeing.jpg', desc: 'Explore Haridwar and Rishikesh with our guided local tours starting ₹800.', link: '/packages/haridwar-sightseeing' },
              { title: 'Char Dham Yatra', img: '/images/Our Services/char-dham yatra.jpg', desc: 'Complete 12-day Char Dham Yatra package from Haridwar with AC vehicle.', link: '/packages/char-dham-yatra' },
              { title: 'Group Booking', img: '/images/Our Services/grouup booking.jpeg', desc: 'Economical group tours for 10-50 people. Special rates on Tempo Traveller.', link: '/services' },
              { title: 'Family Tours', img: '/images/Our Services/family tour.jpg', desc: 'Safe family tour packages to Mussoorie, Nainital, Shimla with child-friendly itineraries.', link: '/packages/mussoorie' },
              { title: 'Airport Transfer', img: '/images/Our Services/Airport transfer.jpg', desc: 'Reliable airport pickup from Jolly Grant (Dehradun) & Delhi IGI. Fixed rates.', link: '/services' },
              { title: 'Outstation Taxi', img: '/images/Our Services/affordable taxi.png', desc: 'Affordable outstation taxi from Haridwar to any destination. No hidden charges.', link: '/cars' },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col items-center group"
              >
                <div className="w-full h-48 overflow-hidden relative">
                  <img
                    src={service.img}
                    alt={`${service.title} service in Haridwar — Smart Choice Tours`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    width="600"
                    height="400"
                    decoding="async"
                  />
                </div>
                <div className="p-6 flex flex-col items-center flex-grow text-center">
                  <h3 className="text-xl font-semibold mb-3 text-slate-800">{service.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow">{service.desc}</p>
                  <Link to={service.link} className="text-primary font-medium hover:text-accent transition-colors uppercase tracking-wider text-sm flex items-center">
                    Explore {service.title} <FaArrowRight className="ml-1" size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SEO TEXT SECTION ===== */}
      <section className="py-12 bg-slate-50" aria-label="About Smart Choice Tours">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 font-poppins mb-6">
              Why Choose Smart Choice Tour & Travels in Haridwar?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Smart Choice Tour and Travels is Haridwar's most trusted travel agency, located at Bhimgoda, opposite Haridwar Railway Station. We specialize in <Link to="/packages/char-dham-yatra" className="text-primary font-medium hover:underline">Char Dham Yatra packages</Link>, <Link to="/packages/kedarnath" className="text-primary font-medium hover:underline">Kedarnath tours</Link>, <Link to="/packages/mussoorie" className="text-primary font-medium hover:underline">Mussoorie day trips</Link>, and affordable taxi services across Uttarakhand.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our experienced drivers, well-maintained AC vehicles (Innova Crysta, Swift Dzire, Tempo Traveller), and transparent pricing make us the first choice for pilgrims and tourists from Delhi, Dehradun, Rishikesh, and across India. We serve over 500 happy customers every year. <Link to="/about" className="text-primary font-medium hover:underline">Learn more about us</Link> or <Link to="/book" className="text-primary font-medium hover:underline">book your tour</Link> today.
            </p>
          </div>
        </div>
      </section>

      {/* ===== POPULAR DESTINATIONS ===== */}
      <section className="py-20 bg-white" aria-label="Popular travel destinations">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Top Destinations</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-poppins mb-4">
              Popular Destinations in Uttarakhand
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map(({ city, img, link, desc }, idx) => (
              <Link to={link} key={city}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative h-64 rounded-2xl overflow-hidden group shadow-lg cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`${city} tour package from Haridwar — Smart Choice Tours`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width="600"
                    height="400"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-start justify-end p-6">
                    <h3 className="text-2xl font-bold text-white tracking-wide">{city}</h3>
                    <p className="text-slate-300 text-sm flex items-center mt-1">
                      <FaMapMarkerAlt className="mr-1" size={12} /> {desc}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FLEET SECTION ===== */}
      <section className="py-20 bg-slate-900 text-white" aria-label="Our vehicle fleet">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">Our Vehicles</p>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Our Premium Fleet</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
            <p className="text-slate-400 mt-4">Well-maintained, GPS-tracked, sanitized AC vehicles</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Innova Crysta', img: '/images/Our Premium fleet/Toyata crysta.jpg', capacity: '6+1 Seater', tag: 'Most Popular' },
              { name: 'Swift Dzire', img: '/images/Our Premium fleet/Dzire.webp', capacity: '4+1 Seater', tag: 'Budget Friendly' },
              { name: 'Tempo Traveller', img: '/images/Our Premium fleet/tempo-traveler.jpg', capacity: '12/16 Seater', tag: 'Group Tours' },
            ].map((car, idx) => (
              <div key={idx} className="bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 group">
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={car.img}
                    alt={`${car.name} taxi available for hire from Haridwar`}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                    loading="lazy"
                    width="600"
                    height="400"
                    decoding="async"
                  />
                  <span className="absolute top-3 left-3 bg-accent text-slate-900 text-xs font-bold px-2 py-1 rounded-full">{car.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{car.name}</h3>
                  <p className="text-slate-400 text-sm mb-2">{car.capacity} · AC / Heater · GPS Tracked</p>
                  <div className="flex justify-between items-center mb-5 text-sm text-slate-400">
                    <span>Fully Sanitized</span>
                    <span>Experienced Driver</span>
                  </div>
                  <a
                    href={`https://wa.me/918273490102?text=Hello%20I%20want%20to%20book%20the%20${encodeURIComponent(car.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-center bg-accent text-slate-900 font-semibold py-3 rounded-full hover:bg-yellow-500 transition-colors"
                    onClick={() => typeof gtag !== 'undefined' && gtag('event', 'whatsapp_click', { event_category: 'Contact', event_label: `book_${car.name}` })}
                  >
                    Book {car.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/cars" className="inline-block border-2 border-accent text-accent hover:bg-accent hover:text-slate-900 px-8 py-3 rounded-full font-semibold transition-colors">
              View All Vehicles & Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ===== REAL TESTIMONIALS ===== */}
      <section className="py-20 bg-white" aria-label="Customer reviews and testimonials">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Real Reviews</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-poppins mb-4">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-slate-500 mt-4">Genuine Google reviews from our happy travelers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.slice(0, 3).map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 rounded-2xl relative border border-slate-100 shadow-md"
              >
                <FaQuoteLeft className="text-4xl text-blue-100 absolute top-4 right-4" />
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => <FaStar key={i} size={14} />)}
                </div>
                <p className="text-slate-600 mb-6 italic text-sm leading-relaxed">"{review.text}"</p>
                <div>
                  <p className="font-bold text-slate-800">{review.name}</p>
                  <p className="text-xs text-slate-500">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://g.page/r/CS1R8BXsmQKbEAE/review"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 text-primary font-semibold hover:underline"
            >
              <FaStar className="text-yellow-400" />
              <span>Read All Reviews on Google</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <FAQSection
        faqs={homeFaqs}
        title="Frequently Asked Questions About Our Travel Services"
      />

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 relative overflow-hidden" aria-label="Book your tour">
        <div className="absolute inset-0 bg-blue-700 z-0" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-poppins mb-4">
            Plan Your Uttarakhand Trip Today!
          </h2>
          <p className="text-blue-100 md:text-xl mb-4 max-w-2xl mx-auto">
            Get the best deals on Char Dham Yatra, Kedarnath tours, Mussoorie packages & taxi services. Free itinerary consultation.
          </p>
          <p className="text-blue-200 text-sm mb-10">
            <FaMapMarkerAlt className="inline mr-1" />
            Smart Choice Tour & Travels — Bhimgoda, Haridwar, Uttarakhand
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://wa.me/918273490102?text=Hello%20I%20want%20to%20plan%20a%20trip"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
              onClick={() => typeof gtag !== 'undefined' && gtag('event', 'whatsapp_click', { event_category: 'Contact', event_label: 'cta_bottom' })}
            >
              <FaWhatsapp size={24} />
              <span>Chat on WhatsApp</span>
            </a>
            <Link
              to="/book"
              className="inline-flex items-center space-x-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
              onClick={() => typeof gtag !== 'undefined' && gtag('event', 'book_now_click', { event_category: 'Conversion', event_label: 'cta_bottom' })}
            >
              <span>Book Tour Online</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
