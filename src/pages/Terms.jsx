import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold tracking-wide mb-6">
          Terms & Conditions
        </h1>
        <p className="text-gold/70 text-lg md:text-xl font-light">
          Last Updated: February 16, 2026
        </p>
      </motion.div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="prose prose-invert prose-gold max-w-none space-y-10 text-gold/90 text-base md:text-lg leading-relaxed"
      >
        <p>
          Welcome to <span className="text-gold font-medium">Agarwal Ornaments</span>. These Terms and Conditions govern your use of our website <span className="text-gold">www.agarwalornaments.com</span> (the "Site") and the purchase of products from us. By accessing or using the Site, or placing an order, you agree to be bound by these terms.
        </p>

        <section>
          <h2 className="text-3xl md:text-4xl text-gold font-semibold mb-6">1. Use of the Website</h2>
          <ul className="list-disc pl-6 space-y-3 mt-4">
            <li>You must be at least 18 years old or have parental/guardian consent to use the Site.</li>
            <li>You agree not to misuse the Site (e.g., no hacking, spamming, uploading viruses, or unauthorized access).</li>
            <li>We reserve the right to suspend or terminate access if these terms are violated.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl text-gold font-semibold mb-6">2. Products & Orders</h2>
          <ul className="list-disc pl-6 space-y-3 mt-4">
            <li>All products displayed are subject to availability. We reserve the right to discontinue or modify products without notice.</li>
            <li>Prices are in INR and inclusive of applicable taxes (GST). Shipping charges extra (calculated at checkout).</li>
            <li>Orders are confirmed only after payment is received and we send an order confirmation email.</li>
            <li>We may cancel orders in case of pricing errors, stock unavailability, or suspected fraud (with full refund).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl text-gold font-semibold mb-6">3. Payment</h2>
          <p>We accept payments through secure third-party gateways (Razorpay, PayU, etc.). All transactions are encrypted. We do not store your card details.</p>
          <p className="mt-4">You are responsible for all charges on your order, including any customs duties or import taxes if shipping internationally.</p>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl text-gold font-semibold mb-6">4. Shipping & Delivery</h2>
          <ul className="list-disc pl-6 space-y-3 mt-4">
            <li>Delivery timelines are estimates (usually 5-10 business days within India; international may take longer).</li>
            <li>Shipping is free on orders above ₹10,000 (or as per current promotions). Otherwise, charges apply.</li>
            <li>Risk of loss passes to you upon delivery. We are not liable for delays due to force majeure (natural disasters, strikes, etc.).</li>
            <li>Track your order via the link in confirmation email or contact us.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl text-gold font-semibold mb-6">5. Returns, Refunds & Exchanges</h2>
          <ul className="list-disc pl-6 space-y-3 mt-4">
            <li>Returns accepted within 7 days of delivery for manufacturing defects or wrong item (with original packaging, tags, certificate intact).</li>
            <li>No returns/exchanges on custom-made, personalized, or sale items.</li>
            <li>Refunds processed within 7-10 business days to original payment method (minus shipping if applicable).</li>
            <li>Customer must bear return shipping cost unless item is defective/wrong from our side.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl text-gold font-semibold mb-6">6. Warranty & After-Sales</h2>
          <p>Most jewelry comes with a 6-month to 1-year warranty against manufacturing defects (varies by product – check product page/certificate). Warranty does not cover normal wear & tear, misuse, or damage from chemicals/cleaning agents.</p>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl text-gold font-semibold mb-6">7. Intellectual Property</h2>
          <p>All content (images, designs, logos, text) on the Site is owned by Agarwal Ornaments or licensed to us. You may not copy, reproduce, or use without permission.</p>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl text-gold font-semibold mb-6">8. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, we are not liable for indirect, incidental, or consequential damages arising from use of the Site or products.</p>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl text-gold font-semibold mb-6">9. Governing Law & Jurisdiction</h2>
          <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Lucknow, Uttar Pradesh.</p>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl text-gold font-semibold mb-6">10. Changes to Terms</h2>
          <p>We may update these Terms from time to time. Continued use of the Site after changes constitutes acceptance.</p>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl text-gold font-semibold mb-6">11. Contact Us</h2>
          <p className="mb-4">
            For any questions regarding these Terms, please reach out:
          </p>
          <div className="bg-gray-900/50 p-6 rounded-xl border border-gold/20">
            <p><strong>Agarwal Ornaments</strong></p>
            <p>G 10 JAIN MARKET, H NO 104 B BLOCK BHOOTNATH
MARKET, INDIRA NAGAR, Uttar Pradesh, 226016</p>
            <p>Email: <a href="mailto:support@agarwalornaments.com" className="text-gold hover:underline">Gargrishi4321@gmail.com</a></p>
            <p>Phone: +91-9598315848</p>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Terms;