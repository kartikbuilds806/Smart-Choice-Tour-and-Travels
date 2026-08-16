import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { guidesData } from '../data/guidesData';
import Breadcrumb from '../components/Breadcrumb';
import { FaClock, FaTag, FaArrowRight } from 'react-icons/fa';

const Guides = () => {
  const categories = [...new Set(guidesData.map(g => g.category).filter(Boolean))];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-20">
      <Helmet>
        <title>Uttarakhand Travel Guides 2026 | Smart Choice Tours</title>
        <meta name="description" content="Read expert travel guides on Haridwar, Kedarnath, Char Dham Yatra, and Mussoorie. Get travel tips, itinerary planning, and cost guides." />
        <link rel="canonical" href="https://www.thesmartchoicetours.com/guides" />
        <meta property="og:title" content="Uttarakhand Travel Guides 2026 | Smart Choice Tours" />
        <meta property="og:description" content="Read expert travel guides on Haridwar, Kedarnath, Char Dham Yatra, and Mussoorie. Get travel tips, itinerary planning, and cost guides." />
        <meta property="og:url" content="https://www.thesmartchoicetours.com/guides" />
      </Helmet>

      <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Uttarakhand Travel Guides' }]} />

      <div className="bg-slate-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/30 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Uttarakhand Travel Guides 2026
          </h1>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Expert guides for Haridwar, Kedarnath, Char Dham Yatra, Mussoorie, Rishikesh & more — from local travel specialists in Haridwar.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 max-w-6xl">

        {/* Category filter badges */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {categories.map((cat, i) => (
            <span key={i} className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full flex items-center">
              <FaTag className="mr-1.5" size={11} /> {cat}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guidesData.map((guide) => (
            <motion.div
              key={guide.id}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col group cursor-pointer"
            >
              <div className="w-full h-52 overflow-hidden relative border-b-4 border-primary">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width="600"
                  height="400"
                  decoding="async"
                />
                <div className="absolute top-3 left-3 flex space-x-2">
                  {guide.category && (
                    <span className="bg-primary/80 text-white text-xs px-2 py-1 rounded-full">{guide.category}</span>
                  )}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                {guide.readTime && (
                  <span className="text-xs text-slate-400 mb-2 flex items-center">
                    <FaClock className="mr-1" size={10} /> {guide.readTime}
                  </span>
                )}
                <h2 className="text-xl font-bold font-poppins mb-3 text-slate-800 line-clamp-2">
                  {guide.title}
                </h2>
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed text-sm line-clamp-3">
                  {guide.excerpt}
                </p>
                <Link
                  to={`/guides/${guide.id}`}
                  className="text-primary font-semibold hover:text-primary-dark inline-flex items-center group-hover:text-accent transition-colors text-sm"
                >
                  Read Full Guide <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-slate-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold font-poppins mb-3">Ready to Visit Uttarakhand?</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Let our local experts at Smart Choice Tour & Travels plan your perfect trip to Haridwar, Kedarnath, Mussoorie, or anywhere in Uttarakhand.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a href="https://wa.me/918273490102?text=Hello%20I%20need%20travel%20guidance" target="_blank" rel="noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Get Free Travel Advice
            </a>
            <Link to="/services" className="bg-accent text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors">
              View Tour Packages
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Guides;
