import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-luxe-dark border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="font-serif text-3xl font-bold tracking-wider text-gold-400">
                ASSIA
              </span>
            </Link>
            <p className="text-cream-400 text-sm leading-relaxed">
              Bijoux et montres d'exception depuis 2015. Chaque pièce est sélectionnée avec passion pour son excellence et son caractère unique.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center text-cream-300 hover:bg-gold-500 hover:text-luxe-black transition-all duration-300"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center text-cream-300 hover:bg-gold-500 hover:text-luxe-black transition-all duration-300"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg text-gold-400 mb-6">Navigation</h3>
            <ul className="space-y-3">
              {[
                { path: '/', label: 'Accueil' },
                { path: '/boutique', label: 'Boutique' },
                { path: '/bijoux', label: 'Bijoux' },
                { path: '/montres', label: 'Montres' },
                { path: '/a-propos', label: 'À Propos' },
                { path: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-cream-400 text-sm hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-serif text-lg text-gold-400 mb-6">Collections</h3>
            <ul className="space-y-3">
              {[
                'Colliers',
                'Bracelets',
                'Bagues',
                'Boucles d\'Oreilles',
                'Montres Homme',
                'Montres Femme',
                'Nouveautés',
              ].map((item) => (
                <li key={item}>
                  <span className="text-cream-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg text-gold-400 mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold-400 mt-1 shrink-0" />
                <div>
                  <p className="text-cream-100 text-sm font-medium">WhatsApp</p>
                  <p className="text-cream-400 text-sm">+212 6XX-XXXXXX</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold-400 mt-1 shrink-0" />
                <div>
                  <p className="text-cream-100 text-sm font-medium">Email</p>
                  <p className="text-cream-400 text-sm">contact@assia.ma</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 mt-1 shrink-0" />
                <div>
                  <p className="text-cream-100 text-sm font-medium">Adresse</p>
                  <p className="text-cream-400 text-sm">Boulevard Mohammed V, Casablanca</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold-400 mt-1 shrink-0" />
                <div>
                  <p className="text-cream-100 text-sm font-medium">Horaires</p>
                  <p className="text-cream-400 text-sm">Lun - Sam : 10h - 20h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gold-500/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream-500 text-xs">
            © 2025 ASSIA. Tous droits réservés.
          </p>
          <p className="text-cream-500 text-xs">
            Bijoux & Montres d'Exception
          </p>
        </div>
      </div>
    </footer>
  );
}
