import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, Facebook, Instagram, ChefHat } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { useUIStore } from '@/store/uiStore';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { itemCount } = useCartStore();
  const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname, closeMobileMenu]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <motion.nav
        className="sticky top-0 left-0 right-0 z-[100] h-[72px] flex items-center"
        initial={{ backgroundColor: 'rgba(250, 246, 240, 0)' }}
        animate={{
          backgroundColor: scrolled ? 'rgba(250, 246, 240, 0.92)' : 'rgba(250, 246, 240, 0)',
          backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{ borderBottom: scrolled ? '1px solid rgba(26, 24, 20, 0.08)' : '1px solid transparent' }}
      >
        <div className="content-max-width w-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <ChefHat className="w-7 h-7 text-gold-deep" />
            <div className="flex flex-col">
              <span className="font-display font-semibold text-xl text-gold-deep leading-tight">
                The Pearl
              </span>
              <span className="font-label font-medium text-[10px] tracking-[0.15em] uppercase text-text-secondary">
                Pakistani Restaurant
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-body text-sm tracking-wide transition-colors duration-300 relative ${
                  isActive(link.href) ? 'text-gold-deep' : 'text-text-primary hover:text-gold-deep'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-deep"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Social - Desktop */}
            <div className="hidden lg:flex items-center gap-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-gold-deep transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-gold-deep transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Cart */}
            <Link to="/menu" className="relative p-2 text-text-secondary hover:text-gold-deep transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {itemCount() > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-saffron text-white text-[10px] font-label font-semibold rounded-full flex items-center justify-center">
                  {itemCount()}
                </span>
              )}
            </Link>

            {/* Order Button - Desktop */}
            <Link
              to="/menu"
              className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5"
            >
              Order Online
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-text-primary"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-cream/98 backdrop-blur-lg lg:hidden pt-20"
          >
            <div className="flex flex-col items-center gap-8 pt-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.href}
                    onClick={closeMobileMenu}
                    className={`font-display text-3xl ${
                      isActive(link.href) ? 'text-gold-deep' : 'text-text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <Link to="/menu" onClick={closeMobileMenu} className="btn-primary mt-4">
                  Order Online
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
