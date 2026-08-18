import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaUserFriends, FaCogs, FaWhatsapp, FaPlane, FaBus, FaTaxi, FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb';
import FAQSection from '../components/FAQSection';

const carsFaqs = [
  { question: 'What is the taxi fare from Dehradun Airport (Jolly Grant) to Haridwar?', answer: 'The taxi fare from Dehradun Airport (Jolly Grant) to Haridwar is ₹1,200 to ₹1,500 for a Sedan (Dzire/Etios), ₹1,800 to ₹2,200 for an SUV (Ertiga/Innova), and ₹2,800 to ₹3,500 for a 12-seater Tempo Traveller. We provide 24/7 airport pickup and drop services.' },
  { question: 'What is the taxi fare from Haridwar to Kedarnath?', answer: 'Haridwar to Gaurikund (Kedarnath base) taxi fare is approximately ₹9,000-11,000 for a Swift Dzire (4 pax), ₹16,000-20,000 for an Innova Crysta (7 pax), and ₹25,000-30,000 for a Tempo Traveller (12-16 pax). Rates include fuel, tolls, and driver allowance.' },
  { question: 'How much is the rental cost for a Tempo Traveller in Haridwar?', answer: 'Tempo Traveller rental in Haridwar starts from ₹2,500 per day for local sightseeing and ₹3,500 to ₹4,500 per day for outstation & Char Dham Yatra trips (covering 250 km/day). 12-seater, 16-seater, and 26-seater AC Tempo Travellers are available.' },
  { question: 'How much is a cab from Haridwar to Mussoorie?', answer: 'A Haridwar to Mussoorie cab fare is ₹2,000-2,500 for a Dzire (one-way) and ₹3,000-3,500 for an Innova. For a full-day return sightseeing trip covering Kempty Falls and Mall Road, rates range from ₹3,500 to ₹5,000.' },
  { question: 'Which vehicle is best for Char Dham Yatra from Haridwar?', answer: 'For Char Dham Yatra, we recommend the Innova Crysta (6+1 seater) for families of 4-6 due to superior comfort on mountain roads. For larger groups (8-16 pax), the AC Tempo Traveller offers the best value and comfort.' },
  { question: 'Do your outstation cabs operate from Haridwar to Delhi?', answer: 'Yes! We provide outstation cabs from Haridwar to Delhi Airport (IGI) and New Delhi Railway Station (approx 230 km). Haridwar to Delhi taxi fare starts from ₹4,000 for Sedan and ₹6,000 for Innova Crysta.' },
  { question: 'Are your cabs sanitized and equipped with GPS?', answer: 'Yes, all our vehicles are GPS-tracked, fully sanitized, and operated by experienced mountain drivers who are well-versed with Uttarakhand hill routes, safety rules, and weather conditions.' },
];

