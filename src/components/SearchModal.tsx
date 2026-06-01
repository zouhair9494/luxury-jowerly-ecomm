import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import ProductModal from './ProductModal';
import type { Product } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const filteredProducts = query.length >= 2
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          p.subcategory.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-luxe-black/95 backdrop-blur-md"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto pt-24 px-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream-500" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Rechercher un produit..."
                  className="w-full pl-12 pr-12 py-4 bg-luxe-charcoal border border-gold-500/20 text-cream-100 placeholder-cream-600 text-lg focus:outline-none focus:border-gold-500/50 transition-colors"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-cream-500 hover:text-cream-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Results */}
              <div className="mt-6 max-h-[60vh] overflow-y-auto">
                {query.length < 2 ? (
                  <p className="text-cream-600 text-center py-8">
                    Tapez au moins 2 caractères pour rechercher
                  </p>
                ) : filteredProducts.length === 0 ? (
                  <p className="text-cream-600 text-center py-8">
                    Aucun produit trouvé pour "{query}"
                  </p>
                ) : (
                  <div className="space-y-3">
                    {filteredProducts.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => setSelectedProduct(product)}
                        className="w-full flex items-center gap-4 p-4 bg-luxe-charcoal/50 hover:bg-luxe-charcoal border border-gold-500/10 hover:border-gold-500/30 transition-all text-left group"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-sm"
                        />
                        <div className="flex-grow">
                          <p className="text-cream-100 font-medium group-hover:text-gold-400 transition-colors">
                            {product.name}
                          </p>
                          <p className="text-cream-500 text-sm">
                            {product.category === 'bijoux' ? 'Bijoux' : 'Montres'} — {product.subcategory}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-gold-400 font-medium">
                            {product.price.toLocaleString('fr-FR')} DH
                          </p>
                          <ArrowRight className="w-4 h-4 text-cream-600 group-hover:text-gold-400 transition-colors ml-auto mt-1" />
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
