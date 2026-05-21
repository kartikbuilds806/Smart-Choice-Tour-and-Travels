import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaUserFriends, FaLuggageCart, FaCogs } from 'react-icons/fa';

const Cars = () => {
  const fleet = [
    { name: 'Innova Crysta', img: '/images/Our Premium fleet/Toyata crysta.jpg', desc: 'Premium comfort for outstation trips and long journeys.', capacity: '6+1 Seater', type: 'SUV / Premium' },
    { name: 'Swift Dzire', img: '/images/Our Premium fleet/Dzire.webp', desc: 'Budget-friendly sedan perfect for small families.', capacity: '4+1 Seater', type: 'Sedan' },
    { name: 'Ertiga', img: '/images/Our Premium fleet/Ertiga.jpg', desc: 'Versatile MPV offering great space and comfort.', capacity: '6+1 Seater', type: 'SUV' },
    { name: 'Tempo Traveller', img: '/images/Our Premium fleet/tempo-traveler.jpg', desc: 'Ideal for large group tours and corporate trips.', capacity: '12 / 16 Seater', type: 'Van / Bus' },
    { name: 'Innova', img: '/images/Our Premium fleet/Innova.jpg', desc: 'Classic reliable MUV for smooth family travels.', capacity: '6+1 Seater', type: 'MUV' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-20">
      <Helmet>
        <title>Car & Taxi Rental Service | Smart Choice Tour & Travels</title>
        <meta name="description" content="Browse our premium fleet of cars and taxi services for outstation trips, airport transfers, and local sightseeing." />
      </Helmet>
      
      <div className="bg-slate-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/30 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Our Premium Fleet</h1>
          <p className="text-blue-200 max-w-2xl mx-auto">Choose from our wide range of well-maintained, sanitized, and comfortable vehicles.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleet.map((car, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100 flex flex-col"
            >
              <div className="h-56 bg-slate-200 relative">
                <img src={car.img} alt={car.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold rounded-full text-slate-800 shadow-sm">
                  {car.type}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold font-poppins mb-2 text-slate-800">{car.name}</h3>
                <p className="text-slate-600 flex-grow mb-6 text-sm">{car.desc}</p>
                
                <div className="flex justify-between items-center mb-6 pt-4 border-t border-slate-100">
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
                  href={`https://wa.me/918273490102?text=Hello%20I%20want%20to%20book%20the%20${car.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-gradient-to-r from-primary to-blue-500 hover:from-primary-dark hover:to-primary text-white font-semibold rounded-xl text-center shadow-lg hover:shadow-xl transition-all"
                >
                  Book on WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Cars;
