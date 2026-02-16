import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setError(''); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.consent) {
      setError('Please provide your consent to proceed.');
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }

    // Yeh abhi dummy submit – real mein EmailJS ya API call daal dena
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      consent: false,
    });
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold tracking-wide mb-6">
          Contact Us
        </h1>
        <p className="text-gold/80 text-lg md:text-xl font-light max-w-2xl mx-auto">
          We would love to hear from you. Reach out for inquiries, custom orders, or just to say hello.
        </p>
      </motion.div>

      {/* Form */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="bg-gray-900/40 border border-gold/20 rounded-2xl p-8 md:p-12 shadow-2xl"
      >
        {submitted ? (
          <div className="text-center py-12">
            <h2 className="text-3xl text-gold mb-6">Thank You!</h2>
            <p className="text-gold/80 text-lg">Your message has been sent. We'll get back to you soon.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-8 px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-black transition duration-500 rounded-sm"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gold/90 mb-2 text-lg">Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 bg-black border border-gold/50 text-white rounded-md focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gold/90 mb-2 text-lg">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 bg-black border border-gold/50 text-white rounded-md focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone (Optional) */}
            <div>
              <label htmlFor="phone" className="block text-gold/90 mb-2 text-lg">Phone (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 bg-black border border-gold/50 text-white rounded-md focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-gold/90 mb-2 text-lg">Message <span className="text-red-500">*</span></label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full p-4 bg-black border border-gold/50 text-white rounded-md focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition"
                placeholder="How can we assist you today?"
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1.5 h-5 w-5 bg-black border-gold/50 text-gold focus:ring-gold rounded"
              />
              <label htmlFor="consent" className="text-gold/90 text-sm md:text-base leading-relaxed">
                I consent to Agarwal Ornaments collecting and processing my personal data as described in our{' '}
                <a href="/privacy" className="text-gold underline hover:text-white transition">
                  Privacy Policy
                </a>
                . I understand this consent is required for us to respond to my inquiry.
              </label>
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-center font-medium">{error}</p>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={!formData.consent}
                className={`px-10 py-4 uppercase tracking-widest text-sm md:text-base font-medium rounded-sm transition duration-500 ${
                  formData.consent
                    ? 'bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-black'
                    : 'bg-gray-800 border-gray-700 text-gray-500 cursor-not-allowed'
                }`}
              >
                Send Message
              </motion.button>
            </div>

            <p className="text-center text-gold/60 text-sm mt-4">
              We'll respond within 24-48 hours. For urgent matters, call us at +91-XXXXXXXXXX.
            </p>
          </form>
        )}
      </motion.div>

      {/* Contact Info Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl text-gold mb-8">Other Ways to Reach Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-900/40 p-8 rounded-xl border border-gold/10">
            <h3 className="text-xl text-gold mb-4">Visit Us</h3>
            <p className="text-gold/80">Lucknow, Uttar Pradesh, India</p>
          </div>
          <div className="bg-gray-900/40 p-8 rounded-xl border border-gold/10">
            <h3 className="text-xl text-gold mb-4">Email</h3>
            <a href="mailto:support@agarwalornaments.com" className="text-gold hover:underline">
              support@agarwalornaments.com
            </a>
          </div>
          <div className="bg-gray-900/40 p-8 rounded-xl border border-gold/10">
            <h3 className="text-xl text-gold mb-4">Phone</h3>
            <p className="text-gold/80">+91-XXXXXXXXXX</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;