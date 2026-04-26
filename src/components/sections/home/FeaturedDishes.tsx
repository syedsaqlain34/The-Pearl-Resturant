import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus, ArrowRight } from 'lucide-react';
import { menuItems } from '@/data/menuData';
import { useCartStore } from '@/store/cartStore';
import SectionTitle from '@/components/ui/SectionTitle';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const badgeColors: Record<string, string> = {
  'MOST POPULAR': 'bg-gold-deep',
  'NEW': 'bg-saffron',
  'SPICY': 'bg-crimson',
  'Popular': 'bg-gold-light',
  'Best Seller': 'bg-gold-deep',
  "Chef's Special": 'bg-saffron',
};

export default function FeaturedDishes() {
  const addItem = useCartStore((s) => s.addItem);

  const featured = menuItems.filter((item) => item.badge).slice(0, 4);

  return (
    <section className="section-padding bg-cream">
      <div className="content-max-width">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="mb-4 md:mb-0">
            <SectionTitle
              eyebrow="Our Specialties"
              title="Dishes crafted with love & tradition"
              highlightWords="love tradition"
              align="left"
              animate={false}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 font-body text-sm text-gold-deep hover:gap-3 transition-all"
            >
              View full menu <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featured.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {item.badge && (
                  <span
                    className={`absolute top-3 left-3 px-3 py-1 rounded-full font-label font-medium text-[10px] tracking-wider uppercase text-white ${
                      badgeColors[item.badge] || 'bg-gold-deep'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display font-semibold text-xl text-text-primary mb-2">
                  {item.name}
                </h3>
                <p className="font-body font-light text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-label font-semibold text-lg text-text-primary">
                    ${item.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => addItem(item)}
                    className="w-9 h-9 rounded-full bg-charcoal text-white flex items-center justify-center hover:bg-gold-deep transition-colors"
                    aria-label={`Add ${item.name} to cart`}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
