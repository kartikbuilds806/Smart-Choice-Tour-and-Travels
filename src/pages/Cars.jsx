import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaUserFriends, FaCogs, FaWhatsapp } from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb';
import FAQSection from '../components/FAQSection';

const carsFaqs = [
  { question: 'What is the taxi fare from Haridwar to Kedarnath?', answer: 'Haridwar to Gaurikund (Kedarnath base) taxi fare is approximately ₹9,000-11,000 for a Swift Dzire (4 pax), ₹16,000-20,000 for an Innova Crysta (7 pax), and ₹25,000-30,000 for a Tempo Traveller (12-16 pax). Contact us for current 2026 rates.' },
  { question: 'How much is a taxi from Haridwar to Mussoorie?', answer: 'A Haridwar to Mussoorie cab fare (one way) is approximately ₹2,000-2,500 for a Dzire (4 pax) and ₹3,000-3,500 for an Innova. For a round trip (day trip), the fare ranges from ₹3,500-5,000. WhatsApp for confirmed rates.' },
  { question: 'Which vehicle is best for Char Dham Yatra?', answer: 'For Char Dham Yatra, we recommend the Innova Crysta (6+1 seater) for families of 4-6. It offers the best combination of comfort, space, and capability on mountain roads. For larger groups, the Tempo Traveller (12-16 seater) is economical.' },
  { question: 'Do your vehicles have GPS tracking?', answer: 'Yes, all our vehicles are GPS-tracked for safety and route monitoring. Our drivers carry phones with navigation for all mountain routes. All vehicles are fully insured, sanitized, and maintained regularly.' },
  { question: 'Do you offer outstation taxi from Haridwar to Delhi?', answer: 'Yes! We provide outstation taxi from Haridwar to Delhi (approx 230 km) and all major cities. Haridwar to Delhi taxi starts from ₹4,000-5,000 for a Dzire. We also operate Haridwar to Dehradun, Rishikesh, Agra, Jaipur routes.' },
];

