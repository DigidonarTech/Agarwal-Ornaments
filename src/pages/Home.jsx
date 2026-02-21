import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';
import img1 from '../assets/ring1.jpg';
import img2 from '../assets/necklace1.jpg';
import img3 from '../assets/earrings1.jpg';
import img4 from '../assets/ring3.jpg';
import { useCart } from '../context/CartContext';

const featuredItems = [
  { name: 'Silver Oxidized Ring', price: '₹199', img: img1 },
  { name: 'Daily Wear Gold Plated Chain', price: '₹349', img: img2 },
  { name: 'Stylish Stud Earrings', price: '₹249', img: img3 },
  { name: 'Trendy Pendant Set', price: '₹499', img: img4 },
];

const Home = () => {
  const { addToCart } = useCart();  // ← Yeh line add kiya

  return (
    <>
      {/* Hero Section – Full Screen Luxury (same as before) */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-gray-950"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="relative z-10 max-w-5xl w-full"
        >
          <img
            src={logo}
            alt="Agarwal Ornaments"
            className="mx-auto h-28 md:h-40 lg:h-48 mb-8 md:mb-12 object-contain drop-shadow-2xl"
          />

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gold mb-6 md:mb-8 tracking-wider leading-tight">
            Timeless Elegance
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gold/70 mb-10 md:mb-14 max-w-3xl mx-auto font-light">
            Exquisite craftsmanship in gold, diamonds & precious stones
          </p>

          <motion.div whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,215,0,0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-block">  {/* motion.div wrap kiya */}
            <Link
              to="/collections"
              className="px-10 py-4 md:px-12 md:py-5 bg-transparent border-2 border-gold text-gold uppercase tracking-widest text-sm md:text-base font-medium hover:bg-gold hover:text-black transition-all duration-500 rounded-sm inline-block"
            >
              Explore Collections
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Pieces – Updated with affordable items */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-black to-gray-950">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-gold text-center mb-16 md:mb-20 font-light tracking-widest">
          Featured Pieces
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-7xl mx-auto">
          {featuredItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="group bg-gray-900/40 rounded-xl overflow-hidden border border-gold/5 hover:border-gold/40 shadow-lg hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl text-gold mb-3 font-medium">{item.name}</h3>
                <p className="text-gold/80 text-lg md:text-xl mb-6 font-semibold">{item.price}</p>

                <button
                  onClick={() => addToCart(item)}
                  className="px-6 py-3 bg-gold text-black uppercase tracking-wider text-sm font-medium hover:bg-gold-dark hover:text-white transition-all duration-300 rounded-sm shadow-md hover:shadow-gold/30"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Heritage About Teaser (same) */}
      <section className="py-20 md:py-28 px-6 text-center bg-black border-t border-gold/10">
        <h2 className="text-4xl md:text-5xl text-gold mb-10 md:mb-12 font-light tracking-wide">
          Heritage of Craftsmanship
        </h2>
        <p className="max-w-4xl mx-auto text-gold/70 text-lg md:text-xl leading-relaxed font-light">
          For generations, Agarwal Ornaments has been crafting jewelry that tells stories of love, tradition, and timeless beauty.
          Every piece is handcrafted with passion and precision in the heart of Lucknow.
        </p>
      </section>
    </>
  );
};

export default Home;