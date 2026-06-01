import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import SpecialOfferButton from './components/SpecialOfferButton';
import SpecialOfferModal from './components/SpecialOfferModal';

// Core Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Cars from './pages/Cars';
import Gallery from './pages/Gallery';
import Book from './pages/Book';
import Contact from './pages/Contact';
import Guides from './pages/Guides';
import GuideDetail from './pages/GuideDetail';

// Tour Package Pages
import CharDham from './pages/packages/CharDham';
import Kedarnath from './pages/packages/Kedarnath';
import Mussoorie from './pages/packages/Mussoorie';
import Nainital from './pages/packages/Nainital';
import Rishikesh from './pages/packages/Rishikesh';
import Badrinath from './pages/packages/Badrinath';
import HaridwarSightseeing from './pages/packages/HaridwarSightseeing';

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

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-20">
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
          <Route path="/packages/kedarnath" element={<Kedarnath />} />
          <Route path="/packages/mussoorie" element={<Mussoorie />} />
          <Route path="/packages/nainital" element={<Nainital />} />
          <Route path="/packages/rishikesh" element={<Rishikesh />} />
          <Route path="/packages/badrinath" element={<Badrinath />} />
          <Route path="/packages/haridwar-sightseeing" element={<HaridwarSightseeing />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />

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
