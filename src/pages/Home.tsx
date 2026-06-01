import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Star, ChevronDown, Diamond, Watch, Shield, Truck, Gift } from 'lucide-react';
import { products, testimonials, faqItems } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const newProducts = products.filter((p) => p.isNew).slice(0, 4);
  const popularProducts = products.filter((p) => p.isPopular).slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="ASSIA Bijoux & Montres"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-6"
          >
            Depuis 2015
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream-50 mb-6 leading-tight"
          >
            ASSIA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-serif text-xl sm:text-2xl md:text-3xl text-cream-200 mb-4"
          >
            Bijoux & Montres d'Exception
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-cream-400 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Découvrez notre collection exclusive de bijoux en or 18 carats et montres suisses. 
            Chaque pièce raconte une histoire d'élégance et de raffinement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link
              to="/boutique"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-luxe-black font-medium tracking-wider text-sm hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20"
            >
              Découvrir la Collection
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-cream-500" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-20 bg-luxe-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Diamond, title: 'Or 18 Carats', desc: 'Matières premières certifiées' },
              { icon: Watch, title: 'Mouvement Suisse', desc: 'Précision horlogère' },
              { icon: Shield, title: 'Garantie 2 Ans', desc: 'Service après-vente' },
              { icon: Truck, title: 'Livraison Gratuite', desc: 'Partout au Maroc' },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-gold-500/20 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-serif text-cream-100 mb-1">{feature.title}</h3>
                <p className="text-cream-500 text-xs">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-24 bg-luxe-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4">Nouveautés</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream-100 mb-4">
              Les Dernières Arrivées
            </h2>
            <div className="w-16 h-px bg-gold-500/30 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/boutique"
              className="inline-flex items-center gap-2 text-gold-400 text-sm tracking-wider hover:text-gold-300 transition-colors group"
            >
              Voir Toutes les Nouveautés
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-24 bg-luxe-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4">Best-Sellers</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream-100 mb-4">
              Nos Produits Populaires
            </h2>
            <div className="w-16 h-px bg-gold-500/30 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="py-24 bg-luxe-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden aspect-[4/3] md:aspect-[3/4]"
            >
              <img
                src="/images/collier.jpg"
                alt="Collection Bijoux"
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-luxe-black/40 group-hover:bg-luxe-black/30 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <Diamond className="w-10 h-10 text-gold-400 mb-4" />
                <h3 className="font-serif text-3xl md:text-4xl text-cream-50 mb-3">Bijoux</h3>
                <p className="text-cream-200 text-sm mb-6 max-w-xs">
                  Colliers, bagues, bracelets et boucles d'oreilles en or 18 carats
                </p>
                <Link
                  to="/bijoux"
                  className="px-6 py-3 border border-gold-400 text-gold-400 text-sm tracking-wider hover:bg-gold-400 hover:text-luxe-black transition-all duration-300"
                >
                  Explorer
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden aspect-[4/3] md:aspect-[3/4]"
            >
              <img
                src="/images/montre-homme.jpg"
                alt="Collection Montres"
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-luxe-black/40 group-hover:bg-luxe-black/30 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <Watch className="w-10 h-10 text-gold-400 mb-4" />
                <h3 className="font-serif text-3xl md:text-4xl text-cream-50 mb-3">Montres</h3>
                <p className="text-cream-200 text-sm mb-6 max-w-xs">
                  Timepieces suisses d'exception pour homme et femme
                </p>
                <Link
                  to="/montres"
                  className="px-6 py-3 border border-gold-400 text-gold-400 text-sm tracking-wider hover:bg-gold-400 hover:text-luxe-black transition-all duration-300"
                >
                  Explorer
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gift Section */}
      <section className="py-24 bg-luxe-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Gift className="w-8 h-8 text-gold-400 mx-auto mb-4" />
            <h2 className="font-serif text-3xl sm:text-4xl text-cream-100 mb-4">
              L'Art du Cadeau
            </h2>
            <p className="text-cream-400 max-w-xl mx-auto">
              Chaque commande est livrée dans un écrin de luxe ASSIA, accompagnée d'un certificat d'authenticité.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-luxe-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4">Témoignages</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream-100 mb-4">
              Ce Que Disent Nos Clients
            </h2>
            <div className="w-16 h-px bg-gold-500/30 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-luxe-charcoal border border-gold-500/10 p-6"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
                  ))}
                </div>
                <p className="text-cream-300 text-sm leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
                <p className="text-gold-400 text-sm font-medium">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-luxe-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4">FAQ</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream-100 mb-4">
              Questions Fréquentes
            </h2>
            <div className="w-16 h-px bg-gold-500/30 mx-auto" />
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border border-gold-500/10 bg-luxe-charcoal"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-cream-100 font-medium text-sm pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold-400 shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-cream-400 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-luxe-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/hero.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-cream-100 mb-6">
              Prêt à Découvrir l'Exception ?
            </h2>
            <p className="text-cream-400 mb-10 max-w-xl mx-auto">
              Explorez notre collection complète et trouvez la pièce qui illuminera votre style.
            </p>
            <Link
              to="/boutique"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-luxe-black font-medium tracking-wider text-sm hover:bg-gold-400 transition-all duration-300"
            >
              Voir la Collection Complète
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
