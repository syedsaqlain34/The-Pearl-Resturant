export const menuCategories = [
  "all", "appetizers", "soups", "entrees", "biryani", "breads", "desserts", "drinks", "fusion"
] as const;

export type MenuCategory = typeof menuCategories[number];

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  description: string;
  price: number;
  spiceLevel: number;
  isVeg: boolean;
  isGlutenFree: boolean;
  badge?: string;
  image: string;
  available: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: "butter-chicken",
    name: "Butter Chicken",
    category: "entrees",
    description: "Tender chicken simmered in a rich, creamy tomato-butter sauce with aromatic spices.",
    price: 15.99,
    spiceLevel: 1,
    isVeg: false,
    isGlutenFree: true,
    badge: "Best Seller",
    image: "/images/dishes/butter-chicken.jpg",
    available: true,
  },
  {
    id: "chicken-biryani",
    name: "Chicken Biryani",
    category: "biryani",
    description: "Fragrant basmati rice layered with spiced chicken, saffron, and caramelized onions.",
    price: 17.99,
    spiceLevel: 2,
    isVeg: false,
    isGlutenFree: true,
    badge: "Chef's Special",
    image: "/images/dishes/biryani.jpg",
    available: true,
  },
  {
    id: "palak-paneer",
    name: "Palak Paneer",
    category: "entrees",
    description: "Fresh spinach cooked with cottage cheese cubes in a creamy spiced gravy.",
    price: 14.99,
    spiceLevel: 1,
    isVeg: true,
    isGlutenFree: true,
    badge: "Popular",
    image: "/images/dishes/palak-paneer.jpg",
    available: true,
  },
  {
    id: "tandoori-platter",
    name: "Tandoori Platter",
    category: "appetizers",
    description: "Mixed grill with chicken tikka, seekh kebab, prawns, and lamb chops.",
    price: 24.99,
    spiceLevel: 2,
    isVeg: false,
    isGlutenFree: true,
    badge: "Most Popular",
    image: "/images/dishes/tandoori.jpg",
    available: true,
  },
  {
    id: "garlic-naan",
    name: "Garlic Naan",
    category: "breads",
    description: "Freshly baked flatbread topped with garlic and butter, cooked in tandoor oven.",
    price: 3.99,
    spiceLevel: 0,
    isVeg: true,
    isGlutenFree: false,
    image: "/images/dishes/naan.jpg",
    available: true,
  },
  {
    id: "appetizer-platter",
    name: "Appetizer Platter",
    category: "appetizers",
    description: "Assorted samosas, pakoras, and tikka with mint and tamarind chutneys.",
    price: 12.99,
    spiceLevel: 1,
    isVeg: true,
    isGlutenFree: false,
    badge: "New",
    image: "/images/dishes/appetizers.jpg",
    available: true,
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun",
    category: "desserts",
    description: "Golden fried milk dumplings soaked in rose-scented sugar syrup with pistachios.",
    price: 6.99,
    spiceLevel: 0,
    isVeg: true,
    isGlutenFree: false,
    image: "/images/dishes/gulab-jamun.jpg",
    available: true,
  },
  {
    id: "mango-lassi",
    name: "Mango Lassi",
    category: "drinks",
    description: "Refreshing yogurt-based drink blended with sweet Alphonso mango pulp.",
    price: 4.99,
    spiceLevel: 0,
    isVeg: true,
    isGlutenFree: true,
    image: "/images/dishes/lassi.jpg",
    available: true,
  },
  {
    id: "thali-special",
    name: "Golden Thali",
    category: "entrees",
    description: "Complete Pakistani meal with rice, three curries, naan, raita, and dessert.",
    price: 22.99,
    spiceLevel: 1,
    isVeg: true,
    isGlutenFree: false,
    badge: "Chef's Special",
    image: "/images/dishes/thali.jpg",
    available: true,
  },
  {
    id: "curry-trio",
    name: "Curry Trio",
    category: "fusion",
    description: "Taste of three signature curries: tikka masala, korma, and saag. Perfect for sharing.",
    price: 26.99,
    spiceLevel: 2,
    isVeg: false,
    isGlutenFree: true,
    badge: "Popular",
    image: "/images/dishes/curries.jpg",
    available: true,
  },
];

export const featuredItems = menuItems.filter(item => item.badge);

export const hours = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "11:00 AM - 9:00 PM" },
  { day: "Wednesday", hours: "11:00 AM - 9:00 PM" },
  { day: "Thursday", hours: "11:00 AM - 9:00 PM" },
  { day: "Friday", hours: "11:00 AM - 10:00 PM" },
  { day: "Saturday", hours: "11:00 AM - 10:00 PM" },
  { day: "Sunday", hours: "11:00 AM - 9:00 PM" },
];

export const testimonials = [
  {
    id: 1,
    name: "Syed Saqlain.",
    text: "The butter chicken here is absolutely divine. Rich, creamy, and perfectly spiced. Best Pakistai food in The Pearl!",
    rating: 5,
  },
  {
    id: 2,
    name: "Ali Khan.",
    text: "The Pearl Restaurant never disappoints. The tandoori platter is a feast for the senses. Fast pickup too — ready in 15 minutes!",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya K.",
    text: "As someone who grew up with authentic Pakistani cuisine, I can vouch for the quality here. The palak paneer tastes just like home.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sarah R.",
    text: "Great ambiance, friendly staff, and the biryani is out of this world. Our new favorite date night spot!",
    rating: 4,
  },
];

export const galleryImages = [
  { src: "/images/dishes/butter-chicken.jpg", alt: "Butter Chicken", category: "food" },
  { src: "/images/dishes/biryani.jpg", alt: "Chicken Biryani", category: "food" },
  { src: "/images/gallery/interior.jpg", alt: "Restaurant Interior", category: "interior" },
  { src: "/images/dishes/tandoori.jpg", alt: "Tandoori Platter", category: "food" },
  { src: "/images/gallery/spices.jpg", alt: "Indian Spices", category: "food" },
  { src: "/images/dishes/thali.jpg", alt: "Golden Thali", category: "food" },
  { src: "/images/dishes/appetizers.jpg", alt: "Appetizer Platter", category: "food" },
  { src: "/images/dishes/naan.jpg", alt: "Garlic Naan", category: "food" },
  { src: "/images/dishes/palak-paneer.jpg", alt: "Palak Paneer", category: "food" },
  { src: "/images/dishes/gulab-jamun.jpg", alt: "Gulab Jamun", category: "food" },
  { src: "/images/dishes/curries.jpg", alt: "Curry Trio", category: "food" },
  { src: "/images/dishes/lassi.jpg", alt: "Mango Lassi", category: "drinks" },
];
