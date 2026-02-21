import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img1 from '../assets/ring2.jpg';
import img2 from '../assets/jhumka vibes.jpg';
import img3 from '../assets/DIY earrings for party.jpg';
import img4 from '../assets/img4.jpg';

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
          A small family jewelry shop in Lucknow bringing affordable & beautiful pieces for everyday use.
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
          <h2 className="text-3xl md:text-4xl text-gold font-semibold mb-6">Our Story</h2>
          <p>
            Agarwal Ornaments is a small family-run jewelry shop located in the heart of Lucknow, Uttar Pradesh. 
            For many years, we have been serving our local community with simple, stylish, and pocket-friendly jewelry.
          </p>
          <p>
            We offer everyday wear pieces like fashion chains, earrings, rings, pendants, oxidized items, and more – 
            all made with care and designed to fit everyone's budget.
          </p>
          <p>
            Our goal is simple: bring beautiful jewelry to every woman without breaking the bank. 
            We believe everyone deserves to look good every day.
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
            src={img4} 
            alt="Local jewelry shop display in Lucknow" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </motion.div>
      </div>

      {/* What We Offer Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl text-gold font-semibold mb-8">What We Offer</h2>
        <p className="text-gold/80 max-w-4xl mx-auto text-lg leading-relaxed">
          We make and sell only daily-use jewelry that is comfortable, lightweight, and easy on the pocket. 
          Every piece is carefully crafted in our small shop with love and attention.
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
            src={img3} 
            className="w-full h-48 object-cover rounded-lg mb-6 mx-auto"
          />
          <h3 className="text-xl text-gold mb-4">Handmade with Love</h3>
          <p className="text-gold/70">Each piece is made by hand in our small shop with care.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gray-900/40 p-8 rounded-xl border border-gold/10 text-center"
        >
          <img 
            src={img1}
            alt="Jewelry crafting process" 
            className="w-full h-48 object-cover rounded-lg mb-6 mx-auto"
          />
          <h3 className="text-xl text-gold mb-4">Budget-Friendly Prices</h3>
          <p className="text-gold/70">Beautiful jewelry starting from just ₹99 – perfect for everyone.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-900/40 p-8 rounded-xl border border-gold/10 text-center"
        >
          <img 
            src={img2}
            alt="Jewelry display in local shop" 
            className="w-full h-48 object-cover rounded-lg mb-6 mx-auto"
          />
          <h3 className="text-xl text-gold mb-4">From Lucknow with Love</h3>
          <p className="text-gold/70">Serving customers from Indira Nagar with personal care and trust.</p>
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
          Come visit our shop in Lucknow or explore online – we're waiting for you!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/collections"
            className="px-10 py-5 border-2 border-gold text-gold uppercase tracking-wider hover:bg-gold hover:text-black transition duration-500 rounded-sm text-lg"
          >
            View Collections
          </Link>
          <Link 
            to="/contact"
            className="px-10 py-5 bg-transparent border-2 border-gold text-gold uppercase tracking-wider hover:bg-gold hover:text-black transition duration-500 rounded-sm text-lg"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default About;