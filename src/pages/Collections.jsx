import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';


import image1 from '../assets/im1.webp';
import image2 from '../assets/im2.jpg';
import image3 from '../assets/im3.webp';
import image4 from '../assets/im4.webp';
import image5 from '../assets/im5.webp';
import image6 from '../assets/im6.webp';


const collections = [
  {
    id: 1,
    name: 'Royal Filigree Kada',
    title: 'Royal Filigree Kada',
    description: 'Elegant royal filigree kada – lightweight & trendy.',
    price: '₹14900',
    img: image1,
  },
  {
    id: 2,
    name: 'Classic Temple Gold Mala',
    title: 'Classic Temple Gold Mala',
    description: 'Traditional gold mala with intricate temple design.',
    price: '₹14999',
    img: image2,
  },
  {
    id: 3,
    name: 'Floral Enamel Gold Bangles',
    title: 'Floral Enamel Gold Bangles',
    description: 'Beautiful floral enamel bangles in gold tone.',
    price: '₹145000',
    img: image3,
  },
  {
    id: 4,
    name: 'Royal Navratna Pendant Set',
    title: 'Royal Navratna Pendant Set',
    description: 'Elegant pendant set with royal navratna stones.',
    price: '₹59999',
    img: image4,
  },
  {
    id: 5,
    name: 'Classic Shagun Mangalsutra',
    title: 'Classic Shagun Mangalsutra',
    description: 'Traditional lookalike mangalsutra pendant.',
    price: '₹70000',
    img: image5,
  },
  {
    id: 6,
    name: 'Pink Pearl Bridal Necklace',
    title: 'Pink Pearl Bridal Necklace',
    description: 'Elegant bridal necklace with pink pearls.',
    price: '₹18900',
    img: image6,
  },
];

const Collections = () => {
  const { addToCart } = useCart();

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-20">
     
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