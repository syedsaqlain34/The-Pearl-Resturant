import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-charcoal">
      <div className="content-max-width">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/5 border border-gold-deep/15 rounded-3xl p-8 md:p-12 lg:p-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 mb-4"
              >
                <span className="w-8 h-px bg-gold-light" />
                <span className="font-label font-medium text-xs tracking-[0.12em] uppercase text-gold-light">
                  Ready to Order?
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] text-ivory mb-4"
              >
                Experience{' '}
                <span className="text-gold-light italic">authentic</span>{' '}
                flavors from the comfort of home
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="font-body font-light text-base text-ivory/60 max-w-md"
              >
                Order online and pick up your favorite dishes in just 15–20
                minutes. Fresh, hot, and made with love every single time.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 lg:justify-end"
            >
              <Link
                to="/menu"
                className="btn-primary inline-flex items-center gap-2 bg-saffron hover:brightness-110"
              >
                Order Online Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ivory/30 text-ivory font-body text-sm hover:border-ivory/60 transition-colors"
              >
                View Full Menu
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
