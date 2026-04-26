import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ShoppingCart, X, Flame, Leaf, WheatOff, ChevronRight } from 'lucide-react';
import { menuItems, menuCategories, type MenuCategory, type MenuItem } from '@/data/menuData';
import { useCartStore } from '@/store/cartStore';

const badgeColors: Record<string, string> = {
  'MOST POPULAR': 'bg-gold-deep',
  'NEW': 'bg-saffron',
  'SPICY': 'bg-crimson',
  'Popular': 'bg-gold-light',
  'Best Seller': 'bg-gold-deep',
  "Chef's Special": 'bg-saffron',
};

function MenuCard({ item }: { item: MenuItem }) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {item.badge && (
          <span className={`absolute top-3 left-3 px-3 py-1 rounded-full font-label font-medium text-[10px] tracking-wider uppercase text-white ${badgeColors[item.badge] || 'bg-gold-deep'}`}>
            {item.badge}
          </span>
        )}
        <div className="absolute top-3 right-3 flex gap-1">
          {item.isVeg && (
            <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center" title="Vegetarian">
              <Leaf className="w-3 h-3 text-green-600" />
            </span>
          )}
          {item.isGlutenFree && (
            <span className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center" title="Gluten Free">
              <WheatOff className="w-3 h-3 text-amber-600" />
            </span>
          )}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-semibold text-lg text-text-primary">{item.name}</h3>
          <div className="flex gap-0.5 shrink-0">
            {[...Array(3)].map((_, i) => (
              <Flame
                key={i}
                className={`w-3.5 h-3.5 ${i < item.spiceLevel ? 'text-crimson fill-crimson' : 'text-text-muted/30'}`}
              />
            ))}
          </div>
        </div>

        <p className="font-body font-light text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-label font-semibold text-xl text-text-primary">${item.price.toFixed(2)}</span>
          <button
            onClick={() => addItem(item)}
            className="w-10 h-10 rounded-full bg-charcoal text-white flex items-center justify-center hover:bg-gold-deep transition-colors"
            aria-label={`Add ${item.name} to cart`}
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, clearCart } = useCartStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 z-[80]"
            onClick={closeCart}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-cream z-[90] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border-light">
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-6 h-6 text-gold-deep" />
                <h2 className="font-display font-semibold text-xl text-text-primary">Your Order</h2>
                <span className="font-label font-medium text-sm bg-gold-deep text-white px-2 py-0.5 rounded-full">
                  {items.length}
                </span>
              </div>
              <button onClick={closeCart} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                <X className="w-5 h-5 text-text-secondary" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="w-12 h-12 text-text-muted mx-auto mb-4" />
                  <p className="font-body text-text-secondary">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 bg-white rounded-xl p-4">
                      <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                      <div className="flex-1">
                        <h4 className="font-display font-semibold text-base text-text-primary">{item.name}</h4>
                        <p className="font-label font-semibold text-gold-deep">${item.price.toFixed(2)}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-full border border-border-light flex items-center justify-center hover:border-gold-deep transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-label font-medium text-sm w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-full border border-border-light flex items-center justify-center hover:border-gold-deep transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="ml-auto text-text-muted hover:text-crimson transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-border-light bg-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-body text-text-secondary">Subtotal</span>
                  <span className="font-label font-semibold text-xl text-text-primary">${total().toFixed(2)}</span>
                </div>
                <button className="w-full btn-primary justify-center">
                  Checkout <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={clearCart}
                  className="w-full mt-2 py-2 text-sm text-text-muted hover:text-crimson transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Menu() {
  const [activeFilter, setActiveFilter] = useState<MenuCategory>('all');
  const filteredItems = activeFilter === 'all'
    ? menuItems
    : menuItems.filter((item) => item.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Our Menu | Golden Lotus Indian Restaurant</title>
        <meta name="description" content="Explore our full menu of authentic Indian dishes. Butter Chicken, Biryani, Tandoori, and more. Order online for pickup in Alexandria, LA." />
      </Helmet>

      <main>
        {/* Menu Hero */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-charcoal">
          <img
            src="/images/dishes/curries.jpg"
            alt="Our Menu"
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
                Explore
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-ivory">Our Menu</h1>
            </motion.div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="sticky top-[72px] z-50 bg-cream/95 backdrop-blur-md border-b border-border-light py-4">
          <div className="content-max-width">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {menuCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`relative px-4 py-2 rounded-full font-body text-sm whitespace-nowrap transition-colors ${
                    activeFilter === cat
                      ? 'text-white'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {activeFilter === cat && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 bg-gold-deep rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 capitalize">{cat}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Grid */}
        <section className="section-padding bg-cream">
          <div className="content-max-width">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <p className="font-body text-text-secondary text-lg">No items in this category yet.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <CartDrawer />
    </>
  );
}
