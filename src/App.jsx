import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import SpecialOfferButton from './components/SpecialOfferButton';
import SpecialOfferModal from './components/SpecialOfferModal';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Cars from './pages/Cars';
import Gallery from './pages/Gallery';
import Book from './pages/Book';
import Contact from './pages/Contact';
import Guides from './pages/Guides';
import GuideDetail from './pages/GuideDetail';

function AppContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  // Show offer button and modal only on Home ("/") and Services ("/services") routes
  const showSpecialOffer = location.pathname === '/' || location.pathname === '/services';

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/:id" element={<GuideDetail />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />

      {/* Conditionally mount/render Special Offer Floating Button & Popup Modal */}
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
