import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, MapPin, Phone, Mail, ChefHat } from 'lucide-react';
import { hours } from '@/data/menuData';

const exploreLinks = [
  { label: 'Our Menu', href: '/menu' },
  { label: 'Catering', href: '/about' },
  { label: 'Locations', href: '/contact' },
  { label: 'Our Story', href: '/about' },
];

const companyLinks = [
  { label: 'Contact Us', href: '/contact' },
];

export default function Footer() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <footer className="bg-charcoal text-ivory">
      <div className="content-max-width py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <ChefHat className="w-6 h-6 text-gold-deep" />
              <div>
                <span className="font-display font-semibold text-lg text-ivory">The Pearl</span>
                <span className="block font-label font-medium text-[10px] tracking-[0.15em] uppercase text-text-muted">
                  Pakistani Restaurant
                </span>
              </div>
            </div>
            <p className="font-body font-light text-sm leading-relaxed text-text-muted max-w-xs mb-6">
              Experience the art of authentic Pakistani cuisine at The Pearl Grill. Located in Doha, Qatar, serving the finest Pakistan food with dine-in, takeout, and catering services.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-text-muted">
                <MapPin className="w-4 h-4 text-gold-light" />
                <span>Zone 39 Doha Qatar</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <Phone className="w-4 h-4 text-gold-light" />
                <a href="+97433949820" className="hover:text-gold-light transition-colors">+97433949820</a>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <Mail className="w-4 h-4 text-gold-light" />
                <a href="mailto:thepearlgrill@gmail.com" className="hover:text-gold-light transition-colors">thepearlgrill@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-muted hover:text-gold-light hover:bg-white/10 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-muted hover:text-gold-light hover:bg-white/10 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="font-label font-medium text-xs tracking-[0.12em] uppercase text-text-muted mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body font-light text-sm text-text-muted hover:text-ivory hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-label font-medium text-xs tracking-[0.12em] uppercase text-text-muted mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body font-light text-sm text-text-muted hover:text-ivory hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours Column */}
          <div>
            <h4 className="font-label font-medium text-xs tracking-[0.12em] uppercase text-text-muted mb-6">
              Opening Hours
            </h4>
            <ul className="space-y-2">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between text-sm">
                  <span className={`font-body ${h.day === today ? 'text-gold-light font-medium' : 'text-text-muted'}`}>
                    {h.day}
                  </span>
                  <span className={`font-body ${h.day === today ? 'text-gold-light font-medium' : 'text-text-muted'}`}>
                    {h.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="content-max-width py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-text-muted">
            &copy; {new Date().getFullYear()} THe Pearl Pakistani Cuisine Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="font-body text-xs text-text-muted hover:text-ivory transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="font-body text-xs text-text-muted hover:text-ivory transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
