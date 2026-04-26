import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { hours } from '@/data/menuData';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassCard from '@/components/ui/GlassCard';

export default function Contact() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <>
      <Helmet>
        <title>Contact Us | The Pearl Pakistani Restaurant</title>
        <meta name="description" content="Contact The Pearl Pakistani Bar & Grill in The Pearl, Doha. Find our location, hours, phone number, and send us a message." />
      </Helmet>

      <main>
        {/* Hero */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-charcoal">
          <img
            src="/images/gallery/interior.jpg"
            alt="Contact"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-5xl md:text-6xl text-ivory">Contact Us</h1>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-cream">
          <div className="content-max-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <SectionTitle
                  eyebrow="Get in Touch"
                  title="We would love to hear from you"
                  highlightWords="love hear"
                  align="left"
                />

                <div className="space-y-6 mt-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold-pale rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-gold-deep" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-lg text-text-primary mb-1">Address</h4>
                      <p className="font-body font-light text-sm text-text-secondary">
                        Zone 39 Doha<br />
                        Qatar, St 19
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold-pale rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-gold-deep" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-lg text-text-primary mb-1">Phone</h4>
                      <a href="tel:+13188358681" className="font-body font-light text-sm text-text-secondary hover:text-gold-deep transition-colors">
                        +97433949820
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold-pale rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-gold-deep" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-lg text-text-primary mb-1">Email</h4>
                      <a href="mailto:thepearlgrill@gmail.com" className="font-body font-light text-sm text-text-secondary hover:text-gold-deep transition-colors">
                        thepearlgrill@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold-pale rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-gold-deep" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-lg text-text-primary mb-1">Opening Hours</h4>
                      <ul className="space-y-1">
                        {hours.map((h) => (
                          <li key={h.day} className="flex justify-between text-sm">
                            <span className={`font-body ${h.day === today ? 'text-gold-deep font-medium' : 'text-text-secondary'}`}>
                              {h.day}
                            </span>
                            <span className={`font-body ${h.day === today ? 'text-gold-deep font-medium' : 'text-text-secondary'}`}>
                              {h.hours}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <GlassCard className="h-full">
                  <h3 className="font-display font-semibold text-2xl text-text-primary mb-6">Send us a Message</h3>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-body text-sm text-text-secondary mb-1">Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-border-light bg-white font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold-deep/30"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-sm text-text-secondary mb-1">Phone</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-xl border border-border-light bg-white font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold-deep/30"
                          placeholder="Your phone"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-body text-sm text-text-secondary mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-border-light bg-white font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold-deep/30"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm text-text-secondary mb-1">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-border-light bg-white font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold-deep/30 resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full btn-primary inline-flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                  </form>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="pb-20 bg-cream">
          <div className="content-max-width">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[21/9]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3378.0171285328035!2d-92.47883868483143!3d31.291945481453427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8636f8c3b9ffffff%3A0x5d7e0c6c9e8e3a1c!2s1473%20Dorchester%20Dr%2C%20Alexandria%2C%20LA%2071301!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Pearl Location"
                className="w-full h-full"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
