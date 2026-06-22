import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhoneAlt, FaCheckCircle, FaTimesCircle, FaStar, FaMapMarkerAlt, FaClock, FaUsers } from 'react-icons/fa';
import Breadcrumb from '../../components/Breadcrumb';
import FAQSection from '../../components/FAQSection';
import { getPackageById } from '../../data/packagesData';

const CharDham = () => {
  const pkg = getPackageById('char-dham-yatra');

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: pkg.name,
    description: pkg.metaDescription,
    touristType: 'Pilgrims, Spiritual Travelers',
    itinerary: pkg.itinerary.map(day => ({
      '@type': 'TouristAttraction',
      name: day.title,
      description: day.description,
    })),
    provider: {
      '@type': 'TravelAgency',
      name: 'Smart Choice Tour and Travels',
      telephone: '+91-8273490102',
      url: 'https://www.thesmartchoicetours.com',
    },
    offers: {
      '@type': 'Offer',
      price: '15000',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-20">
      <Helmet>
        <title>{pkg.metaTitle}</title>
        <meta name="description" content={pkg.metaDescription} />
        <link rel="canonical" href="https://www.thesmartchoicetours.com/packages/char-dham-yatra" />
        <meta property="og:title" content={pkg.metaTitle} />
        <meta property="og:description" content={pkg.metaDescription} />
        <meta property="og:image" content={`https://www.thesmartchoicetours.com${pkg.heroImage}`} />
        <meta property="og:url" content="https://www.thesmartchoicetours.com/packages/char-dham-yatra" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Tour Packages', path: '/services' },
        { label: 'Char Dham Yatra Package' },
      ]} />

      {/* Hero */}
      <div className="relative h-80 md:h-[450px] w-full">
        <img
          src={pkg.heroImage}
          alt="Kedarnath Temple — Char Dham Yatra Package from Haridwar"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
          width="1920"
          height="1080"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center container mx-auto px-4">
          <div className="text-center text-white max-w-4xl">
            <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-3">Uttarakhand Pilgrimage</p>
            <h1 className="text-3xl md:text-5xl font-bold font-poppins mb-4 leading-tight">
              Char Dham Yatra Package from Haridwar
            </h1>
            <p className="text-slate-200 text-lg">Yamunotri · Gangotri · Kedarnath · Badrinath</p>
          </div>
        </div>
      </div>

      {/* Quick Info Bar */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <FaClock className="text-primary mb-1" />
              <span className="text-xs text-slate-500">Duration</span>
              <span className="font-semibold text-slate-800 text-sm">{pkg.duration}</span>
            </div>
            <div className="flex flex-col items-center">
              <FaMapMarkerAlt className="text-primary mb-1" />
              <span className="text-xs text-slate-500">Starting From</span>
              <span className="font-semibold text-slate-800 text-sm">{pkg.startingFrom} / person</span>
            </div>
            <div className="flex flex-col items-center">
              <FaUsers className="text-primary mb-1" />
              <span className="text-xs text-slate-500">Group Size</span>
              <span className="font-semibold text-slate-800 text-sm">{pkg.groupSize}</span>
            </div>
            <div className="flex flex-col items-center">
              <FaStar className="text-yellow-400 mb-1" />
              <span className="text-xs text-slate-500">Rating</span>
              <span className="font-semibold text-slate-800 text-sm">4.9★ (7 Reviews)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold font-poppins text-slate-800 mb-4">About This Package</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The <strong>Char Dham Yatra from Haridwar</strong> is the most sacred pilgrimage in Hinduism, covering four holy shrines nestled in the Garhwal Himalayas of Uttarakhand — Yamunotri, Gangotri, Kedarnath, and Badrinath. Smart Choice Tour and Travels offers a complete 12-day Char Dham Yatra package from Haridwar with a comfortable AC vehicle, experienced driver familiar with mountain roads, and flexible itinerary.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our Char Dham package starts from <strong>{pkg.startingFrom} per person</strong> (for a group of 4 in an Innova) and can be customized to your group size, vehicle preference, and budget. We have been operating Char Dham tours from our base in Bhimgoda, Haridwar for years with hundreds of happy pilgrims served.
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-2xl font-bold font-poppins text-slate-800 mb-6">Package Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.highlights.map((h, i) => (
                  <div key={i} className="flex items-start space-x-3 bg-green-50 rounded-lg p-3">
                    <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <h2 className="text-2xl font-bold font-poppins text-slate-800 mb-6">Day-by-Day Itinerary</h2>
              <div className="space-y-4">
                {pkg.itinerary.map((day, i) => (
                  <div key={i} className="flex space-x-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {day.day}
                      </div>
                      {i < pkg.itinerary.length - 1 && (
                        <div className="w-0.5 bg-slate-200 flex-grow mt-2" />
                      )}
                    </div>
                    <div className="pb-6">
                      <h3 className="font-bold text-slate-800 mb-2">{day.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold font-poppins text-slate-800 mb-4">What's Included</h2>
                <ul className="space-y-2">
                  {pkg.inclusions.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={14} />
                      <span className="text-slate-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold font-poppins text-slate-800 mb-4">What's Not Included</h2>
                <ul className="space-y-2">
                  {pkg.exclusions.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <FaTimesCircle className="text-red-400 mt-0.5 flex-shrink-0" size={14} />
                      <span className="text-slate-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar / Booking CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6">
                <p className="text-slate-500 text-sm mb-1">Starting from</p>
                <p className="text-3xl font-bold text-primary mb-1">{pkg.startingFrom}</p>
                <p className="text-slate-500 text-xs mb-6">per person · based on group of 4</p>

                <a
                  href="https://wa.me/918273490102?text=Hello%20I%20want%20to%20book%20the%20Char%20Dham%20Yatra%20package"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold text-lg mb-3 transition-colors"
                  onClick={() => {
                    if (typeof window.gtag === 'function') {
                      window.gtag('event', 'package_enquiry', { package_name: 'Char Dham Yatra' });
                    }
                  }}
                >
                  <FaWhatsapp className="inline mr-2" />
                  Book on WhatsApp
                </a>
                <a
                  href="tel:+918273490102"
                  className="block w-full text-center bg-primary hover:bg-primary-dark text-white py-3 rounded-xl font-semibold mb-4 transition-colors"
                  onClick={() => {
                    if (typeof window.gtag === 'function') {
                      window.gtag('event', 'package_enquiry', { package_name: 'Char Dham Yatra' });
                    }
                  }}
                >
                  <FaPhoneAlt className="inline mr-2" size={14} />
                  Call +91 8273490102
                </a>
                <Link
                  to="/book"
                  className="block w-full text-center border-2 border-primary text-primary hover:bg-primary hover:text-white py-3 rounded-xl font-semibold transition-colors"
                  onClick={() => {
                    if (typeof window.gtag === 'function') {
                      window.gtag('event', 'package_enquiry', { package_name: 'Char Dham Yatra' });
                    }
                  }}
                >
                  Fill Booking Form
                </Link>

                <div className="mt-6 pt-6 border-t border-slate-200 space-y-3">
                  <div className="flex items-center text-sm text-slate-600">
                    <FaCheckCircle className="text-green-500 mr-2" size={12} /> Free itinerary consultation
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <FaCheckCircle className="text-green-500 mr-2" size={12} /> Customizable package
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <FaCheckCircle className="text-green-500 mr-2" size={12} /> Transparent pricing
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <FaCheckCircle className="text-green-500 mr-2" size={12} /> 24/7 driver support
                  </div>
                </div>
              </div>

              {/* Related Packages */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-4">Related Packages</h3>
                <ul className="space-y-3">
                  <li><Link to="/packages/kedarnath" className="text-primary hover:underline text-sm">→ Kedarnath Tour Package</Link></li>
                  <li><Link to="/packages/badrinath" className="text-primary hover:underline text-sm">→ Badrinath Tour Package</Link></li>
                  <li><Link to="/packages/haridwar-sightseeing" className="text-primary hover:underline text-sm">→ Haridwar Sightseeing</Link></li>
                  <li><Link to="/guides/char-dham-yatra-complete-guide" className="text-primary hover:underline text-sm">→ Char Dham Complete Guide</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <FAQSection faqs={pkg.faqs} title="Char Dham Yatra — Frequently Asked Questions" />
      </div>

      {/* Internal Link CTA */}
      <div className="container mx-auto px-4 md:px-8 max-w-4xl mt-8 mb-4">
        <div className="bg-slate-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold font-poppins mb-3">Ready for Your Char Dham Yatra?</h2>
          <p className="text-slate-300 mb-6">
            Also explore our <Link to="/packages/kedarnath" className="text-accent hover:underline">Kedarnath package</Link>, <Link to="/packages/badrinath" className="text-accent hover:underline">Badrinath tour</Link>, or read our <Link to="/guides/char-dham-yatra-complete-guide" className="text-accent hover:underline">complete Char Dham guide</Link>.
          </p>
          <a
            href="https://wa.me/918273490102?text=Hello%20I%20want%20to%20book%20Char%20Dham%20Yatra"
            target="_blank"
            rel="noreferrer"
            className="bg-accent text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-500 transition-colors inline-block"
            onClick={() => {
              if (typeof window.gtag === 'function') {
                window.gtag('event', 'package_enquiry', { package_name: 'Char Dham Yatra' });
              }
            }}
          >
            Get Free Char Dham Quote
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default CharDham;
