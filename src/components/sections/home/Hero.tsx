import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import LotusScene from '@/components/3d/LotusScene';

const stats = [
  { number: '14', label: 'Vegetarian Dishes', suffix: '+' },
  { number: '10', label: 'Vegan Dishes', suffix: '+' },
  { number: '80', label: 'Menu Items', suffix: '+' },
  { number: '4.8', label: 'Customer Rating', suffix: '+' },
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-cream">
      {/* 3D Background */}
      <LotusScene />

      {/* Content */}
      <div className="relative z-10 content-max-width pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="max-w-xl">
            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-gold-deep" />
              <span className="font-label font-medium text-xs tracking-[0.15em] uppercase text-gold-deep">
                Doha, Qatar
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-light text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[0.95] tracking-tight text-text-primary mb-6"
            >
              Taste the art of{' '}
              <span className="text-gold-deep italic">authentic</span> Pakistani
              cuisine.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-body font-light text-base md:text-lg leading-relaxed text-text-secondary mb-8 max-w-md"
            >
              Generations-old recipes, the finest spices, and a passion for
              flavors that transport you straight to the heart of Pakistan — one
              dish at a time.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <Link to="/menu" className="btn-primary inline-flex items-center gap-2">
                Order Online <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/menu" className="btn-outline">
                View Our Menu
              </Link>
              <Link to="/contact" className="btn-ghost border: 1.5px solid rgb(221, 208, 187); border-radius: 10px; inline-flex items-center gap-2">
                <span className="text-lg">🍽️</span> Book a Table
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-6 md:gap-8"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display font-semibold text-2xl md:text-3xl text-text-primary">
                    {stat.number}
                    <span className="text-gold-deep">{stat.suffix}</span>
                  </span>
                  <span className="font-body font-light text-xs text-text-secondary mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Floating Images */}
          <div className="hidden mb-8 ml-4 lg:block relative h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={loaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-0 w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white"
            >
              <img
                src="/images/dishes/biryani.jpg"
                alt="Biryani"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={loaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-12 left-40 w-50 ml-12 h-40 rounded-full overflow-hidden shadow-2xl border-4 border-white"
            >
              <img
                src="/images/dishes/thali.jpg"
                alt="Thali"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Est. Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={loaded ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="absolute top-4 right-48 bg-white rounded-xl px-4 py-3 shadow-lg"
            >
              <span className="font-label text-xs text-text-muted uppercase tracking-wide">Est.</span>
              <span className="block font-display font-semibold text-2xl text-text-primary">2026</span>
            </motion.div>

            {/* Ready in 15 min Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={loaded ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="absolute bottom-4 m-5 left-80 bg-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-gold-pale rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-gold-deep" />
              </div>
              <div>
                <span className="block font-body  font-medium text-sm text-text-primary">Ready in 15 min</span>
                <span className="block font-body font-light text-xs text-text-secondary">Fast pickup available</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
