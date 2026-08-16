import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaHome, FaCompass, FaCar, FaBook, FaPhoneAlt } from 'react-icons/fa';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[70vh] flex items-center justify-center py-20 bg-slate-50"
    >
      <Helmet>
        <title>404 Page Not Found | Smart Choice Tour & Travels Haridwar</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="container mx-auto px-4 max-w-2xl text-center">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
          <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-5xl font-extrabold font-poppins">404</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold font-poppins text-slate-800 mb-4">
            Page Not Found
          </h1>
          
          <p className="text-slate-600 leading-relaxed mb-8 max-w-md mx-auto">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let's get you back on track to exploring Uttarakhand!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left">
            <Link
              to="/"
              className="flex items-center space-x-3 p-4 rounded-xl bg-slate-50 hover:bg-primary/10 text-slate-700 hover:text-primary transition-colors border border-slate-200"
            >
              <FaHome className="text-primary flex-shrink-0" size={18} />
              <div>
                <span className="font-semibold block text-sm">Home Page</span>
                <span className="text-xs text-slate-500">Return to main page</span>
              </div>
            </Link>

            <Link
              to="/services"
              className="flex items-center space-x-3 p-4 rounded-xl bg-slate-50 hover:bg-primary/10 text-slate-700 hover:text-primary transition-colors border border-slate-200"
            >
              <FaCompass className="text-primary flex-shrink-0" size={18} />
              <div>
                <span className="font-semibold block text-sm">Tour Packages</span>
                <span className="text-xs text-slate-500">Char Dham, Kedarnath & more</span>
              </div>
            </Link>

            <Link
              to="/cars"
              className="flex items-center space-x-3 p-4 rounded-xl bg-slate-50 hover:bg-primary/10 text-slate-700 hover:text-primary transition-colors border border-slate-200"
            >
              <FaCar className="text-primary flex-shrink-0" size={18} />
              <div>
                <span className="font-semibold block text-sm">Taxi Services</span>
                <span className="text-xs text-slate-500">Innova, Dzire & Fleet</span>
              </div>
            </Link>

            <Link
              to="/contact"
              className="flex items-center space-x-3 p-4 rounded-xl bg-slate-50 hover:bg-primary/10 text-slate-700 hover:text-primary transition-colors border border-slate-200"
            >
              <FaPhoneAlt className="text-primary flex-shrink-0" size={18} />
              <div>
                <span className="font-semibold block text-sm">Contact Us</span>
                <span className="text-xs text-slate-500">Get in touch with us</span>
              </div>
            </Link>
          </div>

          <a
            href="https://wa.me/918273490102?text=Hello%20Smart%20Choice%20Tours"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-md"
          >
            Need Immediate Help? Chat on WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;
