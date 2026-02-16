import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gold/20 py-10 px-6 text-center text-gold/80 text-sm">
      <div className="max-w-7xl mx-auto">
        <p className="mb-4">&copy; {new Date().getFullYear()} Agarwal Ornaments. All rights reserved.</p>
        <ul className="flex justify-center space-x-8 mb-6">
          <li><Link to="/terms" className="hover:text-gold transition">Terms & Conditions</Link></li>
          <li><Link to="/privacy" className="hover:text-gold transition">Privacy Policy</Link></li>
          <li><Link to="/contact" className="hover:text-gold transition">Contact Us</Link></li>
        </ul>
        <p className="text-gold/60">Crafted with elegance in Lucknow</p>
      </div>
    </footer>
  );
};

export default Footer;