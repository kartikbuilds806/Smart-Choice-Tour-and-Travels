import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-20">
      <Helmet>
        <title>Contact Smart Choice Tour & Travels | Haridwar Office</title>
        <meta name="description" content="Contact Smart Choice Tour & Travels in Haridwar. Located opp. Railway Station, Bhimgoda. Call +91 8273490102 or WhatsApp for instant tour & taxi quotes." />
        <link rel="canonical" href="https://www.thesmartchoicetours.com/contact" />
        <meta property="og:title" content="Contact Smart Choice Tour & Travels | Haridwar Office" />
        <meta property="og:description" content="Contact Smart Choice Tour & Travels in Haridwar. Located opp. Railway Station, Bhimgoda. Call +91 8273490102 or WhatsApp for instant tour & taxi quotes." />
        <meta property="og:url" content="https://www.thesmartchoicetours.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            'name': 'Contact Smart Choice Tour and Travels',
            'url': 'https://www.thesmartchoicetours.com/contact',
            'mainEntity': {
              '@type': 'TravelAgency',
              'name': 'Smart Choice Tour and Travels',
              'telephone': '+91-8273490102',
              'email': 'smartchoicetoursandtravels@gmail.com',
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': 'Opp. Railway Station, Bhimgoda, Devpura',
                'addressLocality': 'Haridwar',
                'addressRegion': 'Uttarakhand',
                'postalCode': '249401',
                'addressCountry': 'IN'
              },
              'openingHours': 'Mo-Su 08:00-21:00'
            }
          })}
        </script>
      </Helmet>
      
      <div className="bg-slate-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')] opacity-10 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Contact Us</h1>
          <p className="text-blue-200 max-w-2xl mx-auto">We are here to help you plan your perfect trip. Reach out to us anytime.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 max-w-6xl">
        <p className="text-slate-600 leading-relaxed text-center mb-12 max-w-4xl mx-auto">
          Get in touch with Smart Choice Tour and Travels — Haridwar's most trusted travel agency. We are located opposite Haridwar Railway Station, Shikhu Pur, Devpura, Haridwar, Uttarakhand 249401. <Link to="/about" className="text-primary hover:underline font-medium">Learn more about us</Link> or view our <Link to="/cars" className="text-primary hover:underline font-medium">taxi fleet and rates</Link>. Call us at +91 8273490102 or WhatsApp for instant booking. We are available 7 days a week from 8 AM to 9 PM.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-bold font-poppins text-slate-800 mb-6">Get In Touch</h2>
            <div className="w-16 h-1 bg-primary mb-8"></div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-4 rounded-full text-primary flex-shrink-0">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800">Office Address</h3>
                  <p className="text-slate-600 mt-1">Opp. Railway Station, Bhimgoda,<br/>Haridwar, Uttarakhand, India 249401</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-4 rounded-full text-primary flex-shrink-0">
                  <FaPhoneAlt size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800">Phone</h3>
                  <p className="text-slate-600 mt-1">
                    <a href="tel:+918273490102" className="hover:text-primary transition-colors">+91 8273490102</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-4 rounded-full text-green-600 flex-shrink-0">
                  <FaWhatsapp size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800">WhatsApp</h3>
                  <p className="text-slate-600 mt-1">
                    <a href="https://wa.me/918273490102?text=Hello" target="_blank" rel="noreferrer" className="hover:text-green-600 transition-colors">+91 8273490102</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-4 rounded-full text-primary flex-shrink-0">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800">Email Address</h3>
                  <p className="text-slate-600 mt-1">
                    <a href="mailto:smartchoicetoursandtravels@gmail.com" className="hover:text-primary transition-colors">smartchoicetoursandtravels@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-4 rounded-full text-primary flex-shrink-0">
                  <FaClock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800">Office Hours</h3>
                  <p className="text-slate-600 mt-1">Monday – Sunday: 8:00 AM – 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form / Map */}
          <div>
            <div className="bg-white p-2 rounded-2xl shadow-xl border border-slate-100 h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13778.118991667232!2d78.1563884!3d29.9575916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909470eb8ee5729%3A0x4c207908b98b9a11!2sHaridwar%20Railway%20Station!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.75rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Haridwar Location"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