const Cars = () => {
  const fleet = [
    { name: 'Innova Crysta', img: '/images/Our Premium fleet/Toyata crysta.jpg', desc: 'Premium comfort for Char Dham Yatra and long outstation trips. Best choice for 4-6 people.', capacity: '6+1 Seater', type: 'Premium SUV', bestFor: 'Char Dham, Long Trips' },
    { name: 'Swift Dzire', img: '/images/Our Premium fleet/Dzire.webp', desc: 'Budget-friendly sedan perfect for small families and couples. Ideal for Mussoorie and Rishikesh trips.', capacity: '4+1 Seater', type: 'Sedan', bestFor: 'Mussoorie, Rishikesh' },
    { name: 'Ertiga', img: '/images/Our Premium fleet/Ertiga.jpg', desc: 'Versatile MPV offering excellent space and comfort for families of 5-6.', capacity: '6+1 Seater', type: 'MPV', bestFor: 'Family Tours, Nainital' },
    { name: 'Tempo Traveller', img: '/images/Our Premium fleet/tempo-traveler.jpg', desc: 'Ideal for large group tours, corporate trips, and pilgrimage groups. Available in 12 and 16 seater.', capacity: '12 / 16 Seater', type: 'Group Van', bestFor: 'Group Tours, Yatras' },
    { name: 'Innova', img: '/images/Our Premium fleet/Innova.jpg', desc: 'Classic reliable MUV for smooth family travels across Uttarakhand and North India.', capacity: '6+1 Seater', type: 'MUV', bestFor: 'Family, Kedarnath' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-20">
      <Helmet>
        <title>Taxi & Car Rental in Haridwar | Innova, Dzire, Tempo Traveller — Smart Choice Tours</title>
        <meta name="description" content="Hire taxi & car rental in Haridwar for Char Dham Yatra, Kedarnath, Mussoorie & airport transfers. Innova Crysta, Swift Dzire, Tempo Traveller. Starting ₹800. Call +91 8273490102." />
        <link rel="canonical" href="https://www.thesmartchoicetours.com/cars" />
        <meta property="og:title" content="Taxi & Car Rental in Haridwar | Smart Choice Tour & Travels" />
        <meta property="og:description" content="Book taxi in Haridwar — Innova Crysta, Swift Dzire, Tempo Traveller. Char Dham, Kedarnath, Mussoorie. Transparent pricing. Call +91 8273490102." />
        <meta property="og:url" content="https://www.thesmartchoicetours.com/cars" />
      </Helmet>

      <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Taxi & Car Rental Haridwar' }]} />

      <div className="bg-slate-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/30 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Taxi & Car Rental in Haridwar
          </h1>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Innova Crysta · Swift Dzire · Ertiga · Tempo Traveller — All AC, GPS-Tracked, Sanitized
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 max-w-6xl">
        <p className="text-slate-600 leading-relaxed text-center mb-12 max-w-4xl mx-auto">
          Our premium fleet of well-maintained AC vehicles is available for <Link to="/packages/char-dham-yatra" className="text-primary hover:underline font-medium">Char Dham Yatra</Link>, <Link to="/packages/kedarnath" className="text-primary hover:underline font-medium">Kedarnath trips</Link>, <Link to="/packages/mussoorie" className="text-primary hover:underline font-medium">Mussoorie day trips</Link>, airport transfers from Jolly Grant (Dehradun), and all outstation travel from Haridwar. All cars are sanitized, GPS-tracked, and driven by experienced mountain drivers. <Link to="/book" className="text-primary hover:underline font-medium">Book your taxi now</Link> or call +91 8273490102.
        </p>

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
                <h2 className="text-2xl font-bold font-poppins mb-2 text-slate-800">{car.name}</h2>
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

        {/* Fare Guide */}
        <div className="mt-16 bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <h2 className="text-2xl font-bold font-poppins text-slate-800 mb-6 text-center">Approximate Taxi Fare Guide from Haridwar</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left py-3 px-4 rounded-tl-lg">Destination</th>
                  <th className="text-center py-3 px-4">Dzire (4 pax)</th>
                  <th className="text-center py-3 px-4">Innova (7 pax)</th>
                  <th className="text-center py-3 px-4 rounded-tr-lg">Tempo (12 pax)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { dest: 'Haridwar → Rishikesh', dzire: '₹600-800', innova: '₹1,000-1,200', tempo: '₹2,000-2,500' },
                  { dest: 'Haridwar → Mussoorie', dzire: '₹2,000-2,500', innova: '₹3,000-3,500', tempo: '₹5,500-7,000' },
                  { dest: 'Haridwar → Dehradun', dzire: '₹1,200-1,500', innova: '₹2,000-2,500', tempo: '₹3,500-4,500' },
                  { dest: 'Haridwar → Nainital', dzire: '₹4,500-5,500', innova: '₹6,500-8,000', tempo: '₹12,000-15,000' },
                  { dest: 'Haridwar → Gaurikund (Kedarnath)', dzire: '₹9,000-11,000', innova: '₹16,000-20,000', tempo: '₹25,000-30,000' },
                  { dest: 'Haridwar → Badrinath', dzire: '₹9,500-11,500', innova: '₹16,500-21,000', tempo: '₹26,000-32,000' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="py-3 px-4 font-medium text-slate-700">{row.dest}</td>
                    <td className="py-3 px-4 text-center text-slate-600">{row.dzire}</td>
                    <td className="py-3 px-4 text-center text-slate-600">{row.innova}</td>
                    <td className="py-3 px-4 text-center text-slate-600">{row.tempo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs text-center mt-4">*Above rates are approximate one-way fares. Actual rates may vary based on season, exact route, and waiting charges. <Link to="/book" className="text-primary hover:underline">Get exact quote</Link> via WhatsApp.</p>
        </div>
      </div>

      <FAQSection faqs={carsFaqs} title="Taxi Service Haridwar — FAQs" />
    </motion.div>
  );
};

export default Cars;
