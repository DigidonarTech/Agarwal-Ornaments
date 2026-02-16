import { motion } from 'framer-motion';

const featuredItems = [
  { name: 'Diamond Solitaire Ring', price: '₹1,25,000', img: 'https://via.placeholder.com/400x500/111/FFD700?text=Diamond+Ring' },
  { name: 'Gold Pearl Necklace', price: '₹85,000', img: 'https://via.placeholder.com/400x500/111/FFD700?text=Pearl+Necklace' },
  { name: 'Emerald Drop Earrings', price: '₹65,000', img: 'https://via.placeholder.com/400x500/111/FFD700?text=Emerald+Earrings' },
  { name: 'Bridal Gold Set', price: '₹2,50,000', img: 'https://via.placeholder.com/400x500/111/FFD700?text=Bridal+Set' },
];

const Home = () => {
  return (
    <>
      {/* Hero Section – Full Screen Luxury */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-black"></div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 max-w-4xl"
        >
          <img src="/assets/logo.png" alt="Agarwal Ornaments" className="mx-auto h-32 md:h-48 mb-8" />
          <h1 className="text-5xl md:text-7xl font-bold text-gold mb-6 tracking-wide">Timeless Elegance</h1>
          <p className="text-xl md:text-2xl text-gold/80 mb-10">Exquisite craftsmanship in gold and diamonds</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-10 py-4 bg-transparent border-2 border-gold text-gold uppercase tracking-widest text-sm hover:bg-gold hover:text-black transition duration-500"
          >
            Explore Collections
          </motion.button>
        </motion.div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-950">
        <h2 className="text-4xl md:text-5xl text-gold text-center mb-16 font-light tracking-widest">Featured Pieces</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {featuredItems.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group bg-gray-900/50 rounded-lg overflow-hidden border border-gold/10 hover:border-gold/50 transition duration-500"
            >
              <div className="relative overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-80 object-cover group-hover:scale-110 transition duration-700" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl text-gold mb-2">{item.name}</h3>
                <p className="text-gold/80 mb-4">{item.price}</p>
                <button className="px-6 py-2 border border-gold/70 text-gold/90 text-sm uppercase tracking-wider hover:bg-gold/20 transition">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Simple About Teaser */}
      <section className="py-20 px-6 text-center bg-black">
        <h2 className="text-4xl text-gold mb-8">Heritage of Craftsmanship</h2>
        <p className="max-w-3xl mx-auto text-gold/70 text-lg leading-relaxed">
          Agarwal Ornaments brings you generations of expertise in fine jewelry. Each piece is meticulously crafted to celebrate life's precious moments.
        </p>
      </section>
    </>
  );
};

export default Home;