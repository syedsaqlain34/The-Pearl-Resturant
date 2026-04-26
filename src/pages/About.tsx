import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, Users, Heart, Globe } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassCard from '@/components/ui/GlassCard';

const values = [
  {
    icon: Award,
    title: 'Authenticity',
    description: 'We honor traditional Pakistani recipes passed down through generations, using authentic spices and cooking techniques.',
  },
  {
    icon: Heart,
    title: 'Freshness',
    description: 'Every ingredient is handpicked daily. We never compromise on the quality and freshness of our produce.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We are proud to be part of The Pearl community, serving families and friends for memorable dining experiences.',
  },
  {
    icon: Globe,
    title: 'Fusion',
    description: 'While honoring tradition, we creatively blend local Louisiana flavors with classic Pakistani cuisine.',
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>Our Story | The Pearl Pakistani Restaurant</title>
        <meta name="description" content="Learn about The Pearl Pakistani Bar & Grill. Our story, our chefs, and our commitment to authentic Pakistani cuisine in The Pearl, Doha." />
      </Helmet>

      <main>
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-charcoal">
          <img
            src="/images/gallery/interior.jpg"
            alt="The PearlS Interior"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-label font-medium text-xs tracking-[0.15em] uppercase text-gold-light mb-4 block">
                Est. 2026
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-ivory">Our Story</h1>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-cream">
          <div className="content-max-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <SectionTitle
                  eyebrow="Our Journey"
                  title="A passion for authentic Pakistani flavors"
                  highlightWords="passion authentic flavors"
                  align="left"
                />
                <div className="space-y-4 font-body font-light text-base leading-relaxed text-text-secondary">
                  <p>
                    The Pearl Pakistani Bar & Grill was founded in 2026 with a simple mission: 
                    to bring the rich, diverse flavors of authentic Pakistani cuisine to the heart of 
                    The Pearl, Doha. Our founder, Khan, envisioned a place where 
                    the community could experience the warmth and hospitality that defines Pakistani culture.
                  </p>
                  <p>
                    Head Chef Apurv Desai brings decades of culinary expertise, having trained in 
                    some of Pakistan's finest kitchens. His dedication to preserving traditional recipes 
                    while embracing local Doha ingredients creates a unique fusion that keeps 
                    our guests coming back.
                  </p>
                  <p>
                    From our signature Butter Chicken to our fragrant Biryani, every dish tells a 
                    story of heritage, craftsmanship, and love. We source the finest spices directly 
                    from Pakistan and prepare each meal fresh to order.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src="/images/gallery/spices.jpg"
                    alt="Pakistani Spices"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gold-deep text-white p-6 rounded-xl">
                  <span className="font-display font-semibold text-4xl block">2026</span>
                  <span className="font-body text-sm opacity-90">Year Established</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-warm-white">
          <div className="content-max-width">
            <SectionTitle
              eyebrow="Our Values"
              title="What we stand for"
              align="center"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <GlassCard hover className="text-center">
                    <div className="w-14 h-14 bg-gold-pale rounded-xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-gold-deep" />
                    </div>
                    <h3 className="font-display font-semibold text-xl text-text-primary mb-3">
                      {value.title}
                    </h3>
                    <p className="font-body font-light text-sm text-text-secondary leading-relaxed">
                      {value.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
