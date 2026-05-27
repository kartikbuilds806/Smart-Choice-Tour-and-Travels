import { motion } from 'framer-motion';
import { BsStars } from 'react-icons/bs';

const SpecialOfferButton = ({ setIsModalOpen }) => {
  return (
    <motion.div
      className="fixed top-[80px] md:top-1/3 right-0 z-40 flex items-center justify-center cursor-pointer select-none"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0, scale: [1, 1.06, 1] }}
      transition={{
        opacity: { duration: 0.6, ease: 'easeOut', delay: 1.5 },
        x: { duration: 0.6, ease: 'easeOut', delay: 1.5 },
        scale: { duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 2.1 }
      }}
    >
      {/* Ping ring 1 */}
      <span className="absolute inset-0 rounded-l-2xl bg-amber-400 opacity-40 animate-ping" />
      {/* Ping ring 2 — staggered */}
      <span
        className="absolute inset-0 rounded-l-2xl bg-orange-300 opacity-20 animate-ping"
        style={{ animationDelay: '0.6s' }}
      />

      {/* THE BUTTON */}
      <button
        onClick={() => setIsModalOpen(true)}
        aria-label="View Special Service Offer"
        className="relative flex flex-col items-center justify-center gap-2 rounded-l-2xl rounded-r-none
                   py-8 px-3 md:py-10 md:px-4
                   text-white font-extrabold tracking-widest
                   shadow-[4px_0px_25px_rgba(245,166,35,0.65)]
                   hover:shadow-[4px_0px_35px_rgba(245,166,35,0.9)]
                   hover:brightness-110
                   active:scale-95
                   transition-all duration-300 cursor-pointer
                   hidden md:flex"
        style={{
          background: 'linear-gradient(180deg, #f5a623 0%, #e07b00 50%, #c45e00 100%)',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          transform: 'rotate(180deg)',
        }}
      >
        <BsStars size={18} style={{ transform: 'rotate(180deg)' }} />
        <span className="text-[11px] md:text-xs uppercase tracking-[0.2em]">Special Service</span>
        <BsStars size={18} style={{ transform: 'rotate(180deg)' }} />
      </button>

      {/* MOBILE VERSION — horizontal small tab */}
      <button
        onClick={() => setIsModalOpen(true)}
        aria-label="View Special Service Offer"
        className="relative flex items-center gap-1.5 rounded-l-xl rounded-r-none
                   px-3 py-2
                   text-white font-bold text-xs
                   shadow-[4px_0px_15px_rgba(245,166,35,0.6)]
                   active:scale-95 transition-all duration-300 cursor-pointer
                   flex md:hidden"
        style={{
          background: 'linear-gradient(135deg, #f5a623, #c45e00)',
        }}
      >
        🌟 <span>Offer</span>
      </button>
    </motion.div>
  );
};

export default SpecialOfferButton;
