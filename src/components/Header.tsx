import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onSearchOpen: () => void;
}

const navLinks = [
  { path: '/', label: 'Accueil' },
  { path: '/boutique', label: 'Boutique' },
  { path: '/bijoux', label: 'Bijoux' },
  { path: '/montres', label: 'Montres' },
  { path: '/a-propos', label: 'À Propos' },
  { path: '/contact', label: 'Contact' },
];

export default function Header({ onSearchOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-luxe-black/95 backdrop-blur-md border-b border-gold-500/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-gold-400">
                ASSIA
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm tracking-widest uppercase transition-colors duration-300 group ${
                    location.pathname === link.path
                      ? 'text-gold-400'
                      : 'text-cream-200 hover:text-gold-400'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gold-400 transition-all duration-300 ${
                      location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={onSearchOpen}
                className="p-2 text-cream-200 hover:text-gold-400 transition-colors"
                aria-label="Rechercher"
              >
                <Search className="w-5 h-5" />
              </button>
              <Link
                to="/boutique"
                className="p-2 text-cream-200 hover:text-gold-400 transition-colors hidden sm:block"
                aria-label="Boutique"
              >
                <ShoppingBag className="w-5 h-5" />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-cream-200 hover:text-gold-400 transition-colors"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-luxe-black/98 backdrop-blur-lg pt-24"
          >
            <nav className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`font-serif text-2xl tracking-wider ${
                      location.pathname === link.path ? 'text-gold-400' : 'text-cream-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
