import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import Breadcrumb from '../components/Breadcrumb';

const images = [
  { src: '/images/Our Gallery/WhatsApp Image 2026-03-27 at 21.14.21.jpeg', alt: 'Happy tourists with Smart Choice Tour & Travels, Haridwar' },
  { src: '/images/Our Gallery/WhatsApp Image 2026-03-27 at 21.14.35.jpeg', alt: 'Char Dham Yatra tour group — Smart Choice Tours Haridwar' },
  { src: '/images/Our Gallery/WhatsApp Image 2026-03-27 at 21.14.36.jpeg', alt: 'Kedarnath pilgrimage tour — Smart Choice Tour & Travels' },
  { src: '/images/Our Gallery/WhatsApp Image 2026-03-27 at 21.14.37.jpeg', alt: 'Group tour to Uttarakhand hill stations — Smart Choice Tours' },
  { src: '/images/Our Gallery/WhatsApp Image 2026-03-27 at 21.14.39.jpeg', alt: 'Family tour package Uttarakhand — Smart Choice Travel' },
  { src: '/images/Our Gallery/WhatsApp Image 2026-03-27 at 21.14.40.jpeg', alt: 'Tourists at Haridwar Ganga Aarti — Smart Choice Tours' },
  { src: '/images/Our Gallery/WhatsApp Image 2026-03-27 at 21.14.41.jpeg', alt: 'Scenic Uttarakhand mountain road — Smart Choice Tour driver' },
  { src: '/images/Our Gallery/WhatsApp Image 2026-03-27 at 21.14.42.jpeg', alt: 'Happy customer review Smart Choice Tour & Travels Haridwar' },
  { src: '/images/Our Gallery/WhatsApp Image 2026-03-27 at 21.14.50.jpeg', alt: 'Tour group Char Dham Yatra from Haridwar — Smart Choice Tours' },
  { src: '/images/Popular Destination/haridwar.jpg', alt: 'Har Ki Pauri Haridwar — popular destination Smart Choice Tours' },
  { src: '/images/Popular Destination/Rishikesh.jpg', alt: 'Laxman Jhula Rishikesh — Rishikesh tour package Smart Choice' },
  { src: '/images/Popular Destination/Kedarnath-Temple.webp', alt: 'Kedarnath Temple Uttarakhand — Kedarnath tour from Haridwar' },
  { src: '/images/Popular Destination/Mussorie.jpg', alt: 'Mussoorie Queen of Hills — Mussoorie tour package Haridwar' },
  { src: '/images/Popular Destination/Nainital.jpg', alt: 'Nainital Lake view — Nainital tour package from Haridwar' },
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-20 min-h-screen">
      <Helmet>
        <title>Travel Gallery | Smart Choice Tour & Travels — Haridwar, Kedarnath, Mussoorie</title>
        <meta name="description" content="View photos of our happy customers, premium fleet, and beautiful destinations — Haridwar, Kedarnath, Mussoorie, Rishikesh, Nainital. Smart Choice Tour & Travels." />
        <link rel="canonical" href="https://www.thesmartchoicetours.com/gallery" />
      </Helmet>

      <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Travel Gallery' }]} />

      <div className="bg-slate-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Our Travel Gallery</h1>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Glimpses of our happy customers, premium fleet, and breathtaking destinations across Uttarakhand.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, idx) => (
            <motion.div
              layoutId={`img-container-${idx}`}
              key={idx}
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-xl transition-shadow group bg-slate-100"
              onClick={() => setSelectedImg(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                width="400"
                height="400"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 font-medium tracking-wider uppercase text-sm border border-white px-4 py-2 rounded">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 cursor-pointer"
            onClick={() => setSelectedImg(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-accent transition-colors z-50 p-2"
              onClick={() => setSelectedImg(null)}
              aria-label="Close image"
            >
              <FaTimes size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              src={selectedImg.src}
              alt={selectedImg.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-default"
              loading="lazy"
              width="1600"
              height="1200"
              decoding="async"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;
