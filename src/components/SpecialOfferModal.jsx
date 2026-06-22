import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdClose } from 'react-icons/md';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

/**
 * SpecialOfferModal
 * 
 * KEY FIX: The poster image is a tall vertical flyer. Previous version had max-h-[92vh]
 * on the whole container which squished/cropped the image.
 * 
 * Solution:
 * - Modal container = fixed height 92vh, flex column, NO overflow on container itself
 * - Image wrapper = flex-1 + overflow-y-auto → image section scrolls independently
 * - CTA buttons = flex-shrink-0 → ALWAYS pinned/sticky at the bottom, never pushed off screen
 * - This means: user can scroll through the FULL poster image, CTAs always visible
 */
const SpecialOfferModal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <AnimatePresence>
      {isModalOpen && (
        /* BACKDROP */
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-md"
        >
          {/* MODAL CONTAINER
              - w-full max-w-md on mobile, max-w-xl on desktop
              - h-[92vh] fixed height so it never overflows the screen
              - flex flex-col so image section and CTA section stack vertically
              - overflow-hidden on container (scrolling handled inside) */}
          <motion.div
            initial={{ opacity: 0, y: -70, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md md:max-w-xl flex flex-col bg-[#080E1C] border border-amber-500/30 rounded-2xl shadow-[0_0_60px_rgba(245,166,35,0.3)] overflow-hidden text-white"
            style={{ height: '92vh' }}
          >
            {/* CLOSE BUTTON — always on top */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 z-50 p-2 text-white/80 hover:text-white bg-black/70 backdrop-blur-sm border border-white/10 rounded-full hover:bg-amber-500/20 transition-all duration-300 cursor-pointer shadow-lg"
              aria-label="Close special offer modal"
            >
              <MdClose size={22} />
            </button>

            {/* SCROLLABLE IMAGE SECTION
                - flex-1 means it takes all remaining height after CTA buttons
                - overflow-y-auto allows user to scroll through the full poster
                - The image is never cropped — it renders at full natural height */}
            <div className="flex-1 overflow-y-auto rounded-t-2xl">
              <img
                src="/images/Special-Offer/char-dham-special-offer.png"
                alt="Char Dham Yatra Special Package Offer — Smart Choice Tour & Travels"
                className="w-full h-auto object-contain block"
                loading="eager"
                width="600"
                height="900"
                decoding="async"
              />
            </div>

            {/* CTA BUTTONS — flex-shrink-0 = STICKY at bottom, never pushed off screen */}
            <div className="flex-shrink-0 p-4 md:p-5 bg-[#0A1128] border-t border-amber-500/20 flex flex-col sm:flex-row gap-3 rounded-b-2xl">
              {/* Call Now */}
              <a
                href="tel:+918273490102"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 font-black text-slate-900 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-xs md:text-sm uppercase tracking-wider"
                style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b, #e07b00)' }}
                onClick={() => {
                  if (typeof window.gtag === 'function') {
                    window.gtag('event', 'package_enquiry', { package_name: 'Char Dham Yatra Special Package' });
                  }
                }}
              >
                <FaPhoneAlt size={13} />
                Call Now — +91 8273490102
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918273490102?text=Hello,%20I%20am%20interested%20in%20booking%20the%20Char%20Dham%20Yatra%20Special%20Package."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 font-black text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-xs md:text-sm uppercase tracking-wider"
                onClick={() => {
                  if (typeof window.gtag === 'function') {
                    window.gtag('event', 'package_enquiry', { package_name: 'Char Dham Yatra Special Package' });
                  }
                }}
              >
                <FaWhatsapp size={17} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpecialOfferModal;
