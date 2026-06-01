import { useState } from 'react';
import { motion } from 'framer-motion';
import { Watch, User, Users } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const subcategories = [
  { key: 'all', label: 'Toutes les Montres', icon: Watch },
  { key: 'homme', label: 'Homme', icon: User },
  { key: 'femme', label: 'Femme', icon: Users },
];

export default function Montres() {
  const [activeSub, setActiveSub] = useState('all');

  const montres = products.filter((p) => p.category === 'montres');
  const filtered = activeSub === 'all' ? montres : montres.filter((p) => p.subcategory === activeSub);

  return (
    <div className="pt-24 pb-24 bg-luxe-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4">Collection</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-cream-100 mb-4">
            Montres
          </h1>
          <p className="text-cream-400 max-w-xl mx-auto">
            Des timepieces d'exception alliant horlogerie suisse et design intemporel. Chaque seconde compte.
          </p>
          <div className="w-16 h-px bg-gold-500/30 mx-auto mt-6" />
        </motion.div>

        {/* Subcategories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {subcategories.map((sub) => (
            <button
              key={sub.key}
              onClick={() => setActiveSub(sub.key)}
              className={`flex items-center gap-2 px-5 py-2.5 text-sm tracking-wider transition-all ${
                activeSub === sub.key
                  ? 'bg-gold-500 text-luxe-black'
                  : 'bg-luxe-charcoal border border-gold-500/20 text-cream-300 hover:border-gold-500/50'
              }`}
            >
              <sub.icon className="w-4 h-4" />
              {sub.label}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-cream-500 text-lg">Aucune montre dans cette catégorie.</p>
          </div>
        )}
      </div>
    </div>
  );
}
