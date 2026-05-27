import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { guidesData } from '../data/guidesData';

const Guides = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-20">
      <Helmet>
        <title>Travel Guides & Tips | Smart Choice Tour & Travels</title>
        <meta name="description" content="Discover the best places to visit in Haridwar, Uttarakhand travel tips, and comprehensive itineraries from Smart Choice Tour & Travels." />
      </Helmet>
      
      <div className="bg-slate-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/30 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Travel Guides</h1>
          <p className="text-blue-200 max-w-2xl mx-auto">Plan your perfect trip with our expert guides and local insights.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {guidesData.map((guide) => (
            <motion.div
              key={guide.id}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col group cursor-pointer"
            >
              <div className="w-full h-64 overflow-hidden relative border-b-4 border-primary">
                <img 
                  src={guide.image} 
                  alt={guide.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  loading="lazy" 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold font-poppins mb-3 text-slate-800 line-clamp-2">
                  {guide.title}
                </h3>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                  {guide.excerpt}
                </p>
                <Link 
                  to={`/guides/${guide.id}`} 
                  className="text-primary font-semibold hover:text-primary-dark inline-flex items-center group-hover:text-accent transition-colors"
                >
                  Read Full Guide
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

export default Guides;
