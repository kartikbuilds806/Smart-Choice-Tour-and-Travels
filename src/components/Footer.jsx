import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

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
            Haridwar's trusted travel agency for Char Dham Yatra, Kedarnath tours, Mussoorie packages & taxi services across Uttarakhand. Located at Bhimgoda, Haridwar.
          </p>
          <div className="flex space-x-3 pt-2">
            <a href="https://www.facebook.com/profile.php?id=61576416869040" target="_blank" rel="noreferrer" aria-label="Smart Choice Tours on Facebook" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors hover:text-white">
              <FaFacebookF size={16} />
            </a>
            <a href="https://www.instagram.com/smartchoicetoursandtravels/" target="_blank" rel="noreferrer" aria-label="Smart Choice Tours on Instagram" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors hover:text-white">
              <FaInstagram size={16} />
            </a>
            <a href="https://x.com/SmartChoiceTour" target="_blank" rel="noreferrer" aria-label="Smart Choice Tours on X (Twitter)" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors hover:text-white">
              <FaSquareXTwitter size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white font-poppins mb-6">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { label: 'Home', path: '/' },
              { label: 'About Us', path: '/about' },
              { label: 'Tour Packages', path: '/services' },
              { label: 'Our Fleet', path: '/cars' },
              { label: 'Travel Guides', path: '/guides' },
              { label: 'Gallery', path: '/gallery' },
              { label: 'Book Now', path: '/book' },
              { label: 'Contact Us', path: '/contact' },
            ].map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-accent transition-colors flex items-center text-sm">
                  <span className="mr-2 text-accent text-xs">›</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Tour Packages */}
        <div>
          <h3 className="text-xl font-semibold text-white font-poppins mb-6">Tour Packages</h3>
          <ul className="space-y-2">
            {[
              { label: 'Char Dham Yatra Package', path: '/packages/char-dham-yatra' },
              { label: 'Do Dham Yatra Package', path: '/packages/do-dham-yatra' },
              { label: 'Kedarnath Tour Package', path: '/packages/kedarnath' },
              { label: 'Badrinath Package', path: '/packages/badrinath' },
              { label: 'Mussoorie Tour Package', path: '/packages/mussoorie' },
              { label: 'Nainital Tour Package', path: '/packages/nainital' },
              { label: 'Rishikesh Tour Package', path: '/packages/rishikesh' },
              { label: 'Haridwar Sightseeing', path: '/packages/haridwar-sightseeing' },
            ].map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-slate-400 hover:text-white transition-colors text-sm flex items-center">
                  <span className="mr-2 text-accent text-xs">›</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white font-poppins mb-6">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-accent mt-1 flex-shrink-0" />
              <span className="text-sm">Bhimgoda, Opposite Railway Station, Haridwar, Uttarakhand — 249401</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhoneAlt className="text-accent flex-shrink-0" size={14} />
              <a href="tel:+918273490102" className="text-sm hover:text-white transition-colors">+91 8273490102</a>
            </li>
            <li className="flex items-center space-x-3">
              <FaWhatsapp className="text-accent flex-shrink-0" size={16} />
              <a href="https://wa.me/918273490102" target="_blank" rel="noreferrer" className="text-sm hover:text-white transition-colors">+91 8273490102 (WhatsApp)</a>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-accent flex-shrink-0" size={14} />
              <a href="mailto:smartchoicetoursandtravels@gmail.com" className="text-sm hover:text-white transition-colors break-all">smartchoicetoursandtravels@gmail.com</a>
            </li>
          </ul>
          <div className="mt-6 p-3 bg-slate-800 rounded-lg">
            <p className="text-xs text-slate-400">⏰ Open 7 days · 8 AM – 9 PM</p>
            <p className="text-xs text-accent font-medium mt-1">⭐ 4.9★ Rating on Google</p>
          </div>
        </div>
      </div>

      {/* SEO Popular Searches & Keyword Tag Cloud */}
      <div className="border-t border-slate-800/80 bg-slate-950/60 py-8">
        <div className="container mx-auto px-4 md:px-8">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Popular Searches & Destinations</h4>
          <div className="flex flex-wrap gap-2 text-[11px] text-slate-500">
            {[
              { tag: 'Travel agency Haridwar', path: '/about' },
              { tag: 'Char Dham Yatra package Haridwar', path: '/packages/char-dham-yatra' },
              { tag: 'Do Dham Yatra package', path: '/packages/do-dham-yatra' },
              { tag: 'Kedarnath tour package', path: '/packages/kedarnath' },
              { tag: 'Mussoorie package from Haridwar', path: '/packages/mussoorie' },
              { tag: 'Taxi service Haridwar', path: '/cars' },
              { tag: 'Dehradun airport taxi', path: '/cars' },
              { tag: 'Jolly Grant airport transfer', path: '/cars' },
              { tag: 'Tempo Traveller hire Haridwar', path: '/cars' },
              { tag: 'Innova Crysta booking Haridwar', path: '/cars' },
              { tag: 'Haridwar taxi fare rate chart 2026', path: '/cars' },
              { tag: 'Badrinath tour package', path: '/packages/badrinath' },
              { tag: 'Nainital tour package', path: '/packages/nainital' },
              { tag: 'Rishikesh rafting cab', path: '/packages/rishikesh' },
              { tag: 'Haridwar local sightseeing', path: '/packages/haridwar-sightseeing' },
              { tag: 'Uttarakhand tour packages', path: '/services' },
              { tag: 'Kedarnath trip cost', path: '/guides/kedarnath-trip-cost-budget-2026' },
              { tag: 'Char Dham Yatra cost', path: '/guides/char-dham-yatra-budget-guide-2026' },
              { tag: 'Uttarakhand travel guide', path: '/guides' },
              { tag: 'Family tour Uttarakhand', path: '/guides/family-tour-tips-uttarakhand' },
              { tag: 'Honeymoon packages Uttarakhand', path: '/guides/honeymoon-packages-uttarakhand-2026' },
              { tag: 'Outstation cab Haridwar to Delhi', path: '/cars' },
              { tag: 'Gaurikund taxi from Haridwar', path: '/cars' },
              { tag: 'Car rental Haridwar', path: '/cars' },
              { tag: 'Pilgrimage tours Haridwar', path: '/services' },
              { tag: 'Chardham Yatra 2026 registration', path: '/guides/char-dham-yatra-complete-guide' },
            ].map((item, i) => (
              <span key={i} className="inline-flex items-center">
                <Link to={item.path} className="hover:text-accent transition-colors">
                  {item.tag}
                </Link>
                {i < 25 && <span className="ml-2 text-slate-700">·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 md:px-8 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
        <p>© 2026 Smart Choice Tour and Travels, Haridwar. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
