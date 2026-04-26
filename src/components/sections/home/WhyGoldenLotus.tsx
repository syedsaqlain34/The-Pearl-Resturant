import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, ChefHat, Zap, PartyPopper, ArrowRight } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const features = [
  {
    icon: Leaf,
    title: 'Fresh Daily',
    description: 'Ingredients sourced fresh every morning from local markets and trusted suppliers.',
  },
  {
    icon: ChefHat,
    title: 'Master Chefs',
    description: 'Trained in traditional Indian culinary arts with decades of combined experience.',
  },
  {
    icon: Zap,
    title: 'Fast Pickup',
    description: 'Ready in 15-20 minutes, order anytime through our online system.',
  },
  {
    icon: PartyPopper,
    title: 'Catering',
    description: 'Events, parties & corporate catering with customizable menus.',
  },
];

export default function WhyGoldenLotus() {
  return (
    <section className="section-padding h-502px bg-[rgb(30,24,16)] relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0  pointer-events-none" />

      <div className="content-max-width relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold-deep" />
              <span className="font-label font-medium text-xs tracking-[0.12em] uppercase text-gold-deep">
                Why The Pearl
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.05] tracking-tight text-white mb-6">
              A dining experience like{' '}
              <span className="text-gold-deep italic">no other</span>
            </h2>

            <p className="font-body font-light text-base md:text-lg leading-relaxed text-text-secondary max-w-md mb-8">
              From the first bite to the last, we pour our heritage into every
              dish — sourcing the finest spices, honoring generations-old
              recipes, and ensuring every visit is extraordinary.
            </p>

            <Link
              to="/menu"
              className="btn-new inline-flex items-center gap-2"
            >
              Order Now <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right Column - Feature Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <GlassCard hover glow className="h-full bg-[rgb(255, 255, 255, 0.04)] border-1px border-[rgba(255,255,255,0.07)] p-6">
                  <div className="w-10 h-10 rounded-lg bg-[rgb(255, 255, 255, 0.04)] flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-gold-deep" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-body font-light text-sm text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
