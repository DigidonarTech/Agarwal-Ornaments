import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Agarwal Ornaments" className="h-10 md:h-14 object-contain" />
        </Link>
        <ul className="hidden md:flex space-x-10 text-gold font-medium uppercase tracking-wider text-sm">
          <li><Link to="/" className="hover:text-white transition duration-300">Home</Link></li>
          <li><Link to="/collections" className="hover:text-white transition duration-300">Collections</Link></li> {/* Future page */}
          <li><Link to="/about" className="hover:text-white transition duration-300">About</Link></li>
          <li><Link to="/contact" className="hover:text-white transition duration-300">Contact</Link></li>
        </ul>
        {/* Mobile menu button – simple for now */}
        <div className="md:hidden">
          <button className="text-gold">Menu</button> {/* Add hamburger later if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;