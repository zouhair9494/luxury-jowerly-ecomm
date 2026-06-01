import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import SearchModal from './components/SearchModal';
import Home from './pages/Home';
import Boutique from './pages/Boutique';
import Bijoux from './pages/Bijoux';
import Montres from './pages/Montres';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-luxe-black text-cream-100">
        <Header onSearchOpen={() => setIsSearchOpen(true)} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/boutique" element={<Boutique />} />
            <Route path="/bijoux" element={<Bijoux />} />
            <Route path="/montres" element={<Montres />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton floating />
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      </div>
    </Router>
  );
}
