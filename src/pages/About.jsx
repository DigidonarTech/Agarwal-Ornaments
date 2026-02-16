import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
      {/* Hero Header */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16 md:mb-20"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold tracking-widest mb-6">
          About Agarwal Ornaments
        </h1>
        <p className="text-gold/80 text-lg md:text-xl max-w-3xl mx-auto font-light">
          Where tradition meets timeless elegance – crafting stories in gold since generations.
        </p>
      </motion.div>

      {/* Our Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-gold/90 text-base md:text-lg leading-relaxed"
        >
          <h2 className="text-3xl md:text-4xl text-gold font-semibold mb-6">Our Legacy</h2>
          <p>
            Agarwal Ornaments is a proud family-owned jewelry house rooted in the heart of Lucknow, Uttar Pradesh. For over three decades, we have been dedicated to preserving the rich heritage of Indian craftsmanship while embracing contemporary designs.
          </p>
          <p>
            What began as a small workshop has grown into a trusted name for exquisite gold, diamond, and gemstone jewelry. Every piece is a testament to our commitment to quality, purity, and artistry – handcrafted with the same passion that has been passed down through generations.
          </p>
          <p>
            We believe jewelry is more than adornment; it's an emotion, a tradition, and a celebration of life's precious moments.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border border-gold/20 shadow-2xl"
        >
          <img 
            src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_580,h_387/https://www.orientbell.com/blog/wp-content/uploads/2024/02/shutterstock_2317483599-1024x683.jpg" 
            alt="Elegant jewelry showroom display in traditional Indian style" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </motion.div>
      </div>

      {/* Craftsmanship Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl text-gold font-semibold mb-8">The Art of Craftsmanship</h2>
        <p className="text-gold/80 max-w-4xl mx-auto text-lg leading-relaxed">
          Our skilled artisans bring centuries-old techniques to life, blending traditional methods with modern precision. From intricate filigree work to flawless diamond setting, every detail is perfected with unwavering dedication.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gray-900/40 p-8 rounded-xl border border-gold/10 text-center"
        >
          <img 
            src="https://c8.alamy.com/comp/ET1WKX/goldsmith-making-jewellery-in-kathputli-colony-at-delhi-india-asia-ET1WKX.jpg" 
            alt="Indian goldsmith crafting traditional jewelry" 
            className="w-full h-48 object-cover rounded-lg mb-6 mx-auto"
          />
          <h3 className="text-xl text-gold mb-4">Handcrafted Mastery</h3>
          <p className="text-gold/70">Every piece is meticulously handcrafted by our expert artisans in Lucknow.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gray-900/40 p-8 rounded-xl border border-gold/10 text-center"
        >
          <img 
            src="https://thumbs.dreamstime.com/b/goldsmith-working-thai-traditional-gold-skilled-goldsmith-working-traditional-thai-gold-demonstrating-artistry-365536330.jpg" 
            alt="Artisan working on intricate gold jewelry" 
            className="w-full h-48 object-cover rounded-lg mb-6 mx-auto"
          />
          <h3 className="text-xl text-gold mb-4">Purity & Quality</h3>
          <p className="text-gold/70">We use only hallmarked gold and certified diamonds for lasting brilliance.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-900/40 p-8 rounded-xl border border-gold/10 text-center"
        >
          <img 
            src="https://content.jdmagicbox.com/v2/comp/lucknow/l6/0522px522.x522.171202193042.i8l6/catalogue/r-r-jewellers-gomti-nagar-lucknow-jewellery-showrooms-3zb8y5b1ps.jpg" 
            alt="Traditional jewelry showroom interior in Lucknow" 
            className="w-full h-48 object-cover rounded-lg mb-6 mx-auto"
          />
          <h3 className="text-xl text-gold mb-4">Customer-Centric</h3>
          <p className="text-gold/70">Personalized service and trust built over years in the heart of Lucknow.</p>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-gold/80 text-xl mb-8">
          Join our legacy. Visit us in Lucknow or explore our collections online.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="/collections" 
            className="px-10 py-5 border-2 border-gold text-gold uppercase tracking-wider hover:bg-gold hover:text-black transition duration-500 rounded-sm text-lg"
          >
            Explore Collections
          </a>
          <a 
            href="/contact" 
            className="px-10 py-5 bg-transparent border-2 border-gold text-gold uppercase tracking-wider hover:bg-gold hover:text-black transition duration-500 rounded-sm text-lg"
          >
            Visit Our Store
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;