// src/components/TrustBadges.jsx
// Trust signals and social proof component

import { FaStar, FaShieldAlt, FaUsers, FaAward, FaThumbsUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TrustBadges = ({ variant = 'horizontal' }) => {
  const badges = [
    { icon: <FaStar className="text-yellow-400" size={22} />, label: '4.9★ Rating', sublabel: '7 Google Reviews' },
    { icon: <FaUsers className="text-primary" size={22} />, label: '500+ Happy', sublabel: 'Customers Served' },
    { icon: <FaShieldAlt className="text-green-600" size={22} />, label: '100% Safe', sublabel: 'Verified Drivers' },
    { icon: <FaAward className="text-accent" size={22} />, label: 'Trusted Agency', sublabel: 'Based in Haridwar' },
    { icon: <FaThumbsUp className="text-blue-500" size={22} />, label: '24/7 Support', sublabel: 'Always Available' },
  ];

  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {badges.map((b, i) => (
          <div key={i} className="flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
            {b.icon}
            <span className="text-sm font-semibold text-slate-700">{b.label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white py-10 border-y border-slate-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="mb-2">{badge.icon}</div>
              <p className="font-bold text-slate-800 text-sm">{badge.label}</p>
              <p className="text-xs text-slate-500">{badge.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
