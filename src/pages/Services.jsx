import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import FAQSection from '../components/FAQSection';

const servicesFaqs = [
  { question: 'What tour packages do you offer from Haridwar?', answer: 'Smart Choice Tour & Travels offers Char Dham Yatra (12 days), Kedarnath (4 days), Badrinath (4 days), Mussoorie (day trip / 3 days), Nainital (3 days), Rishikesh (day trip), and Haridwar local sightseeing packages. All packages are customizable.' },
  { question: 'How many days is the Char Dham Yatra from Haridwar?', answer: 'The standard Char Dham Yatra package from Haridwar is 11 nights / 12 days, covering Yamunotri, Gangotri, Kedarnath, and Badrinath. We also offer shorter Do Dham packages (Kedarnath + Badrinath) in 7-8 days.' },
  { question: 'Do you provide a vehicle for Kedarnath from Haridwar to Gaurikund?', answer: 'Yes, we provide Haridwar to Gaurikund taxi service (the base camp for Kedarnath trek) in all vehicle types — Swift Dzire, Innova, Innova Crysta, and Tempo Traveller. Contact us for current rates.' },
  { question: 'Can you customize a tour package for my family?', answer: 'Absolutely! All our tour packages are fully customizable. You can choose your own dates, add or remove destinations, select your vehicle, and set a budget. WhatsApp us at +91 8273490102 for a free custom itinerary.' },
  { question: 'Do you offer group discounts?', answer: 'Yes! For groups of 10+ people using Tempo Traveller, we offer special group discounts. Contact us with your group size and travel dates for the best group tour rate from Haridwar.' },
];

const Services = () => {
  const services = [
    { title: 'Local Sightseeing', img: '/images/Our Services/sightseeing.jpg', desc: 'Explore the spiritual ghats of Haridwar — Har Ki Pauri, Mansa Devi Temple, Chandi Devi Temple, and Rishikesh. Best local sightseeing tours from Haridwar starting at ₹800.', link: '/packages/haridwar-sightseeing' },
    { title: 'Char Dham Yatra', img: '/images/Our Services/char-dham yatra.jpg', desc: 'Complete 12-day Char Dham Yatra package from Haridwar covering Yamunotri, Gangotri, Kedarnath and Badrinath with AC vehicle, experienced driver, and flexible itinerary.', link: '/packages/char-dham-yatra' },
    { title: 'Group Booking', img: '/images/Our Services/grouup booking.jpeg', desc: 'Affordable group tour packages from Haridwar for 10 to 50 people. Special discounts on Tempo Traveller for pilgrimages, corporate trips, and family tours.', link: '/book' },
    { title: 'Family Tours', img: '/images/Our Services/family tour.jpg', desc: 'Safe and comfortable family tour packages from Haridwar to Mussoorie, Nainital, and hill stations. Child-friendly itineraries with AC vehicles and experienced drivers.', link: '/packages/mussoorie' },
    { title: 'Airport Transfer', img: '/images/Our Services/Airport transfer.jpg', desc: 'Reliable airport transfer from Haridwar to Jolly Grant (Dehradun) Airport, Delhi IGI Airport, and all major airports. Fixed rates, on-time pickup guaranteed.', link: '/contact' },
    { title: 'Taxi Services', img: '/images/Our Services/affordable taxi.png', desc: 'Affordable outstation taxi from Haridwar to Rishikesh, Dehradun, Mussoorie, Kedarnath, Badrinath, Nainital and all India. Available 24/7, AC vehicles, experienced drivers.', link: '/cars' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-20">
      <Helmet>
        <title>Tour Packages & Travel Services in Haridwar | Smart Choice Tour & Travels</title>
        <meta name="description" content="Explore Char Dham Yatra, Kedarnath, Mussoorie, Nainital tour packages & taxi services from Haridwar. Customizable, affordable, 24/7 support. Call +91 8273490102." />
        <link rel="canonical" href="https://www.thesmartchoicetours.com/services" />
        <meta property="og:title" content="Tour Packages & Travel Services in Haridwar | Smart Choice Tours" />
        <meta property="og:description" content="Char Dham Yatra, Kedarnath, Mussoorie, Nainital tour packages & taxi services from Haridwar, Uttarakhand. Affordable & customizable." />
        <meta property="og:url" content="https://www.thesmartchoicetours.com/services" />
      </Helmet>

      <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Tour Packages & Services' }]} />

      <div className="bg-slate-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-30 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Tour Packages & Travel Services from Haridwar
          </h1>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Char Dham Yatra · Kedarnath · Mussoorie · Nainital · Airport Transfers · Outstation Taxi
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 max-w-6xl">
        {/* Intro text with internal links */}
        <p className="text-slate-600 leading-relaxed text-center mb-12 max-w-4xl mx-auto">
          Smart Choice Tour and Travels offers a comprehensive range of <strong>tour packages and taxi services from Haridwar, Uttarakhand</strong>. Whether you are planning a sacred <Link to="/packages/char-dham-yatra" className="text-primary font-medium hover:underline">Char Dham Yatra</Link>, a family trip to <Link to="/packages/mussoorie" className="text-primary font-medium hover:underline">Mussoorie</Link>, or need an outstation <Link to="/cars" className="text-primary font-medium hover:underline">taxi from Haridwar</Link>, we have you covered. All packages are fully customizable. Call +91 8273490102.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col group"
            >
              <div className="w-full h-56 overflow-hidden relative border-b-4 border-primary">
                <img
                  src={service.img}
                  alt={`${service.title} in Haridwar — Smart Choice Tour & Travels`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width="600"
                  height="400"
                  decoding="async"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow text-center">
                <h2 className="text-2xl font-bold font-poppins mb-3 text-slate-800">{service.title}</h2>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{service.desc}</p>
                <Link
                  to={service.link}
                  className="text-primary font-semibold hover:text-primary-dark inline-flex items-center justify-center group-hover:text-accent transition-colors"
                >
                  View Package Details
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Package Links */}
        <div className="mt-16 bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 font-poppins mb-6 text-center">All Tour Package Pages</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Char Dham Yatra', link: '/packages/char-dham-yatra' },
              { label: 'Kedarnath Package', link: '/packages/kedarnath' },
              { label: 'Badrinath Package', link: '/packages/badrinath' },
              { label: 'Mussoorie Package', link: '/packages/mussoorie' },
              { label: 'Nainital Package', link: '/packages/nainital' },
              { label: 'Rishikesh Package', link: '/packages/rishikesh' },
              { label: 'Haridwar Sightseeing', link: '/packages/haridwar-sightseeing' },
              { label: 'Book Custom Package', link: '/book' },
            ].map((item, i) => (
              <Link key={i} to={item.link} className="bg-white rounded-xl p-4 text-center text-primary font-semibold hover:bg-primary hover:text-white border border-slate-200 transition-all text-sm shadow-sm hover:shadow-md">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <FAQSection faqs={servicesFaqs} title="Tour Packages — Frequently Asked Questions" />
    </motion.div>
  );
};

export default Services;
