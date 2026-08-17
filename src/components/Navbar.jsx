import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const packageSubLinks = [
  { name: 'Char Dham Yatra', path: '/packages/char-dham-yatra' },
  { name: 'Do Dham Yatra', path: '/packages/do-dham-yatra' },
  { name: 'Kedarnath Tour', path: '/packages/kedarnath' },
  { name: 'Badrinath Tour', path: '/packages/badrinath' },
  { name: 'Mussoorie Package', path: '/packages/mussoorie' },
  { name: 'Nainital Package', path: '/packages/nainital' },
  { name: 'Rishikesh Tour', path: '/packages/rishikesh' },
  { name: 'Haridwar Sightseeing', path: '/packages/haridwar-sightseeing' },
];

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Tour Packages', path: '/services', subLinks: packageSubLinks },
  { name: 'Cars', path: '/cars' },
  { name: 'Travel Guides', path: '/guides' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact Us', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-white shadow py-3'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/images/Logo/Gemini_Generated_Image_uw1i3nuw1i3nuw1i.png" alt="Smart Choice Tour and Travels — Best Travel Agency in Haridwar" className="h-[3.3rem] w-auto" loading="eager" fetchpriority="high" width="132" height="52" decoding="async" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center font-medium" aria-label="Main navigation">
          {navLinks.map((link) => (
            link.subLinks ? (
              <div
                key={link.name}
                className="relative group py-2"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  to={link.path}
                  className={`hover:text-primary transition-colors flex items-center ${
                    location.pathname.startsWith('/packages') || location.pathname === link.path
                      ? 'text-primary font-semibold'
                      : 'text-slate-600'
                  }`}
                >
                  {link.name}
                  <FiChevronDown className="ml-1 text-xs transition-transform group-hover:rotate-180" />
                </Link>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-3 z-50"
                    >
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className={`block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-colors ${
                            location.pathname === sub.path ? 'text-primary font-semibold bg-slate-50' : 'text-slate-700'
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`hover:text-primary transition-colors ${
                  location.pathname === link.path ? 'text-primary font-semibold' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            )
          ))}
          <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-slate-200">
            <a href="tel:+918273490102" className="flex items-center font-bold text-slate-800 hover:text-primary transition-colors">
              <span className="bg-primary/10 text-primary p-2 rounded-full mr-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.438a1 1 0 01-.328.968l-2.346 1.876a11.033 11.033 0 005.14 5.14l1.876-2.346a1 1 0 01.968-.328l4.438.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
              </span>
              +91 8273490102
            </a>
            <Link
              to="/book"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full shadow-lg transition-transform hover:-translate-y-1"
            >
              Book Now
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-slate-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col py-4 px-4 space-y-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className={`text-lg font-medium block py-1 ${
                      location.pathname === link.path ? 'text-primary font-semibold' : 'text-slate-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.subLinks && (
                    <div className="pl-4 space-y-2 mt-1 border-l-2 border-primary/20">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className={`block text-sm py-0.5 ${
                            location.pathname === sub.path ? 'text-primary font-semibold' : 'text-slate-600'
                          }`}
                        >
                          › {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/book"
                className="bg-primary text-white text-center px-4 py-3 rounded-md font-semibold mt-4 block"
              >
                Book a Service
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
