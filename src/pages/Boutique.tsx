import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal, Grid3X3, LayoutList } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

type FilterCategory = 'all' | 'bijoux' | 'montres';
type SortOption = 'default' | 'price-asc' | 'price-desc' | 'newest';

export default function Boutique() {
  const [filter, setFilter] = useState<FilterCategory>('all');
  const [sort, setSort] = useState<SortOption>('default');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filter !== 'all') {
      result = result.filter((p) => p.category === filter);
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return result;
  }, [filter, sort]);

  return (
    <div className="pt-24 pb-24 bg-luxe-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4">Boutique</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-cream-100 mb-4">
            Notre Collection
          </h1>
          <div className="w-16 h-px bg-gold-500/30 mx-auto" />
        </motion.div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-gold-500/10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-cream-300 text-sm hover:text-gold-400 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filtres
            </button>
            <span className="text-cream-600 text-sm">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="bg-luxe-charcoal border border-gold-500/20 text-cream-300 text-sm px-4 py-2 focus:outline-none focus:border-gold-500/50"
            >
              <option value="default">Trier par</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="newest">Nouveautés</option>
            </select>

            <div className="flex border border-gold-500/20">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 transition-colors ${viewMode === 'grid' ? 'bg-gold-500/10 text-gold-400' : 'text-cream-500 hover:text-cream-300'}`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-gold-500/10 text-gold-400' : 'text-cream-500 hover:text-cream-300'}`}
              >
                <LayoutList className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Tags */}
        <motion.div
          initial={false}
          animate={{ height: showFilters ? 'auto' : 0, opacity: showFilters ? 1 : 0 }}
          className="overflow-hidden mb-8"
        >
          <div className="flex flex-wrap gap-3 pb-4">
            {(['all', 'bijoux', 'montres'] as FilterCategory[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 text-sm tracking-wider transition-all ${
                  filter === cat
                    ? 'bg-gold-500 text-luxe-black'
                    : 'bg-luxe-charcoal border border-gold-500/20 text-cream-300 hover:border-gold-500/50'
                }`}
              >
                {cat === 'all' ? 'Tout' : cat === 'bijoux' ? 'Bijoux' : 'Montres'}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-cream-500 text-lg">Aucun produit ne correspond à vos critères.</p>
          </div>
        ) : (
          <div
            className={`grid gap-8 ${
              viewMode === 'grid'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                : 'grid-cols-1'
            }`}
          >
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
