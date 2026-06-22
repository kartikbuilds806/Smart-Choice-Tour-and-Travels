import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhoneAlt, FaCheckCircle, FaTimesCircle, FaStar, FaMapMarkerAlt, FaClock, FaUsers } from 'react-icons/fa';
import Breadcrumb from '../../components/Breadcrumb';
import FAQSection from '../../components/FAQSection';
import { getPackageById } from '../../data/packagesData';

const PackagePage = ({ packageId, relatedPackages, relatedGuide }) => {
  const pkg = getPackageById(packageId);
  if (!pkg) return null;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-20">
      <Helmet>
        <title>{pkg.metaTitle}</title>
        <meta name="description" content={pkg.metaDescription} />
        <link rel="canonical" href={`https://www.thesmartchoicetours.com${pkg.slug}`} />
        <meta property="og:title" content={pkg.metaTitle} />
        <meta property="og:description" content={pkg.metaDescription} />
        <meta property="og:image" content={`https://www.thesmartchoicetours.com${pkg.heroImage}`} />
        <meta property="og:url" content={`https://www.thesmartchoicetours.com${pkg.slug}`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'TouristTrip',
          name: pkg.name,
          description: pkg.metaDescription,
          provider: { '@type': 'TravelAgency', name: 'Smart Choice Tour and Travels', telephone: '+91-8273490102' },
          offers: { '@type': 'Offer', price: pkg.startingFrom.replace(/[^0-9]/g, ''), priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
        })}</script>
      </Helmet>

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Tour Packages', path: '/services' },
        { label: pkg.name },
      ]} />

      {/* Hero */}
      <div className="relative h-80 md:h-[420px] w-full">
        <img src={pkg.heroImage} alt={`${pkg.name} — Smart Choice Tour & Travels Haridwar`} className="absolute inset-0 w-full h-full object-cover" loading="eager" fetchpriority="high" width="1920" height="1080" decoding="async" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center container mx-auto px-4">
          <div className="text-center text-white max-w-4xl">
            <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-3">Uttarakhand Tourism</p>
            <h1 className="text-3xl md:text-5xl font-bold font-poppins mb-4 leading-tight">{pkg.tagline}</h1>
            <p className="text-slate-200 text-lg">{pkg.destinations.join(' · ')}</p>
          </div>
        </div>
      </div>

      {/* Quick Info */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: <FaClock className="text-primary" />, label: 'Duration', value: pkg.duration },
              { icon: <FaMapMarkerAlt className="text-primary" />, label: 'Starting From', value: `${pkg.startingFrom} / person` },
              { icon: <FaUsers className="text-primary" />, label: 'Group Size', value: pkg.groupSize },
              { icon: <FaStar className="text-yellow-400" />, label: 'Rating', value: '4.9★ (7 Reviews)' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="mb-1">{item.icon}</div>
                <span className="text-xs text-slate-500">{item.label}</span>
                <span className="font-semibold text-slate-800 text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">

            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold font-poppins text-slate-800 mb-4">Package Overview</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Smart Choice Tour and Travels offers the <strong>{pkg.name}</strong> from Haridwar with an experienced driver, comfortable AC vehicle, and fully flexible itinerary. Based in Bhimgoda, Haridwar, we serve pilgrims and tourists with transparent pricing starting from <strong>{pkg.startingFrom} per person</strong>.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Whether you are a first-time visitor or a seasoned traveler, our team ensures a safe, comfortable, and memorable journey. Call us at +91 8273490102 or WhatsApp for a free personalized quote.
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-2xl font-bold font-poppins text-slate-800 mb-5">Package Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.highlights.map((h, i) => (
                  <div key={i} className="flex items-start space-x-3 bg-green-50 rounded-lg p-3">
                    <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={14} />
                    <span className="text-slate-700 text-sm">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <h2 className="text-2xl font-bold font-poppins text-slate-800 mb-5">Day-by-Day Itinerary</h2>
              <div className="space-y-4">
                {pkg.itinerary.map((day, i) => (
                  <div key={i} className="flex space-x-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">{day.day}</div>
                      {i < pkg.itinerary.length - 1 && <div className="w-0.5 bg-slate-200 flex-grow mt-2" />}
                    </div>
                    <div className="pb-5">
                      <h3 className="font-bold text-slate-800 mb-1">{day.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions/Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold font-poppins text-slate-800 mb-4">What's Included</h2>
                <ul className="space-y-2">
                  {pkg.inclusions.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={13} />
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
                      <FaTimesCircle className="text-red-400 mt-0.5 flex-shrink-0" size={13} />
                      <span className="text-slate-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6">
                <p className="text-slate-500 text-sm mb-1">Starting from</p>
                <p className="text-3xl font-bold text-primary mb-1">{pkg.startingFrom}</p>
                <p className="text-slate-500 text-xs mb-6">per person (group pricing)</p>
                <a
                  href={`https://wa.me/918273490102?text=Hello%20I%20want%20to%20book%20the%20${encodeURIComponent(pkg.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold text-lg mb-3 transition-colors"
                  onClick={() => {
                    if (typeof window.gtag === 'function') {
                      window.gtag('event', 'package_enquiry', { package_name: pkg.name });
                    }
                  }}
                >
                  <FaWhatsapp className="inline mr-2" /> Book on WhatsApp
                </a>
                <a
                  href="tel:+918273490102"
                  className="block w-full text-center bg-primary hover:bg-primary-dark text-white py-3 rounded-xl font-semibold mb-4 transition-colors"
                  onClick={() => {
                    if (typeof window.gtag === 'function') {
                      window.gtag('event', 'package_enquiry', { package_name: pkg.name });
                    }
                  }}
                >
                  <FaPhoneAlt className="inline mr-2" size={14} /> Call +91 8273490102
                </a>
                <Link
                  to="/book"
                  className="block w-full text-center border-2 border-primary text-primary hover:bg-primary hover:text-white py-3 rounded-xl font-semibold transition-colors"
                  onClick={() => {
                    if (typeof window.gtag === 'function') {
                      window.gtag('event', 'package_enquiry', { package_name: pkg.name });
                    }
                  }}
                >
                  Fill Booking Form
                </Link>
                <div className="mt-5 pt-5 border-t border-slate-200 space-y-2">
                  {['Free itinerary consultation', 'Customizable package', 'No hidden charges', '24/7 driver support'].map((f, i) => (
                    <div key={i} className="flex items-center text-sm text-slate-600">
                      <FaCheckCircle className="text-green-500 mr-2" size={12} /> {f}
                    </div>
                  ))}
                </div>
              </div>

              {relatedPackages && (
                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                  <h3 className="font-bold text-slate-800 mb-4">Related Packages</h3>
                  <ul className="space-y-2">
                    {relatedPackages.map((rp, i) => (
                      <li key={i}><Link to={rp.link} className="text-primary hover:underline text-sm">→ {rp.label}</Link></li>
                    ))}
                    {relatedGuide && (
                      <li><Link to={relatedGuide.link} className="text-primary hover:underline text-sm">→ {relatedGuide.label}</Link></li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <FAQSection faqs={pkg.faqs} title={`${pkg.shortName} — Frequently Asked Questions`} />
      </div>
    </motion.div>
  );
};

export default PackagePage;
