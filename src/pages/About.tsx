import { motion } from 'framer-motion';
import { Gem, Award, Heart, Globe } from 'lucide-react';

const values = [
  {
    icon: Gem,
    title: 'Excellence',
    description: 'Chaque pierre est sélectionnée avec rigueur, chaque métal est travaillé avec précision. Nous ne transigeons jamais sur la qualité.',
  },
  {
    icon: Award,
    title: 'Authenticité',
    description: 'Tous nos bijoux sont accompagnés de certificats d\'authenticité. Nos montres bénéficient d\'une garantie internationale.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Depuis 2015, notre amour pour la joaillerie et l\'horlogerie guide chacune de nos décisions et chaque création.',
  },
  {
    icon: Globe,
    title: 'Artisanat Marocain',
    description: 'Nous célébrons le savoir-faire marocain en alliant traditions séculaires et designs contemporains d\'exception.',
  },
];

const stats = [
  { value: '10+', label: 'Années d\'Excellence' },
  { value: '5000+', label: 'Clients Satisfaits' },
  { value: '100%', label: 'Or 18 Carats' },
  { value: '2 Ans', label: 'Garantie Internationale' },
];

export default function About() {
  return (
    <div className="pt-24 pb-24 bg-luxe-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4">Notre Histoire</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-cream-100 mb-4">
            À Propos d'ASSIA
          </h1>
          <div className="w-16 h-px bg-gold-500/30 mx-auto" />
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/about.jpg"
              alt="Atelier ASSIA"
              className="w-full aspect-[4/3] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl text-cream-100">
              L'Art de la Joaillerie depuis 2015
            </h2>
            <p className="text-cream-400 leading-relaxed">
              ASSIA est née d'une passion profonde pour les bijoux et les montres d'exception. 
              Fondée à Casablanca, notre maison s'est rapidement imposée comme une référence 
              du luxe au Maroc, alliant savoir-faire artisanal et designs contemporains.
            </p>
            <p className="text-cream-400 leading-relaxed">
              Chaque pièce de notre collection est le fruit d'un travail minutieux, 
              d'une sélection rigoureuse des matériaux et d'une exigence absolue en matière 
              de finition. Nous croyons que le luxe véritable réside dans les détails.
            </p>
            <p className="text-cream-400 leading-relaxed">
              Notre mission est simple : offrir à nos clients des pièces uniques qui 
              traversent le temps, des héritages précieux à transmettre de génération 
              en génération.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 py-12 border-y border-gold-500/10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <p className="font-serif text-3xl md:text-4xl text-gold-400 mb-2">{stat.value}</p>
              <p className="text-cream-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4">Nos Valeurs</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-cream-100">
            Ce Qui Nous Définit
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-luxe-charcoal border border-gold-500/10 p-8 text-center group hover:border-gold-500/30 transition-colors"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/10 transition-colors">
                <value.icon className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="font-serif text-xl text-cream-100 mb-3">{value.title}</h3>
              <p className="text-cream-400 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
