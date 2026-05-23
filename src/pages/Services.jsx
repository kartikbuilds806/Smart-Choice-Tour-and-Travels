import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkedAlt, FaUsers, FaPlane, FaCar, FaSuitcaseRolling, FaMosque } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    { title: 'Local Sightseeing', img: '/images/Our Services/sightseeing.jpg', desc: 'Explore the spiritual ghats of Haridwar, Mansa Devi temple, Har Ki Pauri, and Rishikesh with our expert local guides. Best local sightseeing tours from Haridwar at affordable prices.' },
    { title: 'Char Dham Yatra', img: '/images/Our Services/char-dham yatra.jpg', desc: 'Complete Char Dham Yatra package from Haridwar covering Yamunotri, Gangotri, Kedarnath and Badrinath with comfortable travel arrangements including AC vehicle and experienced driver.' },
    { title: 'Group Booking', img: '/images/Our Services/grouup booking.jpeg', desc: 'Affordable group tour packages from Haridwar for 10 to 50 people. Special discounts on Tempo Traveller and bus bookings for pilgrimages, corporate trips, and family tours.' },
    { title: 'Family Tours', img: '/images/Our Services/family tour.jpg', desc: 'Safe and comfortable family tour packages from Haridwar to Mussoorie, Nainital, Shimla, and Manali. Child-friendly itineraries with AC vehicles and experienced drivers.' },
    { title: 'Airport Transfer', img: '/images/Our Services/Airport transfer.jpg', desc: 'Reliable airport transfer service from Haridwar to Dehradun Airport (Jolly Grant), Delhi IGI Airport, and all major airports. Fixed rates, on-time pickup guaranteed.' },
    { title: 'Taxi Services', img: '/images/Our Services/affordable taxi.png', desc: 'Affordable taxi service from Haridwar to Rishikesh, Dehradun, Mussoorie, Kedarnath, Badrinath, and anywhere in India. Available 24/7, AC vehicles, experienced drivers.' }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-20">
      <Helmet>
        <title>Tour Packages & Travel Services | Smart Choice Tours Haridwar</title>
        <meta name="description" content="Explore our tour packages, group bookings, airport transfers, and customized travel services tailored for comfort and convenience." />
      </Helmet>
      
      <div className="bg-slate-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-30 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Our Services</h1>
          <p className="text-blue-200 max-w-2xl mx-auto">Discover comprehensive travel solutions tailored for your comfort and budget.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col group"
            >
              <div className="w-full h-56 overflow-hidden relative border-b-4 border-primary">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" width="1200" height="800" />
              </div>
              <div className="p-8 flex flex-col flex-grow text-center">
                <h3 className="text-2xl font-bold font-poppins mb-3 text-slate-800">{service.title}</h3>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{service.desc}</p>
                <Link to="/book" className="text-primary font-semibold hover:text-primary-dark inline-flex items-center justify-center group-hover:text-accent transition-colors">
                  Book This Service
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
