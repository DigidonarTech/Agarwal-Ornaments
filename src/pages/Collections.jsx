import { motion } from 'framer-motion';

// Dummy categories data – real mein yahan se dynamic bana sakte hain baad mein
const collections = [
  {
    id: 1,
    title: 'Diamond Rings',
    description: 'Timeless solitaires & statement pieces crafted with precision diamonds.',
    image: 'https://thumbs.dreamstime.com/b/sparkling-diamond-engagement-ring-dark-background-high-quality-jewelry-shot-stunning-solitaire-marriage-close-up-326521277.jpg', // Replace with your assets/ring1.jpg etc.
    link: '/collections/rings', // Future sub-page if needed
  },
  {
    id: 2,
    title: 'Gold Necklaces',
    description: 'Elegant chains, pendants & layered designs in pure gold.',
    image: 'https://thumbs.dreamstime.com/b/gold-jewelry-display-rings-necklaces-bracelets-luxury-store-diamond-ring-brown-showcase-earrings-gems-collection-morning-385712389.jpg',
    link: '/collections/necklaces',
  },
  {
    id: 3,
    title: 'Earrings & Jhumkas',
    description: 'From classic studs to traditional jhumkas with precious stones.',
    image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/157914f2-0c04-4598-9545-4d48935b8683.__CR0,0,1940,1200_PT0_SX970_V1___.jpg',
    link: '/collections/earrings',
  },
  {
    id: 4,
    title: 'Bridal Sets',
    description: 'Complete bridal jewelry sets for your special day – necklaces, earrings, maangtikka & more.',
    image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/99767f82-a6ca-4c1b-bf53-b7ea09fa1799.__CR0,0,1940,1200_PT0_SX970_V1___.jpg',
    link: '/collections/bridal',
  },
  {
    id: 5,
    title: 'Pendants & Mangalsutras',
    description: 'Symbolic & stylish pendants in gold & diamond for everyday elegance.',
    image: 'https://thumbs.dreamstime.com/b/elegant-diamond-gold-rings-displayed-luxurious-setting-stunning-collection-showcased-jewelry-display-highlighting-330149748.jpg',
    link: '/collections/pendants',
  },
  {
    id: 6,
    title: 'Custom Designs',
    description: 'Personalized jewelry crafted as per your vision – bring your ideas to life.',
    image: 'https://img.pikbest.com/ai/illus_our/20230428/51980d9121d60a25f7925a3528c5c73a.jpg!sw800',
    link: '/custom',
  },
];

const Collections = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16 md:mb-20"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold tracking-widest mb-6">
          Our Collections
        </h1>
        <p className="text-gold/80 text-lg md:text-xl max-w-3xl mx-auto font-light">
          Discover exquisite pieces that blend tradition with modern luxury. Each collection is handcrafted with the finest materials.
        </p>
      </motion.div>

      {/* Grid of Collections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
        {collections.map((collection, idx) => (
          <motion.div 
            key={collection.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group bg-gray-900/40 rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/50 shadow-xl hover:shadow-2xl hover:shadow-gold/20 transition-all duration-500"
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <img 
                src={collection.image} 
                alt={collection.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            </div>
            
            <div className="p-8 text-center">
              <h3 className="text-2xl md:text-3xl text-gold mb-4 font-semibold">{collection.title}</h3>
              <p className="text-gold/80 mb-6 text-base md:text-lg">{collection.description}</p>
              
              <a 
                href={collection.link} 
                className="inline-block px-8 py-4 border-2 border-gold text-gold uppercase tracking-wider text-sm font-medium hover:bg-gold hover:text-black transition duration-500 rounded-sm"
              >
                View Collection
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center mt-20"
      >
        <p className="text-gold/70 text-xl mb-8">
          Can't find what you're looking for? We specialize in custom designs.
        </p>
        <a 
          href="/contact" 
          className="px-10 py-5 bg-transparent border-2 border-gold text-gold uppercase tracking-widest hover:bg-gold hover:text-black transition duration-500 rounded-sm text-lg"
        >
          Customize Your Piece
        </a>
      </motion.div>
    </div>
  );
};

export default Collections;