import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Sparkles } from 'lucide-react';
import type { Product } from '../data/products';
import ProductModal from './ProductModal';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden bg-luxe-charcoal rounded-sm">
          {/* Image */}
          <div className="aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover img-zoom"
            />
          </div>

          {/* Overlay */}
          <motion.div
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-luxe-black/60 flex items-center justify-center"
          >
            <motion.button
              initial={false}
              animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-gold-500 text-luxe-black text-sm font-medium tracking-wide hover:bg-gold-400 transition-colors"
            >
              <Eye className="w-4 h-4" />
              Voir Détails
            </motion.button>
          </motion.div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="px-3 py-1 bg-gold-500 text-luxe-black text-xs font-bold tracking-wider uppercase">
                Nouveau
              </span>
            )}
            {product.isPopular && (
              <span className="px-3 py-1 bg-luxe-black/80 text-gold-400 text-xs font-bold tracking-wider uppercase border border-gold-500/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Populaire
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="mt-4 space-y-2">
          <p className="text-cream-500 text-xs tracking-widest uppercase">
            {product.category === 'bijoux' ? 'Bijoux' : 'Montres'} — {product.subcategory}
          </p>
          <h3 className="font-serif text-lg text-cream-100 group-hover:text-gold-400 transition-colors">
            {product.name}
          </h3>
          <p className="text-gold-400 font-medium text-lg">
            {product.price.toLocaleString('fr-FR')} DH
          </p>
        </div>
      </motion.div>

      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
