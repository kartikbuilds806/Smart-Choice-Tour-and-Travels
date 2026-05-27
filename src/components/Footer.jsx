import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Brand & Description */}
        <div className="flex flex-col space-y-4">
          <Link to="/" className="text-2xl font-bold font-poppins text-white">
            Smart Choice <span className="text-accent">Tour & Travels</span>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            Dedicated to providing reliable, comfortable, and affordable travel solutions. Make your next journey unforgettable with our premium tour packages and taxi services across India.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors hover:text-white">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white font-poppins mb-6">Quick Links</h3>
          <ul className="space-y-3">
            {['Home', 'About', 'Services', 'Cars', 'Travel Guides', 'Gallery', 'Contact'].map((link) => (
              <li key={link}>
                <Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="hover:text-accent transition-colors flex items-center">
                  <span className="mr-2 text-accent text-xs">▼</span>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Services */}
        <div>
          <h3 className="text-xl font-semibold text-white font-poppins mb-6">Popular Services</h3>
          <ul className="space-y-3">
            <li className="text-slate-400 hover:text-white transition-colors cursor-pointer text-sm">Haridwar Sightseeing</li>
            <li className="text-slate-400 hover:text-white transition-colors cursor-pointer text-sm">Char Dham Yatra</li>
            <li className="text-slate-400 hover:text-white transition-colors cursor-pointer text-sm">Taxi Services</li>
            <li className="text-slate-400 hover:text-white transition-colors cursor-pointer text-sm">Airport Transfers</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white font-poppins mb-6">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-accent mt-1 flex-shrink-0" />
              <span className="text-sm">Opp. Railway Station, Haridwar, Uttarakhand, India</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhoneAlt className="text-accent flex-shrink-0" />
              <span className="text-sm">+91 8273490102</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaWhatsapp className="text-accent flex-shrink-0" />
              <span className="text-sm">+91 8273490102</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-accent flex-shrink-0" />
              <span className="text-sm">princerajput68768@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
        <p>Copyright © 2026 Designed By Web Business Tech. All Rights Reserved</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