const Cars = () => {
  const fleet = [
    { name: 'Innova Crysta', img: '/images/Our Premium fleet/Toyata crysta.jpg', desc: 'Premium comfort for Char Dham Yatra, Do Dham Yatra, and long outstation trips. Best choice for 4-6 people.', capacity: '6+1 Seater', type: 'Premium SUV', bestFor: 'Char Dham, Long Trips' },
    { name: 'Swift Dzire', img: '/images/Our Premium fleet/Dzire.webp', desc: 'Budget-friendly sedan perfect for small families, airport transfers, and Dehradun/Mussoorie trips.', capacity: '4+1 Seater', type: 'Sedan', bestFor: 'Airport, Mussoorie' },
    { name: 'Ertiga', img: '/images/Our Premium fleet/Ertiga.jpg', desc: 'Versatile MPV offering excellent space and comfort for family tours across Haridwar, Rishikesh & Nainital.', capacity: '6+1 Seater', type: 'MPV', bestFor: 'Family Tours, Nainital' },
    { name: 'Tempo Traveller', img: '/images/Our Premium fleet/tempo-traveler.jpg', desc: 'Ideal for group tours, corporate trips, and pilgrimage groups. Available in 12, 16, and 26 seater options.', capacity: '12 / 16 Seater', type: 'Group Van', bestFor: 'Group Tours, Yatras' },
    { name: 'Innova', img: '/images/Our Premium fleet/Innova.jpg', desc: 'Classic reliable MUV for smooth family travels across Uttarakhand, Kedarnath & Badrinath routes.', capacity: '6+1 Seater', type: 'MUV', bestFor: 'Family, Kedarnath' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-20">
      <Helmet>
        <title>Haridwar Taxi Booking & Cab Rental Service | Smart Choice Tours</title>
        <meta name="description" content="Instant Haridwar taxi booking & Dehradun airport cabs starting ₹1,200. Rent Innova Crysta, Dzire & Tempo Traveller for Char Dham Yatra. Call +91 8273490102." />
        <link rel="canonical" href="https://www.thesmartchoicetours.com/cars" />
        <meta property="og:title" content="Haridwar Taxi Booking & Cab Rental Service | Smart Choice Tours" />
        <meta property="og:description" content="Instant Haridwar taxi booking & Dehradun airport cabs starting ₹1,200. Rent Innova Crysta, Dzire & Tempo Traveller for Char Dham Yatra. Call +91 8273490102." />
        <meta property="og:url" content="https://www.thesmartchoicetours.com/cars" />
        <script type="application/ld+json">
          {JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'TaxiService',
              'name': 'Smart Choice Taxi Service & Car Rental Haridwar',
              'provider': {
                '@type': 'TravelAgency',
                'name': 'Smart Choice Tour and Travels',
                'telephone': '+91-8273490102',
                'url': 'https://www.thesmartchoicetours.com'
              },
              'areaServed': ['Haridwar', 'Dehradun', 'Rishikesh', 'Mussoorie', 'Kedarnath', 'Uttarakhand'],
              'description': 'Outstation taxi service, Haridwar taxi booking, Dehradun airport transfer, Tempo Traveller rental, and car booking in Haridwar for Char Dham Yatra.'
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.thesmartchoicetours.com' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Haridwar Taxi Booking & Cab Rental', 'item': 'https://www.thesmartchoicetours.com/cars' }
              ]
            }
          ])}
        </script>
      </Helmet>

      <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Haridwar Taxi Booking' }]} />

      <div className="bg-slate-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/30 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-2">Best Car Rental & Outstation Cabs</p>
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Haridwar Taxi Booking & Airport Transfers
          </h1>
          <p className="text-blue-200 max-w-3xl mx-auto text-base md:text-lg">
            Innova Crysta · Swift Dzire · Ertiga · Tempo Traveller Hire — 24/7 Pickups, Transparent Rates & Hill Drivers
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 max-w-6xl">
        <p className="text-slate-600 leading-relaxed text-center mb-12 max-w-4xl mx-auto text-lg">
          Smart Choice Tour and Travels provides reliable <strong className="text-slate-800">taxi service in Haridwar</strong>, <strong className="text-slate-800">Dehradun Airport (Jolly Grant) transfers</strong>, outstation cabs to Delhi, and specialized vehicle rentals for <Link to="/packages/char-dham-yatra" className="text-primary hover:underline font-medium">Char Dham Yatra</Link>, <Link to="/packages/kedarnath" className="text-primary hover:underline font-medium">Kedarnath</Link>, <Link to="/packages/mussoorie" className="text-primary hover:underline font-medium">Mussoorie</Link>, and <Link to="/packages/nainital" className="text-primary hover:underline font-medium">Nainital</Link>. Call +91 8273490102 for instant booking.
        </p>

        {/* Fleet Grid */}
        <h2 className="text-3xl font-bold font-poppins text-slate-800 mb-8 text-center">Our Premium Taxi Fleet in Haridwar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleet.map((car, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100 flex flex-col"
            >
              <div className="h-56 bg-slate-200 relative">
                <img
                  src={car.img}
                  alt={`${car.name} taxi for hire in Haridwar — Smart Choice Tours`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="600"
                  height="400"
                  decoding="async"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold rounded-full text-slate-800 shadow-sm">
                  {car.type}
                </div>
                <div className="absolute bottom-3 left-3 bg-primary/90 text-white text-xs px-2 py-1 rounded-full">
                  Best for: {car.bestFor}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold font-poppins mb-2 text-slate-800">{car.name}</h3>
                <p className="text-slate-600 flex-grow mb-4 text-sm leading-relaxed">{car.desc}</p>
                <div className="flex justify-between items-center mb-5 pt-4 border-t border-slate-100">
                  <div className="flex items-center text-slate-700 text-sm font-medium">
                    <FaUserFriends className="text-primary mr-2" />
                    {car.capacity}
                  </div>
                  <div className="flex items-center text-slate-700 text-sm font-medium">
                    <FaCogs className="text-primary mr-2" />
                    AC / Heater
                  </div>
                </div>
                <a
                  href={`https://wa.me/918273490102?text=Hello%20I%20want%20to%20book%20the%20${encodeURIComponent(car.name)}%20for%20my%20trip`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-gradient-to-r from-primary to-blue-500 hover:from-primary-dark hover:to-primary text-white font-semibold rounded-xl text-center shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
                >
                  <FaWhatsapp className="mr-2" /> Book {car.name} on WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Airport Transfers Highlight */}
        <div className="mt-16 bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <span className="bg-accent text-slate-900 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider inline-flex items-center">
                <FaPlane className="mr-2" /> 24/7 Airport Cab Service
              </span>
              <h2 className="text-3xl font-bold font-poppins">Dehradun Airport (Jolly Grant) to Haridwar Taxi</h2>
              <p className="text-blue-200 leading-relaxed text-sm md:text-base">
                Landing at Jolly Grant Airport (DED), Dehradun? We provide instant pre-booked airport cabs from Dehradun Airport to Haridwar, Rishikesh, Mussoorie, and directly for Char Dham Yatra starting points. Driver waiting with name board, zero flight delay surge charges.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                  <p className="text-xs text-blue-300">Sedan (4 Seater)</p>
                  <p className="text-xl font-bold text-accent">₹1,200 - ₹1,500</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                  <p className="text-xs text-blue-300">SUV (Ertiga/Innova)</p>
                  <p className="text-xl font-bold text-accent">₹1,800 - ₹2,200</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center col-span-2 sm:col-span-1">
                  <p className="text-xs text-blue-300">Tempo Traveller</p>
                  <p className="text-xl font-bold text-accent">₹2,800 - ₹3,500</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 flex flex-col space-y-3">
              <a
                href="https://wa.me/918273490102?text=Hello%20I%20need%20Dehradun%20Airport%20to%20Haridwar%20Taxi"
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-2xl text-center shadow-lg transition-colors flex items-center justify-center text-lg"
              >
                <FaWhatsapp className="mr-2 text-xl" /> Book Airport Taxi
              </a>
              <a
                href="tel:+918273490102"
                className="w-full py-3 bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-2xl text-center transition-colors flex items-center justify-center"
              >
                <FaPhoneAlt className="mr-2" /> Call +91 8273490102
              </a>
            </div>
          </div>
        </div>

        {/* Tempo Traveller Rental Section */}
        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Group Travel Solution</span>
            <h2 className="text-3xl font-bold font-poppins text-slate-800 mt-2">Tempo Traveller Rental in Haridwar</h2>
            <p className="text-slate-600 mt-3 leading-relaxed">
              Traveling in a large family group or corporate team? Rent our 12-seater, 16-seater, or 26-seater luxury AC Tempo Travellers for Char Dham Yatra, weddings, and North India outstation tours.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-700 text-sm">
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center"><FaBus className="text-primary mr-2" /> 12 Seater Tempo</h3>
              <p className="text-slate-600">Pushback seats, ample luggage boot space, powerful AC, perfect for Char Dham group of 8-10 pilgrims.</p>
              <p className="text-primary font-bold">Starts ₹3,500 / day</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center"><FaBus className="text-primary mr-2" /> 16 Seater Tempo</h3>
              <p className="text-slate-600">Spacious 2x1 seating layout, LED TV, music system, dual AC for long mountain journeys to Kedarnath & Badrinath.</p>
              <p className="text-primary font-bold">Starts ₹4,200 / day</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center"><FaBus className="text-primary mr-2" /> Maharaja Tempo</h3>
              <p className="text-slate-600">Ultra-luxury Maharaja recliner seats, individual charging points, extra legroom for premium group travel.</p>
              <p className="text-primary font-bold">Starts ₹5,500 / day</p>
            </div>
          </div>
        </div>

        {/* Fare Guide Table */}
        <div className="mt-16 bg-slate-50 rounded-3xl p-8 border border-slate-200">
          <h2 className="text-2xl font-bold font-poppins text-slate-800 mb-6 text-center">Haridwar Taxi Fare Rate Chart 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left py-3 px-4 rounded-tl-lg">Route / Destination</th>
                  <th className="text-center py-3 px-4">Dzire (4 pax)</th>
                  <th className="text-center py-3 px-4">Innova Crysta (6-7 pax)</th>
                  <th className="text-center py-3 px-4 rounded-tr-lg">Tempo (12-16 pax)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { dest: 'Dehradun Airport (Jolly Grant) → Haridwar', dzire: '₹1,200 - ₹1,500', innova: '₹2,000 - ₹2,500', tempo: '₹3,200 - ₹4,000' },
                  { dest: 'Haridwar → Rishikesh (Sightseeing)', dzire: '₹1,200 - ₹1,500', innova: '₹2,000 - ₹2,500', tempo: '₹3,500 - ₹4,500' },
                  { dest: 'Haridwar → Mussoorie (Day Trip)', dzire: '₹3,500 - ₹4,000', innova: '₹5,000 - ₹6,000', tempo: '₹7,500 - ₹9,000' },
                  { dest: 'Haridwar → Delhi Airport (One Way)', dzire: '₹4,000 - ₹4,500', innova: '₹6,500 - ₹7,500', tempo: '₹10,500 - ₹12,000' },
                  { dest: 'Haridwar → Nainital (2 Days)', dzire: '₹6,500 - ₹7,500', innova: '₹9,500 - ₹11,000', tempo: '₹15,000 - ₹18,000' },
                  { dest: 'Haridwar → Gaurikund (Kedarnath Yatra)', dzire: '₹9,000 - ₹11,000', innova: '₹16,000 - ₹20,000', tempo: '₹25,000 - ₹30,000' },
                  { dest: 'Haridwar → Char Dham Yatra (12 Days)', dzire: '₹28,000 - ₹32,000', innova: '₹48,000 - ₹55,000', tempo: '₹68,000 - ₹80,000' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="py-3 px-4 font-medium text-slate-700">{row.dest}</td>
                    <td className="py-3 px-4 text-center text-slate-600">{row.dzire}</td>
                    <td className="py-3 px-4 text-center text-slate-600 font-semibold text-primary">{row.innova}</td>
                    <td className="py-3 px-4 text-center text-slate-600">{row.tempo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs text-center mt-4">*Fares include fuel, driver charges, toll taxes & parking. No hidden costs. <Link to="/book" className="text-primary hover:underline font-semibold">Book your cab now</Link>.</p>
        </div>
      </div>

      <FAQSection faqs={carsFaqs} title="Taxi Service Haridwar & Airport Transfer FAQs" />
    </motion.div>
  );
};

export default Cars;

