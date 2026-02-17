import { motion } from 'framer-motion';

const Privacy = () => {
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
          Privacy Policy
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
          At <span className="text-gold font-medium">Agarwal Ornaments</span>, we value your trust and are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <span className="text-gold">www.agarwalornaments.com</span> (the "Site"), make purchases, or interact with our services.
        </p>

        <section>
          <h2 className="text-3xl md:text-4xl text-gold font-semibold mb-6">1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-3 mt-4">
            <li><strong>Personal Information:</strong> Name, email address, phone number, shipping/billing address, payment details (processed securely via third-party gateways).</li>
            <li><strong>Non-Personal Information:</strong> IP address, browser type, device information, pages visited, time spent on site, referral sources.</li>
            <li><strong>Cookies & Similar Technologies:</strong> We use cookies to enhance user experience, analyze traffic, and for marketing. You can manage cookie preferences via your browser settings.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl text-gold font-semibold mb-6">2. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-3 mt-4">
            <li>To process orders, deliveries, and payments</li>
            <li>To communicate with you about your orders, inquiries, promotions, and updates</li>
            <li>To improve our website, products, and services</li>
            <li>To prevent fraud and ensure site security</li>
            <li>To comply with legal obligations under Indian laws (including DPDP Act, 2023)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl text-gold font-semibold mb-6">3. Sharing of Information</h2>
          <p>We do not sell your personal information. We may share it only in these limited cases:</p>
          <ul className="list-disc pl-6 space-y-3 mt-4">
            <li>With service providers (payment gateways like Razorpay/PayU, logistics partners like Delhivery/BlueDart, email services)</li>
            <li>When required by law, court order, or government authorities</li>
            <li>In case of merger, acquisition, or sale of assets</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl text-gold font-semibold mb-6">4. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl text-gold font-semibold mb-6">5. Your Rights</h2>
          <p>Under applicable laws (including Digital Personal Data Protection Act, 2023), you have the right to:</p>
          <ul className="list-disc pl-6 space-y-3 mt-4">
            <li>Access, correct, or delete your personal data</li>
            <li>Withdraw consent for data processing (where consent-based)</li>
            <li>Opt-out of marketing communications</li>
            <li>File a grievance with the Data Protection Officer</li>
          </ul>
          <p className="mt-4">
            To exercise these rights, contact us at <a href="mailto:Gargrishi4321@gmail.com" className="text-gold hover:underline">Gargrishi4321@gmail.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl text-gold font-semibold mb-6">6. Third-Party Links & Services</h2>
          <p>Our site may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to read their policies.</p>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl text-gold font-semibold mb-6">7. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date.</p>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl text-gold font-semibold mb-6">8. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact:
          </p>
          <div className="bg-gray-900/50 p-6 rounded-xl border border-gold/20">
            <p><strong>Agarwal Ornaments</strong></p>
            <p>Lucknow, Uttar Pradesh, India</p>
            <p>Email: <a href="mailto:Gargrishi4321@gmail.com" className="text-gold hover:underline">Gargrishi4321@gmail.com</a></p>
            <p>Phone: +91-95983 15848</p>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Privacy;