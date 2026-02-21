import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

// Affordable items – names Home page se completely different
const collections = [
  {
    id: 1,
    name: 'Minimal Oxidized Band Ring',
    title: 'Minimal Oxidized Band Ring',
    description: 'Simple oxidized silver band – lightweight & trendy.',
    price: '₹149',
    img: 'https://thumbs.dreamstime.com/b/sparkling-diamond-engagement-ring-dark-background-high-quality-jewelry-shot-stunning-solitaire-marriage-close-up-326521277.jpg',
  },
  {
    id: 2,
    name: 'Thin Gold Plated Necklace',
    title: 'Thin Gold Plated Necklace',
    description: 'Delicate everyday chain in gold plated finish.',
    price: '₹179',
    img: 'https://thumbs.dreamstime.com/b/gold-jewelry-display-rings-necklaces-bracelets-luxury-store-diamond-ring-brown-showcase-earrings-gems-collection-morning-385712389.jpg',
  },
  {
    id: 3,
    name: 'Pearl Drop Studs',
    title: 'Pearl Drop Studs',
    description: 'Small pearl stud earrings for casual look.',
    price: '₹129',
    img: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/157914f2-0c04-4598-9545-4d48935b8683.__CR0,0,1940,1200_PT0_SX970_V1___.jpg',
  },
  {
    id: 4,
    name: 'Heart Shape Pendant Chain',
    title: 'Heart Shape Pendant Chain',
    description: 'Cute heart pendant with thin chain set.',
    price: '₹199',
    img: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/99767f82-a6ca-4c1b-bf53-b7ea09fa1799.__CR0,0,1940,1200_PT0_SX970_V1___.jpg',
  },
  {
    id: 5,
    name: 'Black Bead Mangalsutra',
    title: 'Black Bead Mangalsutra',
    description: 'Traditional lookalike mangalsutra pendant.',
    price: '₹169',
    img: 'https://thumbs.dreamstime.com/b/elegant-diamond-gold-rings-displayed-luxurious-setting-stunning-collection-showcased-jewelry-display-highlighting-330149748.jpg',
  },
  {
    id: 6,
    name: 'Butterfly Inspired Earring',
    title: 'Butterfly Inspired Earring',
    description: 'Butterfly motif earrings in silver tone.',
    price: '₹189',
    img: 'https://img.pikbest.com/ai/illus_our/20230428/51980d9121d60a25f7925a3528c5c73a.jpg!sw800',
  },
];

const Collections = () => {
  const { addToCart } = useCart();

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
          Affordable Collections
        </h1>
        <p className="text-gold/80 text-lg md:text-xl max-w-3xl mx-auto font-light">
          Discover beautiful pieces starting under ₹199 – perfect for daily wear & gifting.
        </p>
      </motion.div>

      {/* Grid of Affordable Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
        {collections.map((item, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group bg-gray-900/40 rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/50 shadow-xl hover:shadow-2xl hover:shadow-gold/20 transition-all duration-500"
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            </div>
            
            <div className="p-6 md:p-8 text-center">
              <h3 className="text-2xl md:text-3xl text-gold mb-3 font-semibold">{item.title}</h3>
              <p className="text-gold/80 mb-4 text-base md:text-lg">{item.description}</p>
              <p className="text-xl text-gold font-bold mb-6">{item.price}</p>
              
              <button 
                onClick={() => addToCart(item)}
                className="inline-block px-8 py-4 bg-gold text-black uppercase tracking-wider text-sm font-medium hover:bg-gold-dark hover:text-white transition duration-500 rounded-sm shadow-md hover:shadow-gold/30"
              >
                Add to Cart
              </button>
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
          Want something special? We also do custom designs on budget.
        </p>
        <Link 
          to="/contact"
          className="px-10 py-5 bg-transparent border-2 border-gold text-gold uppercase tracking-widest hover:bg-gold hover:text-black transition duration-500 rounded-sm text-lg"
        >
          Customize Your Piece
        </Link>
      </motion.div>
    </div>
  );
};

export default Collections;