import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

const contactInfo = [
  {
    icon: Phone,
    title: 'WhatsApp',
    detail: '+212 6XX-XXXXXX',
    description: 'Disponible pour vos commandes',
    action: 'whatsapp',
  },
  {
    icon: Mail,
    title: 'Email',
    detail: 'contact@assia.ma',
    description: 'Réponse sous 24h',
    action: 'email',
  },
  {
    icon: MapPin,
    title: 'Adresse',
    detail: 'Boulevard Mohammed V',
    description: 'Casablanca, Maroc',
    action: null,
  },
  {
    icon: Clock,
    title: 'Horaires',
    detail: 'Lun - Sam : 10h - 20h',
    description: 'Dimanche sur rendez-vous',
    action: null,
  },
];

export default function Contact() {
  return (
    <div className="pt-24 pb-24 bg-luxe-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4">Contact</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-cream-100 mb-4">
            Contactez-Nous
          </h1>
          <p className="text-cream-400 max-w-xl mx-auto">
            Notre équipe est à votre disposition pour vous accompagner dans votre choix et répondre à toutes vos questions.
          </p>
          <div className="w-16 h-px bg-gold-500/30 mx-auto mt-6" />
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-luxe-charcoal border border-gold-500/10 p-6 text-center group hover:border-gold-500/30 transition-colors"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/10 transition-colors">
                <info.icon className="w-5 h-5 text-gold-400" />
              </div>
              <h3 className="font-serif text-lg text-cream-100 mb-1">{info.title}</h3>
              <p className="text-cream-200 font-medium mb-1">{info.detail}</p>
              <p className="text-cream-500 text-sm">{info.description}</p>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-luxe-charcoal border border-gold-500/10 p-8 md:p-12 text-center max-w-2xl mx-auto"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
            <MessageCircle className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="font-serif text-2xl md:text-3xl text-cream-100 mb-4">
            Commandez Directement sur WhatsApp
          </h2>
          <p className="text-cream-400 mb-8 max-w-md mx-auto">
            Le moyen le plus simple et rapide pour passer commande. Envoyez-nous un message et nous vous répondrons dans les plus brefs délais.
          </p>
          <WhatsAppButton className="px-8 py-4 text-base" />
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-cream-500 text-sm mb-6">Suivez-nous sur les réseaux sociaux</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-gold-500/20 flex items-center justify-center text-cream-300 hover:bg-gold-500 hover:text-luxe-black transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-gold-500/20 flex items-center justify-center text-cream-300 hover:bg-gold-500 hover:text-luxe-black transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
