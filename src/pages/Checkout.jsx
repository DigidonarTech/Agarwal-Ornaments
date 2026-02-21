import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, cartCount, setCartItems } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'cod',
  });

  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const total = cartItems.reduce(
    (sum, item) => sum + (parseFloat(item.price.replace('₹', '').replace(',', '')) * item.quantity),
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Delivery address is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Generate reference ID
    const refId = 'AO-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(refId);
    setOrderPlaced(true);

    // Clear cart after successful order
    setCartItems([]);

    // Optional: Real mein yahan backend call daal sakte ho (order save)
  };

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="pt-32 pb-24 px-6 text-center">
        <h1 className="text-5xl text-gold mb-8">Checkout</h1>
        <p className="text-xl text-gold/80 mb-12">Your cart is empty. Let's add some beautiful pieces!</p>
        <Link 
          to="/collections"
          className="inline-block px-12 py-5 bg-gold text-black uppercase tracking-widest text-lg font-medium hover:bg-gold-dark hover:text-white transition rounded-sm shadow-lg"
        >
          Browse Collections
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 md:px-10 lg:px-16">
      {!orderPlaced ? (
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl text-gold font-bold text-center mb-4 tracking-wide">Secure Checkout</h1>
          <p className="text-gold/70 text-center text-lg mb-12">Complete your order – Cash on Delivery available</p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: Form – 3 columns on large screens */}
            <div className="lg:col-span-3">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-900/60 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 md:p-10 shadow-2xl"
              >
                <h2 className="text-2xl md:text-3xl text-gold mb-8 font-semibold">Shipping & Contact Details</h2>

                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gold/90 mb-2 font-medium">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-4 bg-black/60 border border-gold/40 text-white rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition"
                        placeholder="Enter your full name"
                      />
                      {errors.name && <p className="text-red-400 text-sm mt-2">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-gold/90 mb-2 font-medium">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 bg-black/60 border border-gold/40 text-white rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition"
                        placeholder="you@example.com"
                      />
                      {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gold/90 mb-2 font-medium">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-4 bg-black/60 border border-gold/40 text-white rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition"
                        placeholder="+91 XXXXXXXXXX"
                      />
                      {errors.phone && <p className="text-red-400 text-sm mt-2">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-gold/90 mb-2 font-medium">PIN Code</label>
                      <input
                        type="text"
                        name="pincode"
                        className="w-full p-4 bg-black/60 border border-gold/40 text-white rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition"
                        placeholder="226016"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gold/90 mb-2 font-medium">Full Delivery Address *</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows={4}
                      className="w-full p-4 bg-black/60 border border-gold/40 text-white rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition"
                      placeholder="House no, Street, Area, City, State, PIN"
                    />
                    {errors.address && <p className="text-red-400 text-sm mt-2">{errors.address}</p>}
                  </div>

                  {/* Payment Section */}
                  <div className="pt-6 border-t border-gold/20">
                    <h3 className="text-xl text-gold mb-6 font-semibold">Payment Method</h3>
                    <div className="space-y-5">
                      <label className="flex items-center space-x-4 cursor-pointer group">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cod"
                          checked={formData.paymentMethod === 'cod'}
                          onChange={handleChange}
                          className="w-5 h-5 text-gold bg-black border-gold focus:ring-gold"
                        />
                        <span className="text-gold group-hover:text-white transition">Cash on Delivery (COD)</span>
                      </label>

                      <label className="flex items-center space-x-4 opacity-50 cursor-not-allowed">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="upi"
                          disabled
                          className="w-5 h-5 text-gold bg-black border-gold focus:ring-gold"
                        />
                        <div>
                          <span className="text-gold">UPI Payment</span>
                          <span className="block text-gold/60 text-sm">Coming Soon</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full mt-10 py-5 bg-gradient-to-r from-gold to-yellow-600 text-black uppercase tracking-widest text-lg font-bold rounded-lg shadow-2xl hover:from-yellow-500 hover:to-gold transition-all duration-300"
                  >
                    Place Your Order • ₹{total.toFixed(2)}
                  </motion.button>
                </form>
              </motion.div>
            </div>

            {/* Right: Order Summary – sticky on large screens */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gray-900/60 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 lg:sticky lg:top-32 shadow-2xl"
              >
                <h2 className="text-2xl md:text-3xl text-gold mb-8 font-semibold">Order Summary</h2>

                <div className="space-y-6 mb-10 max-h-96 overflow-y-auto pr-2">
                  {cartItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 pb-4 border-b border-gold/10 last:border-b-0">
                      <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border border-gold/30">
                        <img 
                          src={item.img || item.image || 'https://via.placeholder.com/64?text=' + item.name.charAt(0)}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-gold font-medium">{item.name}</p>
                        <p className="text-gold/70 text-sm">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-gold font-semibold whitespace-nowrap">
                        ₹{(parseFloat(item.price.replace('₹', '').replace(',', '')) * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gold/20 pt-6 space-y-4">
                  <div className="flex justify-between text-gold/90">
                    <span>Subtotal ({cartCount} items)</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gold/90">
                    <span>Shipping</span>
                    <span className="text-green-400">Free</span>
                  </div>
                  <div className="flex justify-between text-2xl font-bold text-gold pt-4 border-t border-gold/10">
                    <span>Grand Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      ) : (
        /* Thank You Screen */
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-24 max-w-3xl mx-auto"
        >
          <div className="mb-10">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="inline-block w-24 h-24 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-green-500/50"
            >
              <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
          </div>

          <h1 className="text-5xl md:text-6xl text-gold font-bold mb-6">Order Placed Successfully!</h1>
          
          <p className="text-gold/80 text-xl md:text-2xl mb-8 leading-relaxed">
            Thank you for shopping with Agarwal Ornaments. Your order is confirmed.
          </p>

          <div className="bg-gray-900/60 border border-gold/20 rounded-xl p-8 mb-12 max-w-xl mx-auto">
            <p className="text-gold text-xl mb-4">Reference ID</p>
            <p className="text-3xl md:text-4xl text-white font-mono tracking-wider font-bold">
              {referenceId}
            </p>
            <p className="text-gold/70 mt-4 text-lg">
              Cash on Delivery selected. We'll contact you soon for confirmation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/collections"
              className="px-12 py-5 bg-gold text-black uppercase tracking-widest text-lg font-medium hover:bg-gold-dark hover:text-white transition rounded-sm shadow-lg"
            >
              Continue Shopping
            </Link>
            <Link 
              to="/"
              className="px-12 py-5 border-2 border-gold text-gold uppercase tracking-widest text-lg font-medium hover:bg-gold hover:text-black transition rounded-sm"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Checkout;