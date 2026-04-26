import { Helmet } from 'react-helmet-async';
import Hero from '@/components/sections/home/Hero';
import Marquee from '@/components/sections/home/Marquee';
import FeaturedDishes from '@/components/sections/home/FeaturedDishes';
import WhyGoldenLotus from '@/components/sections/home/WhyGoldenLotus';
import Testimonials from '@/components/sections/home/Testimonials';
import CTABanner from '@/components/sections/home/CTABanner';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>The Pearl Pakistani Restaurant | Authentic Pakistani Cuisine in Doha, QA</title>
        <meta name="description" content="Experience authentic Pakistani cuisine at The Pearl Grill. Order online for pickup. Butter Chicken, Biryani, fusion specialties. Doha, Qatar." />
        <meta property="og:title" content="The Pearl Pakistani Restaurant" />
        <meta property="og:description" content="Authentic Pakistani cuisine in Doha, Qatar" />
        <meta property="og:type" content="restaurant" />
        <link rel="canonical" href="https://www.thepearlgrill.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "The Pearl Pakistani Restaurant",
            "cuisine": "Pakistani",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Zone 39 Doha",
              "addressLocality": "Doha",
              "addressRegion": "QA",
              "postalCode": "13151"
            },
            "servesCuisine": "Pakistani",
            "hasMenu": "https://www.thepearlgrill.com/menu"
          })}
        </script>
      </Helmet>
      <main>
        <Hero />
        <Marquee />
        <FeaturedDishes />
        <WhyGoldenLotus />
        <Testimonials />
        <CTABanner />
      </main>
    </>
  );
}