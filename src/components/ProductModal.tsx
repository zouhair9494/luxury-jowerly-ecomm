import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import type { Product } from '../data/products';
import WhatsAppButton from './WhatsAppButton';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-luxe-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-luxe-charcoal border border-gold-500/20 rounded-sm"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-cream-300 hover:text-gold-400 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div className="aspect-square md:aspect-auto md:h-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-6 md:p-10 flex flex-col">
                <div className="mb-2">
                  <span className="text-gold-400 text-xs tracking-widest uppercase">
                    {product.category === 'bijoux' ? 'Bijoux' : 'Montres'}
                  </span>
                </div>

                <h2 className="font-serif text-2xl md:text-3xl text-cream-100 mb-4">
                  {product.name}
                </h2>

                <p className="text-gold-400 text-3xl font-medium mb-6">
                  {product.price.toLocaleString('fr-FR')} DH
                </p>

                <div className="w-12 h-px bg-gold-500/30 mb-6" />

                <p className="text-cream-300 text-sm leading-relaxed mb-8 flex-grow">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {[
                    'Or 18 carats certifié',
                    'Livraison gratuite au Maroc',
                    'Garantie internationale 2 ans',
                    'Écrin de luxe offert',
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-gold-400 shrink-0" />
                      <span className="text-cream-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* WhatsApp Button */}
                <WhatsAppButton productName={product.name} className="w-full justify-center py-4" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
