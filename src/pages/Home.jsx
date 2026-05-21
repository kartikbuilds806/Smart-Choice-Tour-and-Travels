import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaPhoneAlt, FaWhatsapp, FaCar, FaMapMarkedAlt, FaUsers, FaPlane, FaSuitcaseRolling, FaStar, FaQuoteLeft } from 'react-icons/fa';

// Mock images (using the ones we processed)
const heroImages = [
  '/images/Home page/haridwar.jpg',
  '/images/Home page/Mussorie.jpg',
  '/images/Home page/Nainital.jpg',
  '/images/Home page/Kedarnath-Temple.webp'
];

const destinationImages = {
  Haridwar: '/images/Popular Destination/haridwar.jpg',
  Rishikesh: '/images/Popular Destination/Rishikesh.jpg',
  Kedarnath: '/images/Popular Destination/Kedarnath-Temple.webp',
  Badrinath: '/images/Popular Destination/badrinath.webp',
  Mussoorie: '/images/Popular Destination/Mussorie.jpg',
  Nainital: '/images/Popular Destination/Nainital.jpg',
};

// Counter component for animation
const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-4xl md:text-5xl font-bold text-gradient mb-2">{count}+</h3>
      <p className="text-slate-600 font-medium">{label}</p>
    </div>
  );
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slideTimer);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Helmet>
        <title>Smart Choice Tour & Travels | Best Tour Packages from Haridwar</title>
        <meta name="description" content="Affordable tour packages, taxi services, and curated travel experiences from Haridwar. Book your next trip with Smart Choice Tour & Travels." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={heroImages[currentSlide]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full object-cover z-0"
              alt="Hero Background"
              loading="eager"
              fetchpriority="high"
              width="1920"
              height="1080"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-dark p-8 md:p-12 rounded-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-4 leading-tight">
              The Journey Beyond <br/><span className="text-accent">Your Imagination</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 font-light">
              Affordable Tour Packages & Taxi Services Across India
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://wa.me/918273490102?text=Hello%20I%20want%20to%20book%20a%20tour"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold flex items-center transition-all shadow-lg hover:-translate-y-1 w-full sm:w-auto justify-center"
              >
                <FaWhatsapp className="mr-2" size={20} /> Book Now on WhatsApp
              </a>
              <a
                href="tel:+918273490102"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold flex items-center transition-all shadow-lg hover:-translate-y-1 w-full sm:w-auto justify-center"
              >
                <FaPhoneAlt className="mr-2" /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white shrink-0 relative -mt-8 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-xl z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
          <Counter end={1000} label="Destinations" />
          <Counter end={500} label="Happy Clients" />
          <Counter end={300} label="Tours Completed" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-poppins mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Local Sightseeing', img: '/images/Our Services/sightseeing.jpg', desc: 'Explore Haridwar and Rishikesh with our guided local tours.' },
              { title: 'Char Dham Yatra', img: '/images/Our Services/char-dham yatra.jpg', desc: 'Spiritual journey to the sacred shrines with complete comfort.' },
              { title: 'Group Booking', img: '/images/Our Services/grouup booking.jpeg', desc: 'Economical and fun travel packages for large groups.' },
              { title: 'Family Tours', img: '/images/Our Services/family tour.jpg', desc: 'Customized itineraries focused on family safety and enjoyment.' },
              { title: 'Airport Transfer', img: '/images/Our Services/Airport transfer.jpg', desc: 'Punctual railway and airport pickup and drop services.' },
              { title: 'Affordable Taxi', img: '/images/Our Services/affordable taxi.png', desc: 'Fixed rates with no hidden charges for any destination.' }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col items-center group cursor-pointer"
              >
                <div className="w-full h-48 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" width="1200" height="800" />
                </div>
                <div className="p-8 flex flex-col items-center flex-grow text-center">
                  <h3 className="text-xl font-semibold mb-3 text-slate-800">{service.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow">{service.desc}</p>
                  <Link to="/services" className="text-primary font-medium hover:text-accent transition-colors uppercase tracking-wider text-sm">
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-poppins mb-4">Popular Destinations</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(destinationImages).map(([city, img], idx) => (
              <motion.div
                key={city}
                whileHover={{ scale: 1.03 }}
                className="relative h-64 rounded-2xl overflow-hidden group shadow-lg cursor-pointer"
              >
                <img src={img} alt={city} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" width="1024" height="640" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white tracking-wide">{city}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Cars Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Our Premium Fleet</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Innova Crysta', img: '/images/Our Premium fleet/Toyata crysta.jpg' },
              { name: 'Swift Dzire', img: '/images/Our Premium fleet/Dzire.webp' },
              { name: 'Tempo Traveller', img: '/images/Our Premium fleet/tempo-traveler.jpg' }
            ].map((car, idx) => (
              <div key={idx} className="bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 group">
                <div className="h-56 bg-white relative overflow-hidden flex items-center justify-center">
                  <img src={car.img} alt={car.name} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" loading="lazy" width="1024" height="640" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                  <div className="flex justify-between items-center mb-6 text-sm text-slate-400">
                    <span>AC / Heater</span>
                    <span>Fully Sanitized</span>
                  </div>
                  <a
                    href={`https://wa.me/918273490102?text=Hello%20I%20want%20to%20book%20the%20${car.name}`}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-center bg-accent text-slate-900 font-semibold py-3 rounded-full hover:bg-yellow-500 transition-colors"
                  >
                    Book {car.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/cars" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-semibold transition-colors">
              View All Cars
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-poppins mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="glass p-8 rounded-2xl relative">
                <FaQuoteLeft className="text-4xl text-blue-100 absolute top-4 right-4" />
                <div className="flex text-accent mb-4">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
                <p className="text-slate-600 mb-6 italic">"Excellent service! The driver was extremely polite and the car was very clean. We had a wonderful Char Dham experience with Smart Choice Travels."</p>
                <div className="font-semibold text-slate-800">- Happy Traveler {item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 z-0"/>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 z-0"/>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-poppins mb-6">Plan Your Trip Today!</h2>
          <p className="text-blue-100 md:text-xl mb-10 max-w-2xl mx-auto">Get the best deals on tour packages and taxi services. Make an inquiry now and let us handle the rest.</p>
          <a
            href="https://wa.me/918273490102?text=Hello%20I%20want%20to%20plan%20a%20trip"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
          >
            <FaWhatsapp size={24} className="text-green-500" />
            <span>Contact on WhatsApp</span>
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
