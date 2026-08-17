import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import SpecialOfferButton from './components/SpecialOfferButton';
import SpecialOfferModal from './components/SpecialOfferModal';
import BotpressWidget from './components/BotpressWidget';

// Core Page (Static for fastest immediate load)
import Home from './pages/Home';

// Lazy-loaded Secondary Pages
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Cars = lazy(() => import('./pages/Cars'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Book = lazy(() => import('./pages/Book'));
const Contact = lazy(() => import('./pages/Contact'));
const Guides = lazy(() => import('./pages/Guides'));
const GuideDetail = lazy(() => import('./pages/GuideDetail'));

// Lazy-loaded Tour Package Pages
const CharDham = lazy(() => import('./pages/packages/CharDham'));
const DoDham = lazy(() => import('./pages/packages/DoDham'));
const Kedarnath = lazy(() => import('./pages/packages/Kedarnath'));
const Mussoorie = lazy(() => import('./pages/packages/Mussoorie'));
const Nainital = lazy(() => import('./pages/packages/Nainital'));
const Rishikesh = lazy(() => import('./pages/packages/Rishikesh'));
const Badrinath = lazy(() => import('./pages/packages/Badrinath'));
const HaridwarSightseeing = lazy(() => import('./pages/packages/HaridwarSightseeing'));
const NotFound = lazy(() => import('./pages/NotFound'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const showSpecialOffer = location.pathname === '/' || location.pathname === '/services';

  useEffect(() => {
    const handleGlobalClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';

      // 1. whatsapp_click
      if (href.includes('wa.me')) {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'whatsapp_click', {
            event_category: 'engagement',
            event_label: href
          });
        }
      }

      // 2. phone_click
      if (href.startsWith('tel:')) {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'phone_click', {
            event_category: 'engagement',
            event_label: href
          });
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-20">
        <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
          <Routes>
            {/* Core Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/book" element={<Book />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/guides/:id" element={<GuideDetail />} />

            {/* Tour Package Routes */}
            <Route path="/packages/char-dham-yatra" element={<CharDham />} />
            <Route path="/packages/do-dham-yatra" element={<DoDham />} />
            <Route path="/packages/kedarnath" element={<Kedarnath />} />
            <Route path="/packages/mussoorie" element={<Mussoorie />} />
            <Route path="/packages/nainital" element={<Nainital />} />
            <Route path="/packages/rishikesh" element={<Rishikesh />} />
            <Route path="/packages/badrinath" element={<Badrinath />} />
            <Route path="/packages/haridwar-sightseeing" element={<HaridwarSightseeing />} />

            {/* Fallback 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingButtons />
      <BotpressWidget />

      {showSpecialOffer && (
        <>
          <SpecialOfferButton setIsModalOpen={setIsModalOpen} />
          <SpecialOfferModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
